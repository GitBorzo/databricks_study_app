const CACHE_NAME = "study-hub-pwa-v1";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icon-192.svg",
  "./icon-512.svg"
];

const HUB_FILES = [
  "../study-hub/index.md",
  "../study-hub/01-delta-lake.md",
  "../study-hub/02-rag-patterns.md",
  "../study-hub/03-model-governance.md",
  "../study-hub/04-supporting-tools.md",
  "../study-hub/glossary.md",
  "../study-hub/flashcards.md",
  "../study-hub/practice-questions.md",
  "../study-hub/quiz-01.md",
  "../study-hub/quiz-02.md",
  "../study-hub/question-stream.md",
  "../study-hub/sources.md",
  "../study-hub/gaps-and-next-steps.md"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll([...APP_SHELL, ...HUB_FILES]))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
          return Promise.resolve();
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, copy);
        });
        return response;
      });
    })
  );
});
