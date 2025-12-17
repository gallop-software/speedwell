import { Section, Container, Heading, Accent, Paragraph, Swiper } from '@/components'

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i < rating ? 'currentColor' : 'none'}
          stroke="currentColor"
          className={i < rating ? 'text-accent2' : 'text-accent2/30'}
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

interface TestimonialCardProps {
  name: string
  review: string
  rating?: number
}

function TestimonialCard({ name, review, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 pt-6 pb-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-accent2/10">
      <StarRating rating={rating} />
      <p className="text-sm italic text-body-muted leading-relaxed mb-2">
        "{review}"
      </p>
      <p className="text-base font-semibold text-body-dark m-0 leading-tight">
        {name}
      </p>
    </div>
  )
}

export default function Testimonial7() {
  return (
    <Section className="py-30 bg-gradient-to-b from-body2 via-body-light to-body2 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent2/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <Container align="content" className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Accent
            className="mb-4"
            color="text-accent2"
            size="medium"
          >
            Dining Excellence
          </Accent>
          <Heading
            as="h2"
            margin="mb-6"
          >
            What Our Guests Are Saying
          </Heading>
          <Paragraph className="text-lg text-body-muted">
            Don't just take our word for it – hear from the diners who have experienced our unique blend of culinary artistry and thoughtful design
          </Paragraph>
        </div>

        <Swiper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              name="Maria Santos"
              review="The ambiance is absolutely stunning. From the moment you walk in, you're transported into a warm, inviting space that perfectly balances elegance with comfort."
              rating={5}
            />

            <TestimonialCard
              name="Thomas Anderson"
              review="This restaurant stands out not just for its incredible food, but for its exceptional design. The bar area is a work of art with its custom millwork."
              rating={5}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              name="Rebecca Chang"
              review="This restaurant has completely raised the bar for dining experiences in our city. The interior design creates distinct zones that each have their own character."
              rating={5}
            />

            <TestimonialCard
              name="Jonathan Lee"
              review="Having worked in the restaurant industry for years, I appreciate great design when I see it. This space brilliantly balances elegance with operational efficiency."
              rating={5}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              name="Emily Rodriguez"
              review="The perfect spot for a romantic evening. The intimate lighting and sophisticated decor create an atmosphere that's both elegant and comfortable."
              rating={5}
            />

            <TestimonialCard
              name="David Kim"
              review="What a delightful experience! The restaurant manages to feel upscale yet welcoming for families. The space is beautifully designed with different areas."
              rating={5}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              name="Sarah Williams"
              review="The wine bar area is absolutely stunning. The custom millwork and display create a sophisticated atmosphere that's perfect for wine tasting or casual drinks."
              rating={5}
            />

            <TestimonialCard
              name="Michael Torres"
              review="Outstanding venue for business lunches. The semi-private areas provide just the right balance of privacy and openness. The modern yet warm design creates a professional atmosphere."
              rating={5}
            />
          </div>
        </Swiper>
      </Container>
    </Section>
  )
}
