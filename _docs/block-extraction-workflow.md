# Block Extraction Workflow

Guide for converting large content pages into modular block components.

## When to Use This Workflow

- Content file has multiple distinct sections (hero, showcases, testimonials, etc.)
- File exceeds ~300 lines
- Sections could be reused on other pages
- Need easier SEO auditing per section
- Want cleaner diffs and isolated testing

## Prerequisites

- Each section should have a comment marker above it (e.g., `{/* Hero */}`, `{/* Showcase */}`)
- Content file exports a `Content()` component and `metadata` object
- Blocks directory exists at `src/blocks/`

## Step-by-Step Process

### 1. Identify Sections

Review the content file and note all comment markers:
```tsx
{/* Hero */}
<Section>...</Section>

{/* Showcase */}
<Section>...</Section>

{/* Testimonial */}
<Testimonial1>...</Testimonial1>
```

### 2. Create Block Files

For each commented section:

**Naming Convention:**
- Use kebab-case: `{type}-{number}.tsx`
- Always start with `-1` (e.g., `hero-1.tsx`, `showcase-1.tsx`)
- If file exists, increment number (e.g., `showcase-2.tsx`, `showcase-3.tsx`)
- Never overwrite existing blocks

**File Template:**
```tsx
// filepath: src/blocks/{type}-{n}.tsx
import Component1 from '@/components/component-1'
import Component2 from '@/components/component-2'
// ... import all components used in the section

export default function {Type}{N}() {
  return (
    // Paste the entire section JSX here
    <Section>
      ...
    </Section>
  )
}
```

**Example:**
```tsx
// filepath: src/blocks/hero-2.tsx
import {
  Navbar,
  Columns,
  Column,
  Image,
  Accent,
  Heading,
  Paragraph,
  Buttons,
  Button,
} from '@/components'
import arrowDownIcon from '@iconify/icons-heroicons/arrow-down-20-solid'

export default function Hero2() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 bg-accent3 z-0"></div>
        <div className="pt-0 pb-20 lg:py-24 px-6 mx-auto max-w-[1600px] relative">
          <Columns reverseColumns>
            <Column className="relative -mx-6">
              <Image
                className="w-full h-[450px] sm:h-[600px] lg:h-[800px] object-cover"
                src="/images/portfolio/pexels-alex-qian-1180283-2343465.jpg"
                alt="Cupidatat consequat anim adipiscing sint est culpa"
                rounded="rounded-none"
                size="large"
                lazy={false}
              />
              <Accent className="absolute hidden lg:block -bottom-10 lg:bottom-auto left-6 lg:-top-20 lg:-left-40 transform -rotate-12">
                dolor sit
              </Accent>
            </Column>
            <Column className="mx-auto max-w-2xl lg:max-w-7xl">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Aliqua duis in culpa labore
              </Heading>
              <Paragraph>
                Culpa dolor dolore nisi non consequat elit aliquip pariatur
                aute cillum fugiat mollit occaecat aute sed sunt ut esse
              </Paragraph>
              <Paragraph>
                Magna veniam magna velit exercitation fugiat sunt elit
                reprehenderit velit exercitation deserunt sint aute fugiat ea
                est commodo id lorem incididunt ea adipiscing qui ipsum
                officia magna ullamco do sed lorem est occaecat ut ex
                consequat cillum exercitation ex et
              </Paragraph>
              <Buttons className="">
                <Button
                  href="#services"
                  icon={arrowDownIcon}
                  iconPlacement="after"
                >
                  Ullamco ad irure incididunt est
                </Button>
              </Buttons>
            </Column>
          </Columns>
        </div>
      </div>
    </div>
  )
}
```

### 3. Collect Required Imports

For each section, identify all components used:
- Look for JSX tags: `<Navbar />`, `<Hero>`, `<Section>`, etc.
- Check for icon imports if using `icon={arrowDownIcon}`
- Note any utility imports

Common components to check:
```tsx
import {
  Cover,
  Section,
  Heading,
  Paragraph,
  Quote,
  Buttons,
  Button,
  Accent,
  Swiper,
  Testimonial1,
  FancyHeading,
  Columns,
  Column,
  List,
  Li,
  Gallery,
  GalleryItem,
  Navbar,
  Image,
} from '@/components'
import arrowDownIcon from '@iconify/icons-heroicons/arrow-down-20-solid'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'
```

### 4. Update Content File

**Add Block Imports** (at top, after existing imports):
```tsx
import Hero2 from '@/blocks/hero-2'
import Showcase1 from '@/blocks/showcase-1'
import Showcase2 from '@/blocks/showcase-2'
// ... etc.
```

**Replace Sections with Components:**
```tsx
export default function Content() {
  return (
    <>
      <Hero2 />
      <Showcase1 />
      <Showcase2 />
      {/* ... etc. */}
    </>
  )
}
```

**Keep Metadata Intact:**
- Do not modify the `export const metadata = { ... }` object
- All SEO data stays in the content file

### 5. Verify Structure

Final content file should look like:
```tsx
// filepath: src/content/{page}.tsx
import Block1 from '@/blocks/block-1'
import Block2 from '@/blocks/block-2'
// ... all block imports

export default function Content() {
  return (
    <>
      <Block1 />
      <Block2 />
      {/* Clean, readable component list */}
    </>
  )
}

export const metadata = {
  // ... unchanged metadata
}
```

## Block Naming Reference

| Comment | Block File | Component Name |
|---------|-----------|---------------|
| `{/* Hero */}` | `hero-1.tsx` | `Hero1` |
| `{/* Hero */}` (2nd) | `hero-2.tsx` | `Hero2` |
| `{/* Showcase */}` | `showcase-1.tsx` | `Showcase1` |
| `{/* Showcase */}` (2nd) | `showcase-2.tsx` | `Showcase2` |
| `{/* Section */}` | `section-4.tsx` | `Section4` |
| `{/* Cover */}` | `cover-1.tsx` | `Cover1` |
| `{/* Testimonial */}` | `testimonial-1.tsx` | `Testimonial1` |

**Increment Rules:**
- First occurrence of type: use `-1`
- If `hero-1.tsx` exists and you create another Hero: use `hero-2.tsx`
- If `showcase-1.tsx` through `showcase-5.tsx` exist: next is `showcase-6.tsx`
- Check `src/blocks/` directory before numbering

## Common Pitfalls

❌ **Don't:**
- Overwrite existing block files
- Forget to import components used in the block
- Remove or modify the metadata object
- Use named exports instead of default exports
- Mix up component names between `@/components` imports and block names

✅ **Do:**
- Always check for existing block numbers before creating
- Include all necessary imports in each block file
- Keep Content() component clean and simple
- Preserve original JSX structure and formatting
- Add descriptive comments to complex blocks
- Use default exports for all block components

## Example: Complete Extraction

**Before** (`src/content/portfolio.tsx` - 800 lines):
```tsx
import { ... 20+ component imports }

export default function Content() {
  return (
    <>
      {/* Hero */}
      <div>
        <Navbar />
        <div className="relative">
          ... 50 lines of JSX
        </div>
      </div>

      {/* Showcase */}
      <Section className="bg-body py-30">
        <Columns>
          ... 100 lines of JSX
        </Columns>
      </Section>

      {/* ... 6 more large sections */}
    </>
  )
}

export const metadata = { ... }
```

**After** (`src/content/portfolio.tsx` - 80 lines):
```tsx
import Hero2 from '@/blocks/hero-2'
import Showcase1 from '@/blocks/showcase-1'
import Showcase2 from '@/blocks/showcase-2'
import Showcase3 from '@/blocks/showcase-3'
import Showcase4 from '@/blocks/showcase-4'
import Showcase5 from '@/blocks/showcase-5'
import Section4 from '@/blocks/section-4'
import Cover1 from '@/blocks/cover-1'
import Testimonial1 from '@/blocks/testimonial-1'

export default function Content() {
  return (
    <>
      <Hero2 />
      <Showcase1 />
      <Showcase2 />
      <Showcase3 />
      <Showcase4 />
      <Showcase5 />
      <Section4 />
      <Cover1 />
      <Testimonial1 />
    </>
  )
}

export const metadata = { ... }
```

## Benefits

✅ **Maintainability**: Each block is ~50-100 lines vs 800-line monolith  
✅ **Reusability**: Blocks can be imported on multiple pages  
✅ **SEO Auditing**: Easy to scan headings and keywords per block  
✅ **Testing**: Isolated components are easier to unit test  
✅ **Collaboration**: Smaller files = cleaner git diffs  
✅ **Performance**: Potential for lazy loading blocks later  

## Troubleshooting

### Issue: Component not found
**Error:** `Module not found: Can't resolve '@/components/Component'`

**Solution:** Check that all components used in the block are imported. Look at the original content file to see what was imported before extraction.

### Issue: Wrong block number
**Error:** Block `showcase-1.tsx` already exists

**Solution:** Check `src/blocks/` directory for existing files. Use the next available number (e.g., `showcase-6.tsx` if 1-5 exist).

### Issue: Page renders blank
**Error:** No visible error but page is blank

**Solution:** 
1. Check that all block imports in the content file are correct
2. Verify each block file has a default export
3. Check browser console for React errors
4. Ensure all block files are saved

### Issue: Duplicate component names
**Error:** `Testimonial1` conflicts between `@/components` and block name

**Solution:** Rename the block component (e.g., `Testimonial1Block`) or use an alias in the import:
```tsx
import { Testimonial1 as Testimonial1Component } from '@/components'
```

## Next Steps

After extraction:
1. Run `npm run dev` to test the page renders correctly
2. Run `npm run lint` to catch any import issues
3. Test the page in development to ensure all blocks render
4. Audit headings across blocks for SEO keyword consistency
5. Consider adding JSDoc comments to block files describing their purpose
6. Document any props if blocks need to become configurable

## Running the Page

The content file is automatically rendered by Next.js dynamic routing:

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Visit the page:**
   ```
   http://localhost:3000/{slug-from-metadata}
   ```
   Example: If `metadata.slug: 'lorem-ipsum'`, visit `http://localhost:3000/lorem-ipsum`

3. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

---

*This workflow was created for the Speedwell project and can be reused for any Next.js/React content pages.*
