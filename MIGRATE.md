# Block Migration Guide

This project uses the Speedwell template and needs to migrate blocks from the centralized `src/blocks/` directory to co-located `_blocks/` subdirectories within each page route.

For each page.tsx file under `src/app/`, identify which blocks it imports from `@/blocks/`. Then:

1. Create a `_blocks/` directory alongside that page.tsx (Next.js private folder convention — excluded from routing).

2. Move each block file into the page's `_blocks/` directory and give it a **descriptive name** that reflects what it renders (e.g., `overview.tsx`, `profile.tsx`, `process.tsx`, `gallery.tsx`) rather than a generic type name (`content.tsx`, `section.tsx`). If multiple blocks serve a similar purpose, the first becomes `{name}.tsx` and subsequent ones are numbered: `{name}-2.tsx`, `{name}-3.tsx` (e.g., `profile.tsx`, `profile-2.tsx`, `profile-3.tsx`). The block name **must not conflict with an existing component name** in `src/components/` — if it would (e.g., naming a block `cover.tsx` when a `Cover` component exists), choose a different descriptive name instead (e.g., `banner.tsx`). Each filename must be unique within its `_blocks/` directory.

3. Rename the default export function inside each block file to match the new filename: `overview.tsx` exports `Overview`, `profile-2.tsx` exports `Profile2`, etc.

4. Update the page.tsx imports from `@/blocks/{old-name}` to `./_blocks/{new-name}` and update the JSX component names to match.

5. If a block is imported by multiple pages, duplicate it into each page's `_blocks/` directory — blocks are page-specific content, not shared components.

6. The page wrapper function that renders all blocks should be named `Content()`.

7. Update `eslint.config.mjs`: change the blocks glob from `src/blocks/**/*.tsx` to `src/app/**/_blocks/**/*.tsx`.

8. Update the `lint:gallop` script in `package.json` to use `'src/app/**/_blocks/'` instead of `src/blocks/`.

9. Update `canon.config.json`: change the blocks README path from `src/blocks/README.md` to `src/app/BLOCKS.md`.

10. Delete the now-empty `src/blocks/` directory.

11. Run `npm run check` to verify lint and TypeScript pass, then `npm run build` to verify the production build.
