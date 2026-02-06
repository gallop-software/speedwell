'use client'

import '@/styles/tailwind.css'
import { bodyFont } from '@/fonts/body'
import { headingFont } from '@/fonts/heading'
import { heading2Font } from '@/fonts/heading2'
import { heading3Font } from '@/fonts/heading3'
import { accentFont } from '@/fonts/accent'
import { Section } from '@/components/section'
import { Heading } from '@/components/heading'
import { Button } from '@/components/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const rootStyle = {
  ['--font-body-family' as string]: bodyFont.style.fontFamily,
  ['--font-heading-family' as string]: headingFont.style.fontFamily,
  ['--font-heading2-family' as string]: heading2Font.style.fontFamily,
  ['--font-heading3-family' as string]: heading3Font.style.fontFamily,
  ['--font-accent-family' as string]: accentFont.style.fontFamily,
}

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en" style={rootStyle}>
      <head>
        <title>Something Went Wrong</title>
      </head>
      <body className="bg-white font-body text-lg font-medium leading-normal text-contrast antialiased">
        <Navbar />
        <Section innerAlign="content" className="text-center h-full mb-24">
          <Heading as="h1">Something Went Wrong</Heading>
          <Button variant="outline" onClick={() => reset()}>
            Try Again
          </Button>
        </Section>
        <Footer />
      </body>
    </html>
  )
}
