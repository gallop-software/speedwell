import localFont from 'next/font/local'

export const heading2Font = localFont({
  src: [
    { path: '../../_fonts/CourierPrime/CourierPrime-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../_fonts/CourierPrime/CourierPrime-Italic.woff2', weight: '400', style: 'italic' },
    { path: '../../_fonts/CourierPrime/CourierPrime-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../../_fonts/CourierPrime/CourierPrime-BoldItalic.woff2', weight: '700', style: 'italic' },
  ],
})
