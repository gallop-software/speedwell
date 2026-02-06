'use client'

import { Section } from '@/components/section'
import { Heading } from '@/components/heading'
import { Button } from '@/components/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <Section
        innerAlign="content"
        className="text-center h-full mb-124"
      >
        <Heading as="h1">Something Went Wrong</Heading>
        <Button
          variant="outline"
          href="/"
        >
          Return Home
        </Button>
      </Section>
      <Footer />
    </>
  )
}
