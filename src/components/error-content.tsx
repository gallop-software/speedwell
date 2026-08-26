'use client'

import { Section } from '@/components/section'
import { Accent } from '@/components/accent'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Buttons } from '@/components/buttons'
import { Button } from '@/components/button'
import arrowPathIcon from '@iconify/icons-heroicons/arrow-path-20-solid'

/**
 * Shared error page body. Each error page owns its wrapper spacing and passes
 * it via className.
 */
export function ErrorContent({
  reset,
  className = '',
}: {
  reset: () => void
  className?: string
}) {
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
        oops
      </Accent>
      <Heading
        as="h1"
        textAlign="text-center"
      >
        Something Went Wrong
      </Heading>
      <Paragraph
        variant="large"
        textAlign="text-center"
      >
        An unexpected error occurred while loading this page. Try again, or head
        back home and pick up where you left off.
      </Paragraph>
      <Buttons
        margin="mt-8"
        className="justify-center"
      >
        <Button
          size="medium"
          onClick={reset}
          icon={arrowPathIcon}
          iconPlacement="after"
        >
          Try Again
        </Button>
        <Button
          size="medium"
          href="/"
          variant="outline"
        >
          Return Home
        </Button>
      </Buttons>
    </Section>
  )
}
