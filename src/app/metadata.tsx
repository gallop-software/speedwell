import { getMetaImage } from '@/utils/image-meta'

export const baseURL =
  process.env.NEXT_PUBLIC_PRODUCTION_URL || 'http://localhost:3000'

const logoImageData = getMetaImage('/images/pexels-pixabay-247462.jpg', 'large')

const businessImageData = getMetaImage(
  '/images/pexels-helenalopes-1996337.jpg',
  'large'
)

export const defaultOGImage = {
  url: logoImageData?.url || '',
  width: logoImageData?.width || 0,
  height: logoImageData?.height || 0,
}

export const defaultSEOConfig = {
  creator: 'Speedwell',
  publisher: 'Speedwell',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': 30,
      'max-image-preview': 'large' as const,
      'max-snippet': 160,
    },
  },
}

// Global structured data that appears on every page
export const defaultStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': 'https://speedwell.gallop.software#business',
    name: 'Speedwell',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud.',
    url: 'https://speedwell.gallop.software',
    logo: logoImageData?.url || '',
    image: businessImageData?.url || '',
    telephone: '+1-555-0123',
    email: 'info@speedwell.gallop.software',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Lorem Ipsum Boulevard',
      addressLocality: 'Dolor City',
      addressRegion: 'DC',
      postalCode: '10001',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.7128',
      longitude: '-74.0060',
    },
    openingHours: ['Mo-Fr 08:00-16:00'],
    priceRange: '$$',
    servesCuisine: [],
    acceptsReservations: true,
    hasMap: 'https://maps.example.com/lorem-ipsum',
    areaServed: [
      {
        '@type': 'City',
        name: 'Dolor City',
        containedInPlace: {
          '@type': 'State',
          name: 'Lorem State',
        },
      },
    ],
    medicalSpecialty: 'Lorem ipsum',
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Lorem Ipsum',
        description: 'Dolor sit amet consectetur adipiscing',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Adipiscing Elit',
        description: 'Sed do eiusmod tempor incididunt',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Tempor Incididunt',
        description: 'Ut labore et dolore magna',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Magna Aliqua',
        description: 'Enim ad minim veniam quis',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Veniam Quis',
        description: 'Nostrud exercitation ullamco laboris',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Ullamco Laboris',
        description: 'Nisi ut aliquip ex ea',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Commodo Consequat',
        description: 'Duis aute irure dolor in',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Reprehenderit Voluptate',
        description: 'Velit esse cillum dolore eu',
      },
    ],
    knowsAbout: [
      'Lorem ipsum',
      'Dolor sit',
      'Amet consectetur',
      'Adipiscing elit',
      'Sed do eiusmod',
      'Tempor incididunt',
      'Ut labore',
      'Et dolore',
      'Magna aliqua enim',
    ],
    sameAs: [
      'https://www.facebook.com',
      'https://www.instagram.com',
      'https://maps.example.com/lorem-ipsum',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '181',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@id': 'https://speedwell.gallop.software#business',
    },
    author: {
      '@type': 'Person',
      name: 'Lorem Ipsum',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    reviewBody:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@id': 'https://speedwell.gallop.software#business',
    },
    author: {
      '@type': 'Person',
      name: 'Dolor Sit',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    reviewBody:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@id': 'https://speedwell.gallop.software#business',
    },
    author: {
      '@type': 'Person',
      name: 'Amet Consectetur',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    reviewBody:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure reprehenderit in voluptate velit esse cillum dolore.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@id': 'https://speedwell.gallop.software#business',
    },
    author: {
      '@type': 'Person',
      name: 'Adipiscing Elit',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    reviewBody:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Speedwell',
    url: 'https://speedwell.gallop.software',
    logo: logoImageData?.url || '',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'lorem ipsum',
      availableLanguage: 'Lorem',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Lorem Ipsum Boulevard',
      addressLocality: 'Dolor City',
      addressRegion: 'DC',
      postalCode: '10001',
      addressCountry: 'US',
    },
    foundingDate: '2009',
    numberOfEmployees: '8',
    slogan: 'Lorem ipsum dolor sit amet',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Speedwell',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud.',
    url: 'https://speedwell.gallop.software',
    logo: logoImageData?.url || '',
    image: businessImageData?.url || '',
    telephone: '+1-555-0123',
    email: 'info@speedwell.gallop.software',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Lorem Ipsum Boulevard',
      addressLocality: 'Dolor City',
      addressRegion: 'DC',
      postalCode: '10001',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.7128',
      longitude: '-74.0060',
    },
    openingHours: ['Mo-Fr 08:00-16:00'],
    priceRange: '$$',
    servesCuisine: [],
    acceptsReservations: true,
    hasMap: 'https://maps.example.com/lorem-ipsum',
    areaServed: [
      {
        '@type': 'City',
        name: 'Dolor City',
        containedInPlace: {
          '@type': 'State',
          name: 'Lorem State',
        },
      },
    ],
    medicalSpecialty: 'Lorem ipsum',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Speedwell',
    url: 'https://speedwell.gallop.software',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud.',
    publisher: {
      '@type': 'Organization',
      name: 'Speedwell',
    },
  },
]
