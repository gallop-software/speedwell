import { Section, Heading, Button, Navbar, Footer } from '@/components'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <Section
        innerAlign="content"
        className="text-center h-full mb-124"
      >
        <Heading as="h1">Page Not Found</Heading>
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
