# Speedwell

![Speedwell Theme](./public/speedwell.jpg)

**A Next.js template for small businesses featuring high-quality feminine design.** Build and deploy a professional small business website with speed and get highly ranked on Google. Manage content and images with AI using Gallop software. No CMS required.

**🌐 Demo:** [speedwell.gallop.software](https://speedwell.gallop.software)  
**📦 Repository:** [github.com/gallop-software/speedwell](https://github.com/gallop-software/speedwell)  
**📖 Documentation:** See [docs](./_docs/) folder

---

## About Gallop Templates

Speedwell is part of the [Gallop](https://gallop.software) template ecosystem, designed specifically to work seamlessly with AI assistants like GitHub Copilot, Claude, and ChatGPT. Built with an opinionated codebase optimized for AI efficiency, Gallop templates enable you to:

- **Build websites with AI** - Let AI do the technical heavy lifting while you provide instructions
- **Pixel-perfect design** - TailwindCSS integration for rapid development without leaving component files
- **Automate workflows** - AI-powered scripts for sitewide SEO improvements, image regeneration, and content updates
- **Get found online** - Battle-tested SEO foundation with structured data for search engines and AI models
- **Deploy instantly** - Next.js architecture on Vercel for cheap, fast hosting

Gallop templates are trusted by professionals achieving #1 Google rankings in competitive search terms like "dallas architects," "lubbock attorneys," and "birth center."

---

## Features

- 🚀 **Next.js 15.5** with App Router
- ⚛️ **React 19** for cutting-edge performance
- 🎨 **Tailwind CSS 4.1** for pixel-perfect design
- 📝 **TSX-powered content** - No CMS required
- 🖼️ **Intelligent image processing** with responsive variants
- 🔍 **Built-in search** powered by FlexSearch
- 📱 **Fully responsive** and mobile-optimized
- ⚡ **Lightning-fast** performance
- 🎭 **Framer Motion** animations
- 🎯 **SEO-optimized** with structured data
- 🤖 **AI-friendly** codebase structure
- 📊 **Vercel Analytics** integration

---

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your site.

### Build for Production

```bash
npm run build
npm run start
```

---

## Project Structure

```
speedwell/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [[...slug]]/       # Dynamic catch-all routes
│   │   ├── api/               # API routes
│   │   ├── block/             # Block preview routes
│   │   ├── category/          # Category pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── metadata.tsx       # Site metadata
│   │   └── not-found.tsx      # 404 page
│   ├── blocks/                # Reusable content blocks
│   │   ├── hero-*.tsx         # Hero sections
│   │   ├── section-*.tsx      # Content sections
│   │   ├── call-to-action-*.tsx
│   │   ├── contact-*.tsx
│   │   └── ...
│   ├── components/            # React components
│   │   ├── navbar/
│   │   ├── footer/
│   │   └── ui/
│   ├── content/              # Page content (TSX files)
│   ├── hooks/                # Custom React hooks
│   ├── styles/               # Global styles & fonts
│   │   ├── fonts/           # Font files & management
│   │   └── globals.css
│   ├── template/             # Page templates
│   ├── tools/                # Utility tools
│   ├── types/                # TypeScript types
│   └── utils/                # Helper functions
├── public/
│   ├── originals/            # Source images (not deployed)
│   ├── images/               # Processed images
│   ├── videos/               # Video assets
│   └── speedwell.jpg         # Featured image
├── _data/                    # Generated metadata
│   ├── _meta.json           # Image metadata
│   └── _fonts/              # Font configurations
├── _scripts/                 # Automation scripts
│   ├── process-images.js
│   ├── generate-blog-metadata.mjs
│   ├── generate-favicon.js
│   ├── generate-featured-image.js
│   └── generate-search.sh
└── _docs/                    # Documentation
```

---

## Documentation

📚 **Comprehensive Guides:**

- 📜 **[Scripts Reference](./_docs/scripts.md)** - All npm scripts explained
- 🖼️ **[Image Management](./_docs/images.md)** - Image processing system
- 🔤 **[Font System](./_docs/fonts.md)** - Adding and managing fonts
- ✍️ **[Content Guide](./_docs/content.md)** - TSX-based content management
- 🚀 **[Deployment](./_docs/deployment.md)** - Deploy to Vercel and other platforms
- 📦 **[Dependencies](./_docs/dependencies.md)** - Package details and usage

---

## Quick Reference

### Key Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run images       # Process images
npm run blog         # Generate blog metadata
npm run search       # Build search index
npm run fonts        # Compress fonts
npm run favicon      # Generate favicons
```

**See [Scripts Reference](./_docs/scripts.md) for complete documentation.**

---

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/gallop-software/speedwell)

Or manually:

```bash
npm run build
vercel --prod
```

**See [Deployment Guide](./_docs/deployment.md) for other platforms and configuration.**

---

## Support & Community

- **Documentation:** [gallop.software](https://gallop.software)
- **Issues:** [GitHub Issues](https://github.com/gallop-software/speedwell/issues)
- **Slack:** [Join Community](https://join.slack.com/t/gallop-software/shared_invite/zt-358q3rdrp-H6kKvKzpR2qgB5xJviAOcw)
- **Professional Services:** [webplant.media](https://webplant.media)

---

## License

MIT License - see [LICENSE](./LICENSE) for details

---

## Credits

**Author:** [Gallop](https://gallop.software)

**Contributors:**

- [Chris Baldelomar](https://github.com/webplantmedia)
- [Niel Wostan](https://github.com/NielWostan)

Built with ❤️ by the team at [Web Plant Media](https://webplant.media)

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Gallop Templates](https://gallop.software)
- [React Documentation](https://react.dev)
