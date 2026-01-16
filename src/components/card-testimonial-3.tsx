import { Paragraph } from '@/components'

interface CardTestimonial3Props {
  name: string
  title: string
  review: string
  rating?: number
}

function Star() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-accent"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
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
          <Star key={i} />
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
        <Paragraph
          fontWeight="font-semibold"
          fontSize="text-lg"
          color="text-body-dark"
          margin="mb-0"
        >
          {name}
        </Paragraph>
        <Paragraph
          fontSize="text-sm"
          color="text-body-muted"
          margin="mb-0"
        >
          {title}
        </Paragraph>
      </div>
    </div>
  )
}
