# Variable Transit

This project is a [Next.js](https://nextjs.org/) application configured for static export so it can be hosted on **GitHub Pages**.

## Local development

```bash
pnpm install
pnpm dev
```

## Build and preview the static site

```bash
# Generates the static site in the `out` directory
pnpm build
npx serve out
```

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. Ensure GitHub Pages is enabled for the repository (Settings → Pages → Build and deployment → GitHub Actions).
3. Every push to `main` triggers the [deploy workflow](.github/workflows/deploy.yml) which builds the site and publishes it to GitHub Pages.
4. After the workflow completes, your site will be available at:
   `https://<username>.github.io/<repository>/`

For a manual deploy, run `pnpm build` and upload the contents of the `out` directory to any static host.
