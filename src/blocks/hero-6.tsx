import {
  Navbar,
  Columns,
  Column,
  Image,
  Accent,
  Heading,
  Quote,
  Paragraph,
  Buttons,
  Button,
} from '@/components'
import arrowDownIcon from '@iconify/icons-heroicons/arrow-down-20-solid'

export default function Hero6() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 bg-accent3 z-0"></div>
        <div className="pt-0 pb-20 lg:py-24 px-6 mx-auto max-w-[1600px] relative">
          <Columns reverseColumns>
            <Column className="relative -mx-6">
              <Image
                className="w-full h-[450px] sm:h-[600px] lg:h-[800px] object-cover"
                src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571460.jpg"
                alt="Laborum id dolor deserunt sint culpa cillum eiusmod proident ut"
                size="large"
                rounded="rounded-none"
                lazy={false}
              />
              <Accent className="absolute hidden lg:block -bottom-10 lg:bottom-auto left-6 lg:-top-20 lg:-left-40 transform -rotate-12">
                qui est
              </Accent>
            </Column>
            <Column className="mx-auto max-w-2xl lg:max-w-7xl">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Tempor elit labore ad
              </Heading>
              <Quote>
                Nulla sunt laboris nisi eiusmod aliqua reprehenderit id anim
                ullamco enim id ea commodo
              </Quote>
              <Paragraph>
                Sed sint laboris officia lorem ipsum proident reprehenderit
                nostrud dolore proident sunt labore culpa sint est deserunt
                eiusmod est id commodo adipiscing excepteur sunt elit irure enim
                nostrud incididunt ea ut esse aliquip amet non occaecat
                consectetur pariatur nostrud ipsum minim proident ex sunt
                adipiscing dolore deserunt minim enim elit voluptate commodo non
                dolore
              </Paragraph>
              <Paragraph>
                Et nisi ex labore exercitation et pariatur proident amet amet id
                duis anim qui velit ut aliquip nulla magna sed amet deserunt
                minim magna ex laboris qui nulla amet do dolor dolore enim
                cillum veniam ea nulla id reprehenderit incididunt occaecat
                ullamco enim consectetur do
              </Paragraph>
              <Paragraph>
                Non ex ipsum voluptate officia minim do consequat enim
                adipiscing id ea duis minim excepteur esse ad cupidatat enim
                pariatur veniam qui dolore aliqua ex ea aliquip laborum anim
                esse consequat esse proident commodo occaecat non laboris
                exercitation commodo ut
              </Paragraph>
              <Buttons className="">
                <Button
                  href="#services"
                  variant="primary"
                  icon={arrowDownIcon}
                  iconPlacement="after"
                >
                  Elit irure tempor dolor sint in commodo
                </Button>
              </Buttons>
            </Column>
          </Columns>
        </div>
      </div>
    </>
  )
}
