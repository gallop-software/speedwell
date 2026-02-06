import localFont from 'next/font/local'

export const bodyFont = localFont({
  src: [
    { path: '../../_fonts/Raleway/Raleway-Thin.woff2', weight: '100', style: 'normal' },
    { path: '../../_fonts/Raleway/Raleway-ThinItalic.woff2', weight: '100', style: 'italic' },
    { path: '../../_fonts/Raleway/Raleway-ExtraLight.woff2', weight: '200', style: 'normal' },
    { path: '../../_fonts/Raleway/Raleway-ExtraLightItalic.woff2', weight: '200', style: 'italic' },
    { path: '../../_fonts/Raleway/Raleway-Light.woff2', weight: '300', style: 'normal' },
    { path: '../../_fonts/Raleway/Raleway-LightItalic.woff2', weight: '300', style: 'italic' },
    { path: '../../_fonts/Raleway/Raleway-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../_fonts/Raleway/Raleway-Italic.woff2', weight: '400', style: 'italic' },
    { path: '../../_fonts/Raleway/Raleway-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../../_fonts/Raleway/Raleway-MediumItalic.woff2', weight: '500', style: 'italic' },
    { path: '../../_fonts/Raleway/Raleway-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../../_fonts/Raleway/Raleway-SemiBoldItalic.woff2', weight: '600', style: 'italic' },
    { path: '../../_fonts/Raleway/Raleway-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../../_fonts/Raleway/Raleway-BoldItalic.woff2', weight: '700', style: 'italic' },
    { path: '../../_fonts/Raleway/Raleway-ExtraBold.woff2', weight: '800', style: 'normal' },
    { path: '../../_fonts/Raleway/Raleway-ExtraBoldItalic.woff2', weight: '800', style: 'italic' },
    { path: '../../_fonts/Raleway/Raleway-Black.woff2', weight: '900', style: 'normal' },
    { path: '../../_fonts/Raleway/Raleway-BlackItalic.woff2', weight: '900', style: 'italic' },
  ],
})
