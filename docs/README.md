# Study Hub Web App (PWA)

This wraps your markdown notes in `../study-hub/` as a mobile-friendly Progressive Web App.

## Run Locally

Use any static server from the workspace root:

```bash
python -m http.server 8080
```

Then open:

`http://localhost:8080/study-hub-app/`

## Android Install

1. Open the deployed URL (or local URL) in Chrome on Android.
2. Tap the menu and choose **Add to Home screen** (or **Install app**).
3. Launch it like an app from your home screen.

## Deploy Options

- GitHub Pages
- Netlify
- Cloudflare Pages
- Any static hosting

Important: deploy the workspace root (or include both `study-hub-app` and `study-hub`) so the app can fetch markdown files from `../study-hub/`.

## Notes

- The service worker caches app files and study markdown files for offline use after first load.
- To refresh cache after major edits, bump `CACHE_NAME` in `sw.js`.
