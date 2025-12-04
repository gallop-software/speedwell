# Deployment Guide

Complete guide to deploying Speedwell.

[← Back to README](../README.md)

---

## Vercel Deployment (Recommended)

Vercel provides the best experience for Next.js applications with zero configuration.

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/gallop-software/speedwell)

### Manual Deployment

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Build your site**

   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

### First-Time Setup

1. Link your repository to Vercel
2. Configure build settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`

3. Set environment variables (if needed)

### Automatic Deployments

Once connected, Vercel automatically deploys:

- **Production:** Push to `main` branch
- **Preview:** Push to any branch or pull request

---

## Environment Variables

### Required Variables

None required for basic deployment.

### Optional Variables

```bash
# Site URL (for absolute URLs)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Analytics (if using external services)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact form (if using email service)
EMAIL_SERVICE_API_KEY=your-api-key
```

### Setting Variables in Vercel

1. Go to project settings
2. Navigate to "Environment Variables"
3. Add variables for:
   - **Production**
   - **Preview**
   - **Development**

### Setting Variables Locally

Create `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Important:** Never commit `.env.local` to Git.

### Pushing Variables to Vercel

Use the included script:

```bash
# Push to current project
npm run env

# Push to production
npm run env:prod

# Push to preview
npm run env:prev
```

---

## Pre-Deployment Checklist

### 1. Content & Images

- [ ] Run `npm run images` to process all images
- [ ] Run `npm run blog` to generate blog metadata
- [ ] Run `npm run search` to build search index
- [ ] Run `npm run favicon` to generate favicons
- [ ] Run `npm run featured-image` for social preview

### 2. Metadata

- [ ] Update `src/app/metadata.tsx` with site info
- [ ] Check page titles and descriptions
- [ ] Verify Open Graph images
- [ ] Test social sharing previews

### 3. Testing

- [ ] Run `npm run build` locally
- [ ] Test production build: `npm run start`
- [ ] Check for build errors
- [ ] Verify all pages load
- [ ] Test on mobile devices

### 4. SEO

- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt
- [ ] Check structured data
- [ ] Test page speed (Lighthouse)

---

## Custom Domain

### Adding Domain to Vercel

1. Go to project settings
2. Navigate to "Domains"
3. Add your domain
4. Follow DNS configuration instructions

### DNS Configuration

**Option 1: Nameservers (Recommended)**

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Option 2: A Record**

```
Type: A
Name: @
Value: 76.76.21.21
```

**Option 3: CNAME**

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### SSL Certificate

Vercel automatically provisions SSL certificates via Let's Encrypt.

---

## Build Configuration

### Next.js Config

Edit `next.config.mjs` for custom configuration:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    domains: ['yourdomain.com'],
    formats: ['image/webp'],
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ]
  },

  // Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ]
  },
}

export default nextConfig
```

---

## Alternative Hosting

### Netlify

1. **Install Netlify CLI**

   ```bash
   npm install -g netlify-cli
   ```

2. **Build**

   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

**netlify.toml:**

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Self-Hosted

1. **Build**

   ```bash
   npm run build
   ```

2. **Start server**

   ```bash
   npm run start
   ```

3. **Use process manager (PM2)**
   ```bash
   npm install -g pm2
   pm2 start npm --name "speedwell" -- start
   pm2 save
   pm2 startup
   ```

### Docker

**Dockerfile:**

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

**Build & Run:**

```bash
docker build -t speedwell .
docker run -p 3000:3000 speedwell
```

---

## Performance Optimization

### Image Optimization

- Use WebP format (generated automatically)
- Lazy load images (`loading="lazy"`)
- Specify dimensions to prevent layout shift
- Use responsive images with srcset

### Code Splitting

Next.js automatically code-splits by route. Use dynamic imports for heavy components:

```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
})
```

### Caching

Vercel automatically caches:

- Static assets (immutable)
- API routes (configurable)
- Pages (configurable)

Configure cache headers:

```tsx
export const revalidate = 3600 // Revalidate every hour
```

---

## Monitoring

### Vercel Analytics

Built-in analytics are included with `@vercel/analytics`:

```tsx
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Error Tracking

Add error tracking service:

```bash
npm install @sentry/nextjs
```

**sentry.client.config.js:**

```javascript
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
})
```

---

## Troubleshooting

### Build Failures

**Check:**

- All dependencies installed
- No TypeScript errors
- Environment variables set
- `.env.local` not in Git

**Common fixes:**

```bash
# Clear cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Runtime Errors

**Check:**

- Browser console for errors
- Vercel function logs
- API route responses
- Image paths are correct

### Slow Build Times

**Optimize:**

- Remove unused dependencies
- Use `next.config.mjs` to exclude files
- Enable caching in build pipeline
- Use incremental static regeneration

---

## Continuous Integration

### GitHub Actions

**.github/workflows/deploy.yml:**

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

[← Back to README](../README.md) | [Scripts Reference](./scripts.md)
