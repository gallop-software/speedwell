import localFont from 'next/font/local'

export const headingFont = localFont({
  src: [
    { path: '../../_fonts/NotoSerifDisplay/NotoSerifDisplay-Thin.woff2', weight: '100', style: 'normal' },
    { path: '../../_fonts/NotoSerifDisplay/NotoSerifDisplay-ThinItalic.woff2', weight: '100', style: 'italic' },
    { path: '../../_fonts/NotoSerifDisplay/NotoSerifDisplay-ExtraLight.woff2', weight: '200', style: 'normal' },
    { path: '../../_fonts/NotoSerifDisplay/NotoSerifDisplay-ExtraLightItalic.woff2', weight: '200', style: 'italic' },
    { path: '../../_fonts/NotoSerifDisplay/NotoSerifDisplay-Light.woff2', weight: '300', style: 'normal' },
    { path: '../../_fonts/NotoSerifDisplay/NotoSerifDisplay-LightItalic.woff2', weight: '300', style: 'italic' },
    { path: '../../_fonts/NotoSerifDisplay/NotoSerifDisplay-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../_fonts/NotoSerifDisplay/NotoSerifDisplay-Italic.woff2', weight: '400', style: 'italic' },
    { path: '../../_fonts/NotoSerifDisplay/NotoSerifDisplay-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../../_fonts/NotoSerifDisplay/NotoSerifDisplay-MediumItalic.woff2', weight: '500', style: 'italic' },
    { path: '../../_fonts/NotoSerifDisplay/NotoSerifDisplay-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../../_fonts/NotoSerifDisplay/NotoSerifDisplay-SemiBoldItalic.woff2', weight: '600', style: 'italic' },
    { path: '../../_fonts/NotoSerifDisplay/NotoSerifDisplay-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../../_fonts/NotoSerifDisplay/NotoSerifDisplay-BoldItalic.woff2', weight: '700', style: 'italic' },
    { path: '../../_fonts/NotoSerifDisplay/NotoSerifDisplay-ExtraBold.woff2', weight: '800', style: 'normal' },
    { path: '../../_fonts/NotoSerifDisplay/NotoSerifDisplay-ExtraBoldItalic.woff2', weight: '800', style: 'italic' },
    { path: '../../_fonts/NotoSerifDisplay/NotoSerifDisplay-Black.woff2', weight: '900', style: 'normal' },
    { path: '../../_fonts/NotoSerifDisplay/NotoSerifDisplay-BlackItalic.woff2', weight: '900', style: 'italic' },
  ],
})
