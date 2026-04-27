const docs = [
  { file: "index.md", title: "Dashboard" },
  { file: "01-delta-lake.md", title: "01 Delta Lake" },
  { file: "02-rag-patterns.md", title: "02 RAG Patterns" },
  { file: "03-model-governance.md", title: "03 Model Governance" },
  { file: "04-supporting-tools.md", title: "04 Supporting Tools" },
  { file: "glossary.md", title: "Glossary" },
  { file: "flashcards.md", title: "Flashcards" },
  { file: "practice-questions.md", title: "Practice Questions" },
  { file: "quiz-01.md", title: "Quiz 01" },
  { file: "quiz-02.md", title: "Quiz 02" },
  { file: "question-stream.md", title: "Question Stream" },
  { file: "gaps-and-next-steps.md", title: "Gaps and Next Steps" },
  { file: "sources.md", title: "Sources" }
];

const basePath = "../study-hub/";
const listEl = document.getElementById("doc-list");
const contentEl = document.getElementById("content");
const sidebarEl = document.getElementById("sidebar");
const menuBtn = document.getElementById("menu-btn");
const installBtn = document.getElementById("install-btn");

let deferredPrompt = null;

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function applyInline(text) {
  let t = escapeHtml(text);
  t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  return t;
}

function renderMarkdown(md) {
  const lines = md.replaceAll("\r\n", "\n").split("\n");
  const html = [];
  let inUl = false;
  let inOl = false;
  let inCode = false;
  let inTable = false;
  let tableRows = [];

  function closeLists() {
    if (inUl) { html.push("</ul>"); inUl = false; }
    if (inOl) { html.push("</ol>"); inOl = false; }
  }

  function flushTable() {
    if (!inTable || tableRows.length === 0) return;
    const header = tableRows[0];
    const body = tableRows.slice(1).filter(r => !r.every(c => /^-+$/.test(c.replaceAll(" ", ""))));
    html.push("<table><thead><tr>");
    header.forEach(cell => html.push(`<th>${applyInline(cell.trim())}</th>`));
    html.push("</tr></thead><tbody>");
    body.forEach(row => {
      html.push("<tr>");
      row.forEach(cell => html.push(`<td>${applyInline(cell.trim())}</td>`));
      html.push("</tr>");
    });
    html.push("</tbody></table>");
    tableRows = [];
    inTable = false;
  }

  for (const raw of lines) {
    const line = raw ?? "";

    if (line.startsWith("```")) {
      flushTable();
      closeLists();
      if (!inCode) {
        inCode = true;
        html.push("<pre><code>");
      } else {
        inCode = false;
        html.push("</code></pre>");
      }
      continue;
    }

    if (inCode) {
      html.push(`${escapeHtml(line)}\n`);
      continue;
    }

    if (line.includes("|") && line.trim().startsWith("|") && line.trim().endsWith("|")) {
      closeLists();
      inTable = true;
      const row = line.trim().slice(1, -1).split("|");
      tableRows.push(row);
      continue;
    } else {
      flushTable();
    }

    if (line.trim() === "") {
      closeLists();
      continue;
    }

    if (line.startsWith("### ")) {
      closeLists();
      html.push(`<h3>${applyInline(line.slice(4))}</h3>`);
      continue;
    }
    if (line.startsWith("## ")) {
      closeLists();
      html.push(`<h2>${applyInline(line.slice(3))}</h2>`);
      continue;
    }
    if (line.startsWith("# ")) {
      closeLists();
      html.push(`<h1>${applyInline(line.slice(2))}</h1>`);
      continue;
    }
    if (line.trim() === "---") {
      closeLists();
      html.push("<hr>");
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      if (!inOl) {
        closeLists();
        inOl = true;
        html.push("<ol>");
      }
      html.push(`<li>${applyInline(line.replace(/^\d+\.\s+/, ""))}</li>`);
      continue;
    }

    if (line.startsWith("- [ ] ")) {
      if (!inUl) {
        closeLists();
        inUl = true;
        html.push("<ul>");
      }
      html.push(`<li><input type="checkbox" disabled> ${applyInline(line.slice(6))}</li>`);
      continue;
    }

    if (line.startsWith("- ")) {
      if (!inUl) {
        closeLists();
        inUl = true;
        html.push("<ul>");
      }
      html.push(`<li>${applyInline(line.slice(2))}</li>`);
      continue;
    }

    closeLists();
    html.push(`<p>${applyInline(line)}</p>`);
  }

  flushTable();
  closeLists();
  return html.join("\n");
}

async function loadDoc(file) {
  const links = listEl.querySelectorAll("a");
  links.forEach(link => link.classList.toggle("active", link.dataset.file === file));

  try {
    const response = await fetch(`${basePath}${file}`);
    if (!response.ok) throw new Error(`Failed to load ${file}`);
    const text = await response.text();
    contentEl.innerHTML = renderMarkdown(text);
    window.history.replaceState({}, "", `#${file}`);
  } catch (err) {
    contentEl.innerHTML = `<h2>Could not load file</h2><p>${escapeHtml(String(err.message || err))}</p><p>If you are running this locally, start a static web server and open this app via http://localhost.</p>`;
  }
}

function buildNav() {
  const items = docs.map(doc => {
    return `<li><a href="#${doc.file}" data-file="${doc.file}">${doc.title}</a></li>`;
  });
  listEl.innerHTML = items.join("");
  listEl.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-file]");
    if (!link) return;
    event.preventDefault();
    loadDoc(link.dataset.file);
    sidebarEl.classList.remove("open");
  });
}

function setupPwaInstall() {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installBtn.hidden = false;
  });

  installBtn.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBtn.hidden = true;
  });
}

function setupUi() {
  menuBtn.addEventListener("click", () => sidebarEl.classList.toggle("open"));
}

async function init() {
  buildNav();
  setupUi();
  setupPwaInstall();

  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("./sw.js");
    } catch (e) {
      // no-op
    }
  }

  const hash = window.location.hash.replace("#", "");
  const selected = docs.some(d => d.file === hash) ? hash : "index.md";
  loadDoc(selected);
}

init();
