import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Button } from '@/components/button'
import { Buttons } from '@/components/buttons'
import clsx from 'clsx'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

interface ProBlockProps {
  blockSlug: string
  blockName: string
  className?: string
}

export function ProBlock({ blockSlug, blockName, className }: ProBlockProps) {
  // Extract category from last segment of slug, stripping -{number} suffix
  const lastSegment = blockSlug.includes('/')
    ? blockSlug.split('/').pop()
    : blockSlug
  const category = lastSegment!.replace(/-\d+$/, '')
  // Extract page route from slug (e.g., "layout-6/gallery" -> "layout-6")
  const pageRoute = blockSlug.includes('/')
    ? blockSlug.split('/').slice(0, -1).join('/')
    : ''
  const hasPtNavbar = className?.includes('pt-navbar')

  return (
    <div
      className={clsx(
        'relative w-full min-h-[800px] xl:min-h-0 flex items-center',
        className
      )}
    >
      {/* Background Image */}
      <img
        src={`https://speedwell-cdn.gallop.software/blocks/${blockSlug}.jpg`}
        alt={blockName}
        className="absolute inset-0 w-full h-full object-cover xl:relative xl:inset-auto xl:h-auto xl:object-contain"
      />

      {/* Overlay with blur and opacity */}
      <div className="absolute inset-0 bg-body/50 backdrop-blur-md" />

      {/* Content */}
      <div
        className={clsx(
          'relative xl:absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center w-full',
          hasPtNavbar && 'xl:pt-60'
        )}
      >
        <Heading as="h1">{blockName} Block</Heading>

        <Paragraph
          variant="large"
          className="max-w-2xl"
        >
          Get lifetime access to production ready blocks and all future updates.
        </Paragraph>

        <Buttons margin="mt-0 mb-0">
          <Button
            href={`https://gallop.software/code/speedwell/blocks/${category}?block=${blockSlug}`}
            variant="primary"
            target="_blank"
            icon={arrowRightIcon}
            iconPlacement="after"
          >
            See Block
          </Button>
          <Button
            href={`https://speedwell.gallop.software/${pageRoute}`}
            variant="secondary"
          >
            Speedwell Pro Demo
          </Button>
        </Buttons>
      </div>
    </div>
  )
}
