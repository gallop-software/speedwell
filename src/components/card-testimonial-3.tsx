import { Paragraph } from '@/components/paragraph'
import { Heading } from '@/components/heading'
import { Label } from '@/components/label'
import { Icon } from '@/components/icon'
import starIcon from '@iconify/icons-heroicons/star-solid'

interface CardTestimonial3Props {
  name: string
  title: string
  review: string
  rating?: number
}

export function CardTestimonial3({
  name,
  title,
  review,
  rating = 5,
}: CardTestimonial3Props) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <Icon
            key={i}
            icon={starIcon}
            className="text-accent text-xl"
          />
        ))}
      </div>

      {/* Review */}
      <Paragraph
        color="text-body-muted"
        margin="mb-6"
        lineHeight="leading-relaxed"
        className="flex-grow"
      >
        {review}
      </Paragraph>

      {/* Author */}
      <div className="mt-auto">
        <Heading
          as="h4"
          fontSize="text-lg"
          color="text-accent1"
          margin="mb-2"
        >
          {name}
        </Heading>
        <Label>{title}</Label>
      </div>
    </div>
  )
}
