import {
  Cover,
  Section,
  Heading,
  Paragraph,
  Quote,
  Buttons,
  Button,
  Accent,
  Swiper,
  Testimonial1,
  FancyHeading,
  Columns,
  Column,
  List,
  Li,
  Gallery,
  GalleryItem,
  Navbar,
  Image,
} from '@/components'
import PageFooter from '@/template/page-footer'
import arrowDownIcon from '@iconify/icons-heroicons/arrow-down-20-solid'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

export default function Content() {
  return (
    <>
      {/* Hero */}
      <Navbar />
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 bg-body-dark z-0"></div>
        <div className="pt-0 pb-20 lg:py-24 px-6 mx-auto max-w-[1600px] relative">
          <Columns reverseColumns>
            <Column className="relative -mx-6">
              <Image
                className="w-full h-[450px] sm:h-[600px] lg:h-[800px] object-cover"
                src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571452.jpg"
                alt="Consequat est ullamco esse laborum deserunt id amet adipiscing lorem ex"
                size="large"
                rounded="rounded-none"
                lazy={false}
              />
              <Accent
                className="absolute hidden lg:block -bottom-10 lg:bottom-auto left-6 lg:-top-20 lg:-left-40 transform -rotate-12"
                color="text-white"
              >
                quis non
              </Accent>
            </Column>
            <Column className="mx-auto max-w-2xl lg:max-w-7xl">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Mollit esse tempor occaecat laboris
              </Heading>
              <Paragraph>
                Magna exercitation adipiscing fugiat nisi consectetur nostrud ut
                cupidatat laborum proident mollit sed adipiscing sed ipsum do
                velit sunt reprehenderit id anim sit sunt deserunt reprehenderit
                dolore duis ut lorem occaecat culpa cillum pariatur fugiat ipsum
                pariatur eiusmod nulla sunt commodo lorem enim nostrud quis anim
                laboris dolor sint qui minim velit irure proident nisi
                exercitation mollit in ea ad culpa nulla tempor nulla velit
                consequat consequat
              </Paragraph>
              <Buttons className="">
                <Button
                  href="#services"
                  icon={arrowDownIcon}
                  iconPlacement="after"
                >
                  Enim esse laboris anim magna proident
                </Button>
              </Buttons>
            </Column>
          </Columns>
        </div>
      </div>

      {/* Content */}
      <Section
        className="bg-body py-30"
        innerAlign="content"
      >
        <Heading
          as="h2"
          id="services"
          className="text-center"
        >
          Magna fugiat laboris ullamco
        </Heading>
        <Paragraph>
          Incididunt mollit non veniam ipsum labore dolore ea dolor cillum
          officia sit ex cupidatat et aliqua veniam excepteur labore nulla nisi
          magna culpa laboris ad reprehenderit velit enim nisi et adipiscing
          occaecat sunt dolor exercitation dolore ad eiusmod nostrud est
          reprehenderit nostrud aliquip duis fugiat velit et aliqua laborum sunt
          qui nulla consectetur
        </Paragraph>
        <Paragraph>
          Anim ea aliquip qui irure magna exercitation fugiat irure velit nulla
          enim lorem anim ad laborum eiusmod incididunt anim tempor elit culpa
          deserunt tempor officia enim adipiscing amet anim esse ea occaecat
          cupidatat ut nostrud proident proident culpa incididunt ea deserunt
          laboris
        </Paragraph>
        <Paragraph>
          Deserunt fugiat irure sit qui qui tempor tempor quis consequat aute
          irure amet proident aliquip ea nulla duis aliqua consectetur consequat
          commodo sunt do nisi ex anim id labore cillum dolor nostrud cupidatat
          sint dolore pariatur laborum non reprehenderit laboris nulla voluptate
          velit duis aliqua pariatur id consequat lorem excepteur
        </Paragraph>
      </Section>

      {/* Call To Action */}
      <Cover
        className="py-30 lg:py-50"
        imageSrc="/images/portfolio/pexels-burst-545012.jpg"
        imageAlt="Qui sunt magna"
        overlayColor="bg-accent5/90"
        height="h-auto"
        innerAlign="content"
      >
        <Heading
          as="h3"
          styleAs="h2"
          textAlign="text-center"
        >
          Fugiat laboris est
        </Heading>
        <Paragraph
          variant="large"
          textAlign="text-center"
        >
          Ut dolor duis anim nostrud tempor consequat consequat aliquip est
          reprehenderit officia occaecat occaecat enim voluptate adipiscing ad
          excepteur occaecat dolor excepteur consectetur
        </Paragraph>
        <Buttons className="mt-8 justify-center">
          <Button
            size="medium"
            href="/sit"
            variant="primary"
            icon={arrowRightIcon}
            iconPlacement="after"
          >
            Voluptate enim
          </Button>
        </Buttons>
      </Cover>

      <PageFooter />
    </>
  )
}

export const metadata = {
  title: 'Velit ullamco laboris culpa non lorem',
  description:
    'In excepteur do in pariatur adipiscing nisi laborum nulla anim excepteur laboris laborum elit et aliqua pariatur dolor deserunt sit culpa sint',
  keywords: [
    'vivamus magna consultant',
    'lacinia eget consultant',
    'magna justo consultant',
    'lacinia consultant vivamus',
    'vivamus magna cura',
    'justo lacinia cura',
    'certified magna specialist',
    'vivamus subsidium lacinia',
    'lacinia eget help',
    'justo subsidium vivamus',
    'magna cura vivamus',
    'quartus trimester subsidium',
    'vivamus specialist lacinia',
  ],
  slug: 'magna-aliqua',
  featuredImage: '/images/portfolio/pexels-mikhail-nilov-6707628.jpg',
  focusKeyword: 'vivamus magna consultant',
  readingTimeMinutes: 2,
  publishDate: '2025-06-23T20:41:03Z',
  lastModified: '2025-09-29T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/magna-aliqua',
  },
  authors: [{ name: 'Consectetur Adipiscing' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/postpartum-newborn/',
    siteName: 'Vivamus Magna Justo',
    title: 'Ut non veniam proident incididunt dolor',
    description:
      'Adipiscing voluptate enim culpa elit nulla labore elit adipiscing eiusmod laboris dolor magna nostrud ipsum sed ipsum sint nulla aliqua nisi laboris',
    image: {
      url: '/images/portfolio/falling4utah/pexels-falling4utah-1080721.jpg',
      alt: 'Consequat incididunt sit id sed sed nostrud enim nisi aliqua',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cillum laborum voluptate commodo dolore consequat',
    description:
      'Ut occaecat consectetur magna lorem proident ut esse adipiscing deserunt qui est ad non labore tempor tempor ipsum velit aliquip commodo in',
    image: '/images/dsc_5036.jpg',
  },
}
