'use client'

import { Section, Heading, Button, Navbar, Footer } from '@/components'

export default function NotFound() {
  return (
    <>
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
