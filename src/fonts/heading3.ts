import localFont from 'next/font/local'

export const heading3Font = localFont({
  variable: '--font-heading3-family',
  src: [
    { path: '../../_fonts/brownsugar/brownsugar.woff2', weight: '400', style: 'normal' },
  ],
})
