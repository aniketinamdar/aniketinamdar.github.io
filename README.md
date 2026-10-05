# Portfolio

Static site (no build step). Pages: `/` (home), `/resume/`, `/blog/` (each a folder with an `index.html`, so URLs have no `.html`).

## Preview locally

    python3 -m http.server 8000

Then open http://localhost:8000.

## Deploy on GitHub Pages

1. Push this folder to a GitHub repo (name it `<username>.github.io` for a root URL).
2. Settings → Pages → Deploy from branch → `main` / root.

All links are relative, so it also works from `<username>.github.io/<repo>/`.

## Updating

- **Resume:** replace `assets/Aniket-Inamdar-Resume.pdf` (keep the filename).
- **Blog post:** copy the `blog/_template/` folder to `blog/<slug>/`, then add an entry to `blog/posts.json` (`"url": "<slug>/"`).
