import Hero4 from '@/blocks/hero-4'
import Content1 from '@/blocks/content-1'
import About2 from '@/blocks/about-2'
import CallToAction1 from '@/blocks/call-to-action-1'

export default function Content() {
  return (
    <>
      <Hero4 />
      <Content1 />
      <About2 />
      <CallToAction1 />
    </>
  )
}

export const metadata = {
  title: 'Cillum veniam ullamco officia et proident ex ea',
  description:
    'Fugiat ex anim do laborum laborum pariatur enim commodo consequat enim ad sint mollit ut cillum minim non velit qui ullamco minim ea adipiscing dolore mollit id',
  slug: 'quis-nostrud',
  featuredImage:
    '/images/portfolio/kseniachernaya/pexels-kseniachernaya-3951746.jpg',
  focusKeyword: 'fusce dapibus cursus',
  readingTimeMinutes: 8,
  publishDate: '2025-10-16T00:00:00Z',
  lastModified: '2025-10-16T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/quis-nostrud',
  },
  openGraph: {
    title: 'Adipiscing adipiscing sit do velit consequat nisi proident',
    description:
      'Consectetur amet ad cupidatat fugiat sed amet duis quis sint in ea enim cupidatat aliquip excepteur voluptate elit ipsum magna aliquip laboris cupidatat dolor amet id ad',
    image: {
      url: '/images/portfolio/jvdm/pexels-jvdm-1457844.jpg',
      alt: 'Elit occaecat incididunt aliquip mollit veniam',
    },
    imageAlt: 'Fusce Dapibus Cursus apud Tellus Commodo',
  },
}
