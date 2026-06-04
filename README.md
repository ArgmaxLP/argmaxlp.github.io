# argmaxlp.com

The Argmax website. Built with [Astro](https://astro.build), deployed to
GitHub Pages by a GitHub Action on every push to `main`.

## Writing a blog post

Add a Markdown file to `src/content/blog/`, e.g. `src/content/blog/my-post.md`:

```markdown
---
title: My post title
date: 2026-06-04
description: Optional one-line summary (used for link previews).
---

The post body, in plain Markdown.
```

The filename becomes the URL: `my-post.md` → `argmaxlp.com/blog/my-post/`.
Commit, push to `main`, and the site rebuilds and deploys automatically
(takes a minute or two — watch the Actions tab on GitHub).

## Editing pages

- Home: `src/pages/index.astro`
- About: `src/pages/about.astro`
- Contact: `src/pages/contact.astro`
- Shared header/footer: `src/layouts/Base.astro`
- Styles: `src/styles/global.css`

## Running locally (optional)

Requires Node 20+ (`nvm use --lts` if your default is older):

```sh
npm install
npm run dev      # live-reloading preview at localhost:4321
npm run build    # production build into dist/
```

## Layout notes

- `public/` — files copied verbatim to the site root (logo mark, favicon,
  `CNAME` for the custom domain — don't delete that one).
- `assets/logo.svg` — the canonical logo. `public/mark.svg` is a copy of it;
  if the logo ever changes, update both.
- `.github/workflows/deploy.yml` — the build-and-deploy pipeline. GitHub
  Pages must be set to deploy from "GitHub Actions" (repo Settings → Pages).
