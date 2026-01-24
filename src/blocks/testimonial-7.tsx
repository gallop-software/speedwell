import {
  Section,
  Heading,
  Accent,
  Paragraph,
  Swiper,
  Grid,
  CardTestimonial3,
} from '@/components'

export default function Testimonial7() {
  return (
    <Section className="py-30 bg-linear-to-b from-body2 via-body-light to-body2 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent2/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-4xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Accent
            color="text-accent2"
            size="medium"
          >
            Dining Excellence
          </Accent>
          <Heading as="h2">What Our Guests Are Saying</Heading>
          <Paragraph>
            Don't just take our word for it – hear from the diners who have
            experienced our unique blend of culinary artistry and thoughtful
            design
          </Paragraph>
        </div>

        <Swiper
          layout="carousel"
          columns={2}
        >
          <CardTestimonial3
            name="Maria Santos"
            title="Food Critic"
            review="The ambiance is absolutely stunning. From the moment you walk in, you're transported into a warm, inviting space that perfectly balances elegance with comfort."
            rating={5}
          />

          <CardTestimonial3
            name="Thomas Anderson"
            title="Regular Guest"
            review="This restaurant stands out not just for its incredible food, but for its exceptional design. The bar area is a work of art with its custom millwork."
            rating={5}
          />
          <CardTestimonial3
            name="Rebecca Chang"
            title="Interior Designer"
            review="This restaurant has completely raised the bar for dining experiences in our city. The interior design creates distinct zones that each have their own character."
            rating={5}
          />

          <CardTestimonial3
            name="Jonathan Lee"
            title="Restaurant Owner"
            review="Having worked in the restaurant industry for years, I appreciate great design when I see it. This space brilliantly balances elegance with operational efficiency."
            rating={5}
          />
          <CardTestimonial3
            name="Emily Rodriguez"
            title="Lifestyle Blogger"
            review="The perfect spot for a romantic evening. The intimate lighting and sophisticated decor create an atmosphere that's both elegant and comfortable."
            rating={5}
          />

          <CardTestimonial3
            name="David Kim"
            title="Family Guest"
            review="What a delightful experience! The restaurant manages to feel upscale yet welcoming for families. The space is beautifully designed with different areas."
            rating={5}
          />

          <CardTestimonial3
            name="Sarah Williams"
            title="Wine Enthusiast"
            review="The wine bar area is absolutely stunning. The custom millwork and display create a sophisticated atmosphere that's perfect for wine tasting or casual drinks."
            rating={5}
          />

          <CardTestimonial3
            name="Michael Torres"
            title="Business Professional"
            review="Outstanding venue for business lunches. The semi-private areas provide just the right balance of privacy and openness. The modern yet warm design creates a professional atmosphere."
            rating={5}
          />
        </Swiper>
      </div>
    </Section>
  )
}
