# Block Migration Guide

This project uses the Speedwell template and needs to migrate blocks from the centralized `src/blocks/` directory to co-located `_blocks/` subdirectories within each page route.

For each page.tsx file under `src/app/`, identify which blocks it imports from `@/blocks/`. Then:

1. Create a `_blocks/` directory alongside that page.tsx (Next.js private folder convention — excluded from routing).

2. Move each block file into the page's `_blocks/` directory and rename it: drop the global number suffix. If the page uses only one block of a type (e.g., one hero), rename `hero-{n}.tsx` to `hero.tsx`. If the page uses multiple blocks of the same type, the first (in JSX render order) becomes `{type}.tsx`, and subsequent ones become `{type}-2.tsx`, `{type}-3.tsx`, etc.

3. Rename the default export function inside each block file to match the new filename: `hero.tsx` exports `Hero`, `content-2.tsx` exports `Content2`, etc.

4. Update the page.tsx imports from `@/blocks/{old-name}` to `./_blocks/{new-name}` and update the JSX component names to match.

5. If a block is imported by multiple pages, duplicate it into each page's `_blocks/` directory — blocks are page-specific content, not shared components.

6. If the page has a wrapper function named `Content()`, rename it to `Blocks()` to avoid collisions with `Content` block imports.

7. If a block file imports a component with the same name as its export (e.g., `import { Cover } from '@/components/cover'` in a file that exports `Cover`), alias the component import: `import { Cover as CoverComponent } from '@/components/cover'` and update all JSX usages inside that file.

8. Update `eslint.config.mjs`: change the blocks glob from `src/blocks/**/*.tsx` to `src/app/**/_blocks/**/*.tsx`.

9. Update the `lint:gallop` script in `package.json` to use `'src/app/**/_blocks/'` instead of `src/blocks/`.

10. Update `canon.config.json`: change the blocks README path from `src/blocks/README.md` to `src/app/BLOCKS.md`.

11. Delete the now-empty `src/blocks/` directory.

12. Run `npm run check` to verify lint and TypeScript pass, then `npm run build` to verify the production build.
