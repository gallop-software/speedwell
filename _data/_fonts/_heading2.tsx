import localFont from 'next/font/local'

export const _heading2Font = localFont({
  src: [
    {
      path: '../../src/styles/fonts/CourierPrime/CourierPrime-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../src/styles/fonts/CourierPrime/CourierPrime-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../src/styles/fonts/CourierPrime/CourierPrime-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../src/styles/fonts/CourierPrime/CourierPrime-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})
