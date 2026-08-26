import { Section } from '@/components/section'
import { Accent } from '@/components/accent'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Buttons } from '@/components/buttons'
import { Button } from '@/components/button'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

/**
 * Shared 404 page body. Each not-found page owns its wrapper spacing and
 * passes it via className.
 */
export function NotFoundContent({ className = '' }: { className?: string }) {
  return (
    <Section
      innerAlign="content"
      className={className}
    >
      <Accent
        color="text-accent2"
        textAlign="text-center"
        display="block"
        margin="mb-4"
      >
        404
      </Accent>
      <Heading
        as="h1"
        textAlign="text-center"
      >
        Page Not Found
      </Heading>
      <Paragraph
        variant="large"
        textAlign="text-center"
      >
        The page you're looking for doesn't exist or has been moved. Let's get
        you back on track.
      </Paragraph>
      <Buttons
        margin="mt-8"
        className="justify-center"
      >
        <Button
          size="medium"
          href="/"
          icon={arrowRightIcon}
          iconPlacement="after"
        >
          Return Home
        </Button>
      </Buttons>
    </Section>
  )
}
