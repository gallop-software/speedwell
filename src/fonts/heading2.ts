import localFont from 'next/font/local'

export const heading2Font = localFont({
  variable: '--font-heading2-family',
  src: [
    { path: '../../_fonts/courierprime/courierprime-bold.woff2', weight: '700', style: 'normal' },
    { path: '../../_fonts/courierprime/courierprime-bolditalic.woff2', weight: '700', style: 'italic' },
    { path: '../../_fonts/courierprime/courierprime-italic.woff2', weight: '400', style: 'italic' },
    { path: '../../_fonts/courierprime/courierprime-regular.woff2', weight: '400', style: 'normal' },
  ],
})
