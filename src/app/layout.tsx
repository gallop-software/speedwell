import '@/styles/tailwind.css'
import { bodyFont } from '@/fonts/body'
import { headingFont } from '@/fonts/heading'
import { heading2Font } from '@/fonts/heading2'
import { heading3Font } from '@/fonts/heading3'
import { accentFont } from '@/fonts/accent'
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

const fontVariables = [
  bodyFont.variable,
  headingFont.variable,
  heading2Font.variable,
  heading3Font.variable,
  accentFont.variable,
].join(' ')

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${fontVariables} bg-white font-body text-lg font-medium leading-normal text-contrast antialiased`}>
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
