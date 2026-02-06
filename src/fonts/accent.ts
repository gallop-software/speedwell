import localFont from 'next/font/local'

export const accentFont = localFont({
  variable: '--font-accent-family',
  src: [
    { path: '../../_fonts/augustscript/augustscript.woff2', weight: '400', style: 'normal' },
  ],
})
