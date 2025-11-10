import createMDX from '@next/mdx'
import { remarkCompressJsx } from './_scripts/remark-compress-jsx.mjs'
import withMarkdoc from '@markdoc/next.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  images: {
    // Image optimization for local images
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return []
  },
  assetPrefix: 'https://speedwell.gallop.software',
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkCompressJsx],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
