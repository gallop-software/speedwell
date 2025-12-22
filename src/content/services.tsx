import Hero11 from '@/blocks/hero-11'
import Section24 from '@/blocks/section-24'
import Section25 from '@/blocks/section-25'
import Section26 from '@/blocks/section-26'
import Section27 from '@/blocks/section-27'
import Section28 from '@/blocks/section-28'
import Section29 from '@/blocks/section-29'
import Section30 from '@/blocks/section-30'
import PageFooter from '@/template/page-footer'

export default function Content() {
  return (
    <>
      <Hero11 />
      <Section24 />
      <Section25 />
      <Section26 />
      <Section27 />
      <Section28 />
      <Section29 />
      <Section30 />
      <PageFooter />
    </>
  )
}

export const metadata = {
  title: 'Nisi duis enim id ea do aliquip ex',
  description:
    'Exercitation anim id ipsum amet minim fugiat culpa nisi officia proident excepteur ut officia do pariatur labore sit dolor',
  keywords: [
    'mauris blandit aliquet',
    'elit eget tincidunt',
    'nibh pulvinar ultricies',
    'augue ligula blandit',
    'turpis cursus habitasse',
    'platea dictumst vestibulum',
    'rhoncus est pellentesque',
    'habitant morbi tristique',
    'senectus et netus',
    'malesuada fames turpis',
    'egestas integer eget',
    'aliquet nibh praesent',
    'tristique magna sit',
  ],
  slug: 'enim-ad',
  featuredImage:
    '/images/portfolio/kseniachernaya/pexels-kseniachernaya-11112251.jpg',
  focusKeyword: 'mauris blandit aliquet',
  readingTimeMinutes: 7,
  publishDate: '2021-04-22T15:02:27Z',
  lastModified: '2025-09-29T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/enim-ad',
  },
  authors: [{ name: 'Lorem Ipsum' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/prenatal-care/',
    siteName: 'Mauris Blandit Aliquet',
    title: 'Esse reprehenderit id ut sit ad incididunt fugiat',
    description:
      'Adipiscing adipiscing fugiat mollit ut tempor reprehenderit dolore duis culpa do non mollit nulla ex laboris cillum sed dolor',
    image: {
      url: '/images/banner.jpg',
      alt: 'Aliquip aliqua id consectetur nulla veniam adipiscing proident commodo esse',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enim commodo ipsum deserunt esse consequat amet adipiscing',
    description:
      'Est non esse elit est voluptate do minim proident laborum aute excepteur voluptate duis sunt fugiat in veniam et',
    image: '/images/banner.jpg',
  },
}
