/** @type {import('knip').KnipConfig} */
export default {
  // Entry points - where knip starts tracing dependencies
  entry: [
    'src/app/**/page.tsx',
    'src/app/**/layout.tsx',
    // 'src/components/index.ts', // Removed to detect unused component exports
    'src/blog/**/*.tsx', // Blog posts are dynamically loaded
  ],

  // All project files to analyze
  project: ['src/**/*.{ts,tsx}'],

  // Ignore patterns - files that are intentionally standalone or dynamically used
  ignore: [
    '_scripts/**',
    '_data/**',
    '_docs/**',
    // Config files that are used by tools
    'src/components/**/config.ts',
    'src/components/**/types.ts',
    // Hooks that may be used dynamically
    'src/hooks/**',
    // Tools/utilities
    'src/tools/**',
    // Lightbox has dynamic exports
    'src/components/lightbox/**',
  ],

  // Dependencies used by config files or build tools (not direct imports)
  ignoreDependencies: [
    'tailwindcss',
    'prettier-plugin-organize-imports',
    'prettier-plugin-tailwindcss',
  ],

  // Binaries used via npx (not installed as dependencies)
  ignoreBinaries: ['npm-check-updates'],

  // Disable checks for unused types (often exported for external use)
  rules: {
    types: 'off',
  },
}
