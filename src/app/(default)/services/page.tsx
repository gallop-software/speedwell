import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero11 from '@/blocks/hero-11'
import Content33 from '@/blocks/content-33'
import Content34 from '@/blocks/content-34'
import Content35 from '@/blocks/content-35'
import Content36 from '@/blocks/content-36'
import Content37 from '@/blocks/content-37'
import Content38 from '@/blocks/content-38'
import Content39 from '@/blocks/content-39'
import PageFooter from '@/template/page-footer'

function Content() {
  return (
    <>
      <Hero11 />
      <Content33 />
      <Content34 />
      <Content35 />
      <Content36 />
      <Content37 />
      <Content38 />
      <Content39 />
      <PageFooter />
    </>
  )
}

const metadata: PageMetadata = {
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
  slug: 'services',
  featuredImage:
    '/images/portfolio/kseniachernaya/pexels-kseniachernaya-11112251.jpg',
  focusKeyword: 'mauris blandit aliquet',
  readingTimeMinutes: 7,
  publishDate: '2021-04-22T15:02:27Z',
  modifiedDate: '2025-09-29T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/services',
  },
  authors: [{ name: 'Lorem Ipsum' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/services/',
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

export const generateMetadata = () => generatePageMetadata(metadata)
export default function Page() {
  return (
    <PageWrapper metadata={metadata}>
      <Content />
    </PageWrapper>
  )
}
