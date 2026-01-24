# Content Management

Guide to managing content in Speedwell's TSX-based system.

[← Back to README](../README.md)

---

## Overview

Speedwell uses **TSX files for content** instead of a traditional CMS. This approach provides version control, type safety, and seamless AI integration.

---

## Why TSX Content?

### Benefits

✅ **Version Control** - Track all content changes in Git  
✅ **Type Safety** - TypeScript catches errors before deployment  
✅ **AI-Friendly** - AI assistants can directly edit content  
✅ **Component-Based** - Reuse blocks across pages  
✅ **No Database** - Faster, cheaper, more secure  
✅ **Preview Instantly** - See changes in milliseconds  
✅ **Developer Experience** - Full IDE support with autocomplete

### vs Traditional CMS

| Feature         | TSX Content   | Traditional CMS |
| --------------- | ------------- | --------------- |
| Version Control | ✅ Git        | ❌ Database     |
| Type Safety     | ✅ TypeScript | ❌ None         |
| Speed           | ✅ Instant    | ⏱️ Slow queries |
| Cost            | ✅ Free       | 💰 Hosting fees |
| AI Integration  | ✅ Direct     | ⚠️ API required |
| Preview         | ✅ Real-time  | ⏱️ Delayed      |

---

## Content Structure

### Pages

Content lives in `src/content/`:

```
src/content/
├── home.tsx
├── about.tsx
├── services.tsx
├── contact.tsx
└── post/
    ├── first-post.tsx
    └── second-post.tsx
```

### Basic Page Structure

```tsx
// src/content/home.tsx
import Hero1 from '@/blocks/hero-1'
import Section3 from '@/blocks/section-3'
import CallToAction2 from '@/blocks/call-to-action-2'

export default function HomePage() {
  return (
    <>
      <Hero1
        title="Welcome to Our Business"
        subtitle="We deliver excellence"
        backgroundImage="/images/hero.jpg"
      />

      <Section3
        heading="Our Services"
        description="What we offer"
        items={services}
      />

      <CallToAction2
        heading="Ready to get started?"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  )
}

const services = [
  { title: 'Service 1', description: 'Description...' },
  { title: 'Service 2', description: 'Description...' },
]
```

---

## Content Blocks

### Available Blocks

Blocks are reusable content components in `src/blocks/`:

**Heroes** - `hero-1.tsx` through `hero-13.tsx`  
**Sections** - `section-1.tsx` through `section-32.tsx`  
**CTAs** - `call-to-action-1.tsx` through `call-to-action-6.tsx`  
**Contact** - `contact-1.tsx`, `contact-2.tsx`  
**Content** - `content-1.tsx` through `content-5.tsx`  
**Showcases** - `showcase-1.tsx` through `showcase-3.tsx`  
**Others** - `about-1.tsx`, `about-2.tsx`, `accordion-1.tsx`, etc.

### Using Blocks

```tsx
import Hero1 from '@/blocks/hero-1'
;<Hero1
  title="Page Title"
  subtitle="Subtitle text"
  backgroundImage="/images/hero.jpg"
/>
```

### Block Props

Each block accepts specific props. Check the block file for available options:

```tsx
// src/blocks/hero-1.tsx
interface Hero1Props {
  title: string
  subtitle?: string
  backgroundImage?: string
  buttonText?: string
  buttonLink?: string
}
```

---

## Blog Posts

### Creating a Post

```tsx
// src/content/post/my-first-post.tsx

export const metadata = {
  title: 'My First Blog Post',
  description: 'A description of the post',
  date: '2025-12-03',
  categories: ['News', 'Updates'],
  featuredImage: '/images/post-image.jpg',
  author: 'John Doe',
}

export default function Post() {
  return (
    <article>
      <h1>{metadata.title}</h1>
      <p className="text-gray-600">{metadata.date}</p>

      <p>Your content here...</p>

      <h2>Section Heading</h2>
      <p>More content...</p>
    </article>
  )
}
```

### Post Metadata

Required fields:

- `title` - Post title
- `description` - SEO description
- `date` - Publication date (YYYY-MM-DD)

Optional fields:

- `categories` - Array of category strings
- `featuredImage` - Path to image
- `author` - Author name

### Generating Post Index

After creating posts, run:

```bash
npm run blog
```

This generates `_data/_blog.json` with all post metadata for listing pages.

---

## Markdown Content

Speedwell supports Markdoc for markdown content:

### Creating Markdown Page

```markdown
---
title: About Us
description: Learn about our company
---

# About Our Company

We are a **leading provider** of services.

## Our Mission

To deliver excellence.

## Our Team

- John Doe - CEO
- Jane Smith - CTO
```

### Using Markdoc Components

```markdown
{% hero
   title="Welcome"
   subtitle="To our site" /%}

{% callout type="info" %} Important information here {% /callout %}
```

---

## SEO & Metadata

### Page Metadata

```tsx
// src/content/about.tsx

export const metadata = {
  title: 'About Us - Company Name',
  description: 'Learn about our company and mission',
  openGraph: {
    title: 'About Us',
    description: 'Company description',
    images: ['/images/about-og.jpg'],
  },
}

export default function AboutPage() {
  return <div>...</div>
}
```

### Site-wide Metadata

Edit `src/app/metadata.tsx`:

```tsx
export const metadata = {
  title: {
    default: 'Site Name',
    template: '%s | Site Name',
  },
  description: 'Default site description',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Site Name',
  },
}
```

---

## Dynamic Content

### Using State

```tsx
'use client'

import { useState } from 'react'
import Section1 from '@/blocks/section-1'

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(0)

  return (
    <>
      <Section1
        heading={services[selectedService].title}
        description={services[selectedService].description}
      />

      <nav>
        {services.map((service, i) => (
          <button
            key={i}
            onClick={() => setSelectedService(i)}
          >
            {service.title}
          </button>
        ))}
      </nav>
    </>
  )
}
```

### Fetching Data

```tsx
// Server Component
async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}

export default async function Page() {
  const data = await getData()

  return (
    <Section1
      heading="Latest Updates"
      items={data.items}
    />
  )
}
```

---

## Content Best Practices

### 1. Organize by Type

```
src/content/
├── pages/           # Static pages
├── post/            # Blog posts
├── services/        # Service pages
└── portfolio/       # Portfolio items
```

### 2. Use Consistent Naming

```tsx
// Good
home.tsx
about.tsx
contact.tsx

// Avoid
HomePage.tsx
ABOUT.tsx
Contact - Page.tsx
```

### 3. Extract Repeated Data

```tsx
// data/services.ts
export const services = [
  { id: 1, title: 'Service 1', description: '...' },
  { id: 2, title: 'Service 2', description: '...' },
]

// content/services.tsx
import { services } from '@/data/services'
import Section3 from '@/blocks/section-3'

export default function ServicesPage() {
  return <Section3 items={services} />
}
```

### 4. Type Your Data

```tsx
// types/content.ts
export interface Service {
  id: number
  title: string
  description: string
  icon?: string
}

// content/services.tsx
import type { Service } from '@/types/content'

const services: Service[] = [...]
```

---

## Editing Workflow

### With AI Assistant

1. **Open file** - `src/content/home.tsx`
2. **Ask AI** - "Update the hero title to..."
3. **AI edits** - Direct file modification
4. **Preview** - Changes appear instantly
5. **Commit** - `git commit -m "Update homepage hero"`

### Without AI

1. Open file in your editor
2. Edit TSX content
3. Save (hot reload shows changes)
4. Commit to Git

---

## Search Integration

Content is automatically indexed when you run:

```bash
npm run search
```

This crawls your pages and creates a search index for FlexSearch.

---

[← Back to README](../README.md) | [Scripts Reference](./scripts.md)
