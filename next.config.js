const withMDX = require('@next/mdx')()

/**
 * @type {import('next').NextConfig}
 */
const config = withMDX({
  pageExtensions: ['js', 'mdx'],
  images: { domains: ['cdn.glitch.com'] },
  async rewrites() {
    return [
      {
        source: '/.well-known/webfinger',
        destination:
          'http://mastodon.social/.well-known/webfinger?resource=acct:lachlanjc@mastodon.social',
      },
    ]
  },
})

module.exports = config
