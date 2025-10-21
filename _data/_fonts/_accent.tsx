import localFont from 'next/font/local'

export const _accentFont = localFont({
  src: [
    {
      path: '../../src/styles/fonts/AugustScript/AugustScript.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
})
