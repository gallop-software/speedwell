import localFont from 'next/font/local'

export const bodyFont = localFont({
  variable: '--font-body-family',
  src: [
    { path: '../../_fonts/raleway/raleway-black.woff2', weight: '900', style: 'normal' },
    { path: '../../_fonts/raleway/raleway-blackitalic.woff2', weight: '900', style: 'italic' },
    { path: '../../_fonts/raleway/raleway-bold.woff2', weight: '700', style: 'normal' },
    { path: '../../_fonts/raleway/raleway-bolditalic.woff2', weight: '700', style: 'italic' },
    { path: '../../_fonts/raleway/raleway-extrabold.woff2', weight: '800', style: 'normal' },
    { path: '../../_fonts/raleway/raleway-extrabolditalic.woff2', weight: '800', style: 'italic' },
    { path: '../../_fonts/raleway/raleway-extralight.woff2', weight: '200', style: 'normal' },
    { path: '../../_fonts/raleway/raleway-extralightitalic.woff2', weight: '200', style: 'italic' },
    { path: '../../_fonts/raleway/raleway-italic.woff2', weight: '400', style: 'italic' },
    { path: '../../_fonts/raleway/raleway-light.woff2', weight: '300', style: 'normal' },
    { path: '../../_fonts/raleway/raleway-lightitalic.woff2', weight: '300', style: 'italic' },
    { path: '../../_fonts/raleway/raleway-medium.woff2', weight: '500', style: 'normal' },
    { path: '../../_fonts/raleway/raleway-mediumitalic.woff2', weight: '500', style: 'italic' },
    { path: '../../_fonts/raleway/raleway-regular.woff2', weight: '400', style: 'normal' },
    { path: '../../_fonts/raleway/raleway-semibold.woff2', weight: '600', style: 'normal' },
    { path: '../../_fonts/raleway/raleway-semibolditalic.woff2', weight: '600', style: 'italic' },
    { path: '../../_fonts/raleway/raleway-thin.woff2', weight: '100', style: 'normal' },
    { path: '../../_fonts/raleway/raleway-thinitalic.woff2', weight: '100', style: 'italic' },
  ],
})
