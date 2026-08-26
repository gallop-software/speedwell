'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { ErrorContent } from '@/components/error-content'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <>
      <GradientBackground />
      <Navbar />
      <main>
        <ErrorContent
          reset={reset}
          className="py-20 md:py-30"
        />
      </main>
      <Footer />
    </>
  )
}
