import Link from 'next/link'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Icon } from '@/components/icon'
import { CurrentDate } from '@/components/current-date'
import { CurrentTime } from '@/components/current-time'
import phoneIcon from '@iconify/icons-heroicons/phone-20-solid'
import envelopeIcon from '@iconify/icons-heroicons/envelope-20-solid'
import buildingOfficeIcon from '@iconify/icons-heroicons/building-office-20-solid'
import arrowUpRightIcon from '@iconify/icons-heroicons/arrow-up-right-20-solid'

const hours = [
  { day: 'Monday', time: '9:00 AM - 6:00 PM', timeRange: '9am-6pm' },
  { day: 'Tuesday', time: '9:00 AM - 6:00 PM', timeRange: '9am-6pm' },
  { day: 'Wednesday', time: '9:00 AM - 6:00 PM', timeRange: '9am-6pm' },
  { day: 'Thursday', time: '9:00 AM - 6:00 PM', timeRange: '9am-6pm' },
  { day: 'Friday', time: '9:00 AM - 5:00 PM', timeRange: '9am-5pm' },
  { day: 'Saturday', time: '10:00 AM - 2:00 PM', timeRange: '10am-2pm' },
  { day: 'Sunday', time: 'Closed', timeRange: '' },
]

const contactItems = [
  {
    icon: phoneIcon,
    title: 'Call Us',
    description: '(555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: envelopeIcon,
    title: 'Email Us',
    description: 'hello@speedwell.com',
    href: 'mailto:hello@speedwell.com',
  },
  {
    icon: buildingOfficeIcon,
    title: 'Visit Us',
    description: '123 Design Street, Suite 100',
    href: '/contact',
  },
]

export default function Section1() {
  return (
    <div className="relative bg-contrast z-1 px-6">
      <div className="mx-auto max-w-[1600px] relative flex flex-col xl:flex-row gap-6 xl:gap-0">
        {/* Hours Section */}
        <div className="pt-14 pb-10 px-8 w-full xl:w-4/12 -mt-20 xl:-mb-20 relative rounded-md xl:rounded-b-md xl:rounded-t-md overflow-hidden shadow-lg bg-body2">
          <Heading
            as="h3"
            color="text-accent3-contrast"
            margin="mb-7"
            textAlign="text-center"
          >
            Business Hours
          </Heading>
          <div className="divide-y divide-accent3-contrast/10">
            {hours.map((item, index) => (
              <div
                key={index}
                className="w-full flex flex-wrap justify-between py-4 text-base text-accent3-contrast"
              >
                <span>
                  {item.day}{' '}
                  <span className="text-accent3-contrast/50">
                    <CurrentDate dayString={item.day} />
                  </span>
                </span>
                <span>{item.time}</span>
                <CurrentTime
                  dayOfWeek={item.day}
                  timeRange={item.timeRange}
                  openColor="text-green-600"
                  closedColor="text-red-600"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Cards */}
        <div className="w-full xl:w-8/12 flex flex-col xl:flex-row gap-6 xl:gap-0 mb-6 xl:mb-0">
          {contactItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`py-16 px-10 w-full xl:w-1/3 flex flex-col gap-6 justify-center items-center xl:items-start rounded-md xl:rounded-none hover:bg-body/12 transition-colors duration-300 ${
                index === 0
                  ? 'bg-body/3'
                  : index === 1
                    ? 'bg-body/6'
                    : 'bg-body/9'
              }`}
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white">
                <Icon
                  icon={item.icon}
                  className="w-10 h-10 text-accent"
                />
              </div>
              <Heading
                as="h3"
                color="text-body"
                fontSize="text-2xl"
                className="flex items-center gap-1"
              >
                {item.title}
                <Icon
                  icon={arrowUpRightIcon}
                  className="w-6 h-6"
                />
              </Heading>
              <Paragraph
                color="text-body/60"
                fontSize="text-lg"
                margin="m-0"
              >
                {item.description}
              </Paragraph>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
