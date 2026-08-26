import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { NotFoundContent } from '@/components/not-found-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <>
      <GradientBackground />
      <Navbar />
      <main>
        <NotFoundContent className="py-20 md:py-30" />
      </main>
      <Footer />
    </>
  )
}
