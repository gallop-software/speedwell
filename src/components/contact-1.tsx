import { Accent } from './accent'
import { Container } from './container'
import { Heading } from './heading'
import { ContactForm } from './contact-form'

export function Contact1() {
  return (
    <div className="bg-body2 pt-30 lg:pt-20 pb-30 lg:pb-20 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="order-1 lg:order-1">
            <Heading
              as="h2"
              textAlign="text-center"
            >
              Get in touch
            </Heading>
            <ContactForm />
          </div>

          <div className="order-2 lg:order-2 relative mb-20 lg:mb-0">
            <div className="aspect-square">
              <Accent className="absolute -top-[5%] lg:-top-[10%] right-[5%] lg:right-[5%] xl:-right-[10%] z-30 -rotate-[10deg]">
                say hello
              </Accent>

              <div className="absolute -bottom-[15%] top-0 right-0 z-10 w-full">
                <img
                  src="/images/dsc_6104-1116x1400.jpg"
                  alt="Beautiful moment captured"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
