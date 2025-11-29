import Hero2 from '@/blocks/hero-2'
import Showcase1 from '@/blocks/showcase-1'
import Showcase2 from '@/blocks/showcase-2'
import Showcase3 from '@/blocks/showcase-3'
import Showcase4 from '@/blocks/showcase-4'
import Showcase5 from '@/blocks/showcase-5'
import Section4 from '@/blocks/section-4'
import Cover1 from '@/blocks/cover-1'
import Testimonial1 from '@/blocks/testimonial-1'

export default function Content() {
  return (
    <>
      <Hero2 />
      <Showcase1 />
      <Showcase2 />
      <Showcase3 />
      <Showcase4 />
      <Showcase5 />
      <Section4 />
      <Cover1 />
      <Testimonial1 />
    </>
  )
}

export const metadata = {
  title: 'Est cupidatat aliquip excepteur exercitation',
  description:
    'Duis pariatur occaecat proident nostrud mollit nostrud voluptate sed amet magna irure amet exercitation qui exercitation sint consequat',
  keywords: [
    'pellentesque habitant morbi',
    'tristique senectus netus',
    'malesuada fames turpis',
    'vestibulum tortor quam',
    'feugiat vitae ultricies',
    'mi sit amet mauris',
    'commodo quis imperdiet',
    'massa tincidunt nunc',
    'pulvinar sapien et',
    'ligula ullamcorper',
    'malesuada proin libero',
    'nunc consequat interdum',
    'varius sit amet',
  ],
  slug: 'lorem-ipsum',
  featuredImage: '/images/portfolio/fotoaibe/pexels-fotoaibe-1643384.jpg',
  focusKeyword: 'pellentesque habitant',
  readingTimeMinutes: 15,
  publishDate: '2019-10-24T07:42:20Z',
  lastModified: '2025-09-29T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/lorem-ipsum',
  },
  authors: [{ name: 'Lorem Ipsum' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/birth-center/',
    siteName: 'Pellentesque Habitant Morbi',
    title: 'Qui ullamco adipiscing minim lorem',
    description:
      'Dolor ad consequat commodo et anim reprehenderit sit dolore lorem sunt exercitation exercitation officia dolore aute occaecat fugiat',
    image: {
      url: '/images/portfolio/pexels-pixabay-269218.jpg',
      alt: 'Sed esse in nisi ex occaecat cupidatat duis',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Et labore tempor eiusmod adipiscing',
    description:
      'Sint anim ipsum sint veniam ad laborum culpa ut aliqua adipiscing aliqua mollit est pariatur culpa minim deserunt',
    image: '/images/img_8353-hdr.jpg',
  },
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://speedwell.gallop.software',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Birth Center',
          item: 'https://speedwell.gallop.software/birth-center',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://speedwell.gallop.software/birth-center#webpage',
      url: 'https://speedwell.gallop.software/birth-center',
      name: 'Birth Center in Lubbock | Speedwell',
      description:
        'Ipsum deserunt esse deserunt magna irure dolore duis lorem exercitation magna magna in qui fugiat occaecat reprehenderit tempor nisi amet consectetur sit nostrud deserunt aliqua deserunt exercitation velit',
      inLanguage: 'en',
      publisher: {
        '@id': 'https://speedwell.gallop.software#organization',
      },
    },
  ],
}
