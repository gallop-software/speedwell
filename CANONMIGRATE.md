# Canon Migration Guide

This guide is for templates that use Speedwell as a starting point. The `gallop generate` pipeline has been removed in favor of a hand-crafted `CLAUDE.md`.

## What Changed

- `gallop generate` is no longer used — `CLAUDE.md` is now hand-crafted and maintained manually
- `canon.config.json` is no longer needed (it only drove the generate pipeline)
- `.cursorrules` and `.github/copilot-instructions.md` are no longer auto-generated
- Canon's ESLint rules and `gallop audit` CLI still work exactly as before

## Migration Steps

1. **Delete generate artifacts:**
   ```bash
   rm canon.config.json
   rm .cursorrules
   rm .github/copilot-instructions.md
   ```

2. **Remove scripts from `package.json`:**
   - Delete `"generate:ai-rules"` script
   - Delete `"update:canon"` script

3. **Hand-craft a `CLAUDE.md`:**
   - Copy Speedwell's `CLAUDE.md` as a starting template
   - Customize the sections listed below for your project

4. **Verify everything still works:**
   ```bash
   npm run lint    # ESLint rules still enforced
   npm run ts      # TypeScript checks pass
   npm run audit   # Canon audit still works
   ```

## What to Keep

- `@gallop.software/canon` devDependency (ESLint rules + audit CLI)
- ESLint config in `eslint.config.mjs` (unchanged)
- `audit`, `audit:strict`, `audit:json` scripts

## Sections to Customize in CLAUDE.md

These sections will differ between templates:

- **Auto-Generated Files** — update the table for your template's generated files
- **Build Commands** — update for your template's npm scripts
- **File & Folder Authority** — adjust the `/src` structure and route groups for your project
- **Color Token System** — update with your template's semantic color tokens
- **Component Quick Reference** — list your template's components and their props
- **State Management** — update if using a different state library or store structure
- **Template-Specific Rules** — add rules unique to your template
- **Do NOT** — add any template-specific prohibitions
