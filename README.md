# Speedwell

Speedwell is a modern, flexible Next.js theme by [Gallop](https://gallop.software), built with [Tailwind CSS](https://tailwindcss.com) and powered by MDX for content management.

**Demo:** [speedwell.gallop.software](https://speedwell.gallop.software)

## Features

- 🚀 Built with Next.js 14+ and React
- 🎨 Styled with Tailwind CSS
- 📝 MDX-powered content management
- 🖼️ Optimized image handling with responsive variants
- 🔍 Built-in search functionality
- 📱 Fully responsive design
- ⚡ Lightning-fast performance
- 🎭 Customizable components and layouts

## Getting Started

First, install the npm dependencies:

```bash
npm install
```

Generate optimized image metadata:

```bash
npm run images
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Project Structure

```
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── markdown/     # MDX content files
│   │   └── api/          # API routes
│   ├── components/       # React components
│   ├── styles/          # Global styles
│   ├── utils/           # Utility functions
│   └── hooks/           # Custom React hooks
├── public/
│   └── images/          # Static images
├── _data/               # Generated metadata
└── _scripts/            # Build scripts
```

## Customization

Edit the MDX files in `/src/app/markdown/` to update your content. The site will auto-update as you edit these files.

Customize components in `/src/components/` to match your brand and design preferences.

Update site metadata in `/src/app/metadata.tsx` for SEO and social sharing.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run images` - Process and optimize images
- `npm run search` - Generate search index

## Documentation

For more information about Gallop themes and products, visit [gallop.software](https://gallop.software).

## Support

Need help with customization or development? Contact [webplant.media](https://webplant.media) for professional web development services.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com)
- [Gallop Themes](https://gallop.software)
