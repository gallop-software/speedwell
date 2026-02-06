import localFont from 'next/font/local'

export const heading2Font = localFont({
  src: [
    { path: './courierprime/courierprime-bold.woff2', weight: '700', style: 'normal' },
    { path: './courierprime/courierprime-bolditalic.woff2', weight: '700', style: 'italic' },
    { path: './courierprime/courierprime-italic.woff2', weight: '400', style: 'italic' },
    { path: './courierprime/courierprime-regular.woff2', weight: '400', style: 'normal' },
  ],
})
