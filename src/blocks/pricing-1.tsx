import {
  Section,
  Heading,
  Paragraph,
  Button,
  Icon,
} from '@/components'
import checkIcon from '@iconify/icons-heroicons/check-20-solid'

export default function Pricing1() {
  return (
    <Section className="py-30 bg-body relative overflow-hidden">
      <div className="relative">
        <div className="text-center mb-16">
          <Heading
            as="h2"
            className="mb-4"
          >
            Simple, Transparent Pricing
          </Heading>
          <Paragraph className="text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your team. Scale as you grow with flexible options and premium features.
          </Paragraph>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-body backdrop-blur-sm p-8 rounded-lg border border-body1/10 hover:border-accent/40 transition-all hover:shadow-xl flex flex-col">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-xl text-body1/60 ml-2">/mo</span>
              </div>
              <p className="text-body1/70">Perfect for small teams</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Icon icon={checkIcon} className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Up to 5 team members</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon={checkIcon} className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>10GB storage</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon={checkIcon} className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Basic analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon={checkIcon} className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Email support</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon={checkIcon} className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Mobile & web access</span>
              </li>
            </ul>
            
            <Button
              href="#contact"
              variant="secondary"
              className="w-full"
            >
              Contact Us
            </Button>
          </div>

          {/* Professional Plan - Featured */}
          <div className="bg-body backdrop-blur-sm p-8 rounded-lg border border-body1/10 hover:border-accent/40 transition-all hover:shadow-xl relative flex flex-col">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold">$99</span>
                <span className="text-xl text-body1/60 ml-2">/mo</span>
              </div>
              <p className="text-body1/70">For growing businesses</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Icon icon={checkIcon} className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Up to 25 team members</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon={checkIcon} className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>100GB storage</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon={checkIcon} className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon={checkIcon} className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Priority support</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon={checkIcon} className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Custom integrations</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon={checkIcon} className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>API access</span>
              </li>
            </ul>
            
            <Button
              href="#contact"
              variant="secondary"
              className="w-full"
            >
              Contact Us
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-body backdrop-blur-sm p-8 rounded-lg border border-body1/10 hover:border-accent/40 transition-all hover:shadow-xl flex flex-col">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold">$299</span>
                <span className="text-xl text-body1/60 ml-2">/mo</span>
              </div>
              <p className="text-body1/70">For large organizations</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Icon icon={checkIcon} className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Unlimited team members</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon={checkIcon} className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Unlimited storage</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon={checkIcon} className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Enterprise analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon={checkIcon} className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>24/7 dedicated support</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon={checkIcon} className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Custom development</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon={checkIcon} className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>SLA guarantee</span>
              </li>
            </ul>
            
            <Button
              href="#contact"
              variant="secondary"
              className="w-full"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
