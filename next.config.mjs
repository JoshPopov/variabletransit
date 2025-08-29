/** @type {import('next').NextConfig} */
const nextConfig = () => {
  // When building on GitHub Actions, `GITHUB_REPOSITORY` contains
  // the `owner/repo` slug. We use this to configure a base path so
  // that the statically exported site works when served from
  // `https://<user>.github.io/<repo>/`.
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]

  /** @type {import('next').NextConfig} */
  const config = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      unoptimized: true,
    },
    // Generate a static site that can be hosted on GitHub Pages.
    output: 'export',
    trailingSlash: true,
  }

  // If the repo name is available (e.g. in GitHub Actions), prefix
  // asset paths so that static files resolve correctly on GitHub Pages.
  if (repo) {
    config.basePath = `/${repo}`
    config.assetPrefix = `/${repo}/`
  }

  return config
}

export default nextConfig
