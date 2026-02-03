import '@/styles/tailwind.css'
import { _bodyFont } from '@/data/_fonts/_body'
import { _accentFont } from '@/data/_fonts/_accent'
import { _headingFont } from '@/data/_fonts/_heading'
import { _heading2Font } from '@/data/_fonts/_heading2'
import { _heading3Font } from '@/data/_fonts/_heading3'
import type { Metadata } from 'next'
import SmoothScroll from '@/hooks/smooth-scroll'
import { baseURL } from './metadata'
import GoogleAds from '@/hooks/google-ads'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'

export const revalidate = 86400

export const metadata: Metadata = {
  metadataBase: new URL(String(baseURL)),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': 30,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  title: {
    default: 'Speedwell | Next.js Website Template',
    template: '%s | Speedwell',
  },
  openGraph: {
    siteName: 'Speedwell',
    locale: 'en_US',
    type: 'website',
  },
}

const rootStyle = {
  ['--font-body-family' as string]: _bodyFont.style.fontFamily,
  ['--font-heading-family' as string]: _headingFont.style.fontFamily,
  ['--font-heading2-family' as string]: _heading2Font.style.fontFamily,
  ['--font-heading3-family' as string]: _heading3Font.style.fontFamily,
  ['--font-accent-family' as string]: _accentFont.style.fontFamily,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={rootStyle}
    >
      <body className="font-body text-lg font-medium leading-normal text-contrast antialiased">
        <div>{children}</div>
        <SmoothScroll />
        {process.env.VERCEL === '1' && <Analytics />}
      </body>
      {process.env.NODE_ENV === 'production' &&
        process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <GoogleAnalytics
            gaId={String(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)}
          />
        )}
      {process.env.NODE_ENV === 'production' &&
        process.env.NEXT_PUBLIC_GOOGLE_ADS_ID && (
          <GoogleAds
            adId={String(process.env.NEXT_PUBLIC_GOOGLE_ADS_ID)}
            loadGtagJs={false}
          />
        )}
    </html>
  )
}
