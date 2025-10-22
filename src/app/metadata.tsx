import { getMetaImage } from '@/utils/image-meta'

export const baseURL = 'https://speedwell.gallop.software'

const logoImageData = getMetaImage(
  '/images/heartbeat_share_image_txiyaf.png',
  'large'
)

const businessImageData = getMetaImage('/images/img_8244-hdr.jpg', 'large')

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
      'Lubbock midwives offering personalized prenatal, birth, and postpartum care at home or in our warm, welcoming birth center.',
    url: 'https://speedwell.gallop.software',
    logo: logoImageData?.url || '',
    image: businessImageData?.url || '',
    telephone: '(806) 642-7326',
    email: 'info@speedwell.gallop.software',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '419 Raleigh Ave',
      addressLocality: 'Lubbock',
      addressRegion: 'TX',
      postalCode: '79416',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '33.5779',
      longitude: '-101.8552',
    },
    openingHours: ['Mo-Fr 08:00-16:00'],
    priceRange: '$$',
    servesCuisine: [],
    acceptsReservations: true,
    hasMap: 'https://g.page/heartbeatmidwifery',
    areaServed: [
      {
        '@type': 'City',
        name: 'Lubbock',
        containedInPlace: {
          '@type': 'State',
          name: 'Texas',
        },
      },
    ],
    medicalSpecialty: 'Midwifery',
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Prenatal Care',
        description: 'Comprehensive prenatal care throughout pregnancy',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Birth Center Delivery',
        description: 'Natural birth in our welcoming birth center',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Home Birth',
        description: 'Midwife-attended home birth services',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Water Birth',
        description: 'Safe water birth options at home or birth center',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Postpartum Care',
        description: 'Comprehensive postpartum and newborn care',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'VBAC Support',
        description: 'Vaginal birth after cesarean support and care',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Breech Birth',
        description: 'Specialized care for breech presentations',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Twin Birth',
        description: 'Expert care for twin pregnancies and births',
      },
    ],
    knowsAbout: [
      'Midwifery',
      'Water birth',
      'Childbirth classes',
      'Birth classes',
      'Birthing classes',
      'Birth education',
      'Breastfeeding',
      'Lactation',
      'UMC labor and delivery',
    ],
    sameAs: [
      'https://www.facebook.com/heartbeatmidwifery',
      'https://www.instagram.com/heartbeatmidwifery',
      'https://g.page/heartbeatmidwifery',
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
      name: 'Naomi Massey',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    reviewBody:
      "All 3 of our babies have been born at Heartbeat along with Heartbeat helping us through a loss. Carmen and all the other amazing midwives and students that have seen their way through Heartbeat have been a part of each of our incredible journeys. We are beyond thankful for the relationships made while bringing our babies earth side. We are thankful for the support beyond just pregnancy and birth. We can't recommend Heartbeat enough. I know that had we not had the support from a very knowledgeable and experienced midwife my birthing experiences would've been much different.",
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@id': 'https://speedwell.gallop.software#business',
    },
    author: {
      '@type': 'Person',
      name: 'Suzanna Rempel',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    reviewBody:
      'We had both our babies at heartbeat and could not recommend it enough! The midwives took such good care of us and welcomed us with open arms! Sofi always greeted us with a smile and a positive attitude! They made us feel like family! Carmen and Kelly delivered my last baby and it was such a peaceful experience. These ladies really care for their patients! We hope to be back for our next baby!',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@id': 'https://speedwell.gallop.software#business',
    },
    author: {
      '@type': 'Person',
      name: 'Amie Geyman',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    reviewBody:
      "Carmen is so amazing! She delivered my seventh baby. Baby girl came after a painful traumatic loss. Carmen helped me with both the emotional and physical sides of labor. It was truly a beautiful, empowering birth. I felt heard, encouraged, and valued through the whole labor. I couldn't appreciate her more!",
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@id': 'https://speedwell.gallop.software#business',
    },
    author: {
      '@type': 'Person',
      name: 'Rebecca Friesen',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    reviewBody:
      "The people at Speedwell are the sweetest ladies ever, so kind and considerate and were there for every question and concern I had. They were so helpful in giving advice on supplements to take and what foods to eat to support my pregnancy and birth and it made a huge difference! At my birth they were so reassuring and knew exactly what they were doing and I have never felt so seen and cared for. My baby was born beautiful and healthy and that is thanks to them. As a first time Mom I couldn't have done this without all of their great support! I would 100% recommend then to anyone!",
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Speedwell',
    url: 'https://speedwell.gallop.software',
    logo: logoImageData?.url || '',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '(806) 642-7326',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '419 Raleigh Ave',
      addressLocality: 'Lubbock',
      addressRegion: 'TX',
      postalCode: '79416',
      addressCountry: 'US',
    },
    foundingDate: '2009',
    numberOfEmployees: '8',
    slogan: 'Personal, respectful care rooted in trust',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Speedwell',
    description:
      'Lubbock midwives offering personalized prenatal, birth, and postpartum care at home or in our warm, welcoming birth center.',
    url: 'https://speedwell.gallop.software',
    logo: logoImageData?.url || '',
    image: businessImageData?.url || '',
    telephone: '(806) 642-7326',
    email: 'info@speedwell.gallop.software',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '419 Raleigh Ave',
      addressLocality: 'Lubbock',
      addressRegion: 'TX',
      postalCode: '79416',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '33.5779',
      longitude: '-101.8552',
    },
    openingHours: ['Mo-Fr 08:00-16:00'],
    priceRange: '$$',
    servesCuisine: [],
    acceptsReservations: true,
    hasMap: 'https://g.page/heartbeatmidwifery',
    areaServed: [
      {
        '@type': 'City',
        name: 'Lubbock',
        containedInPlace: {
          '@type': 'State',
          name: 'Texas',
        },
      },
    ],
    medicalSpecialty: 'Midwifery',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Speedwell',
    url: 'https://speedwell.gallop.software',
    description:
      'Lubbock midwives offering personalized prenatal, birth, and postpartum care at home or in our warm, welcoming birth center.',
    publisher: {
      '@type': 'Organization',
      name: 'Speedwell',
    },
  },
]
