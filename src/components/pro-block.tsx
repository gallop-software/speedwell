import { Heading, Paragraph, Button } from '@/components'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

interface ProBlockProps {
  blockSlug: string
  blockName: string
}

export function ProBlock({ blockSlug, blockName }: ProBlockProps) {
  // Extract category by removing the -{number} suffix
  const category = blockSlug.replace(/-\d+$/, '')

  return (
    <div className="relative w-full">
      {/* Background Image - contains to show full image */}
      <img
        src={`/blocks/${blockSlug}.jpg`}
        alt={blockName}
        className="w-full h-auto object-contain"
      />

      {/* Overlay with blur and opacity */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-md" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 py-32 text-center">
        <Heading as="h1">{blockName} Block</Heading>

        <Paragraph
          variant="large"
          className="max-w-2xl"
        >
          Get lifetime access to production ready blocks and all future updates.
        </Paragraph>

        <Button
          href={`https://gallop.software/code/speedwell/blocks/${category}#${blockSlug}`}
          variant="primary"
          target="_blank"
          icon={arrowRightIcon}
          iconPlacement="after"
        >
          See Block
        </Button>
      </div>
    </div>
  )
}
