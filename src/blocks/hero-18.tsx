import {
  Columns,
  Column,
  Image,
  Accent,
  Heading,
  Paragraph,
  Buttons,
  Button,
} from '@/components'
import heartIcon from '@iconify/icons-heroicons/heart'
import sparklesIcon from '@iconify/icons-heroicons/sparkles'

export default function Hero18() {
  return (
    <div className="relative bg-gradient-to-br from-body via-accent2/5 to-body overflow-hidden">
      {/* Falling confetti - covers entire hero */}
      <div className="absolute inset-0 z-40 pointer-events-none overflow-hidden">
        {/* Row 1 */}
        <div className="absolute top-[1%] left-[2%] w-3 h-3 bg-pink-400 rounded-sm animate-fall-slow opacity-80 rotate-45"></div>
        <div className="absolute top-[3%] left-[8%] w-2 h-4 bg-yellow-400 rounded-sm animate-fall-medium opacity-75 rotate-12"></div>
        <div className="absolute top-[2%] left-[14%] w-4 h-2 bg-purple-400 rounded-sm animate-fall-fast opacity-85 -rotate-12"></div>
        <div className="absolute top-[4%] left-[20%] w-3 h-3 bg-teal-400 rounded-sm animate-fall-slow opacity-70 rotate-45"></div>
        <div className="absolute top-[1%] left-[26%] w-2 h-3 bg-orange-400 rounded-sm animate-fall-medium opacity-80 -rotate-45"></div>
        <div className="absolute top-[3%] left-[32%] w-4 h-2 bg-rose-400 rounded-sm animate-fall-fast opacity-75 rotate-12"></div>
        <div className="absolute top-[2%] left-[38%] w-2 h-4 bg-sky-400 rounded-sm animate-fall-slow opacity-80 -rotate-12"></div>
        <div className="absolute top-[4%] left-[44%] w-3 h-2 bg-lime-400 rounded-sm animate-fall-medium opacity-70 rotate-45"></div>
        <div className="absolute top-[1%] left-[50%] w-2 h-2 bg-fuchsia-400 rounded-full animate-fall-fast opacity-75"></div>
        <div className="absolute top-[3%] left-[56%] w-2 h-3 bg-amber-400 rounded-sm animate-fall-slow opacity-80 -rotate-12"></div>
        <div className="absolute top-[2%] left-[62%] w-3 h-3 bg-pink-400 rounded-sm animate-fall-medium opacity-75 rotate-45"></div>
        <div className="absolute top-[4%] left-[68%] w-2 h-4 bg-yellow-400 rounded-sm animate-fall-fast opacity-80 -rotate-45"></div>
        <div className="absolute top-[1%] left-[74%] w-4 h-2 bg-purple-400 rounded-sm animate-fall-slow opacity-70 rotate-12"></div>
        <div className="absolute top-[3%] left-[80%] w-3 h-2 bg-teal-400 rounded-sm animate-fall-medium opacity-85 -rotate-12"></div>
        <div className="absolute top-[2%] left-[86%] w-2 h-3 bg-orange-400 rounded-sm animate-fall-fast opacity-75 rotate-45"></div>
        <div className="absolute top-[4%] left-[92%] w-2 h-2 bg-rose-400 rounded-full animate-fall-slow opacity-80"></div>
        <div className="absolute top-[1%] left-[98%] w-3 h-3 bg-sky-400 rounded-sm animate-fall-medium opacity-70 -rotate-45"></div>
        
        {/* Row 2 */}
        <div className="absolute top-[7%] left-[5%] w-2 h-2 bg-amber-400 rounded-full animate-fall-medium opacity-70"></div>
        <div className="absolute top-[9%] left-[11%] w-3 h-2 bg-fuchsia-400 rounded-sm animate-fall-fast opacity-75 rotate-45"></div>
        <div className="absolute top-[6%] left-[17%] w-2 h-3 bg-pink-400 rounded-sm animate-fall-slow opacity-80 -rotate-12"></div>
        <div className="absolute top-[8%] left-[23%] w-4 h-2 bg-yellow-400 rounded-sm animate-fall-medium opacity-75 rotate-12"></div>
        <div className="absolute top-[7%] left-[29%] w-3 h-3 bg-purple-400 rounded-sm animate-fall-fast opacity-80 -rotate-45"></div>
        <div className="absolute top-[9%] left-[35%] w-2 h-4 bg-teal-400 rounded-sm animate-fall-slow opacity-70 rotate-45"></div>
        <div className="absolute top-[6%] left-[41%] w-4 h-2 bg-orange-400 rounded-sm animate-fall-medium opacity-75 -rotate-12"></div>
        <div className="absolute top-[8%] left-[47%] w-2 h-3 bg-rose-400 rounded-sm animate-fall-fast opacity-80 rotate-45"></div>
        <div className="absolute top-[7%] left-[53%] w-3 h-2 bg-sky-400 rounded-sm animate-fall-slow opacity-70 -rotate-45"></div>
        <div className="absolute top-[9%] left-[59%] w-2 h-2 bg-lime-400 rounded-full animate-fall-medium opacity-75"></div>
        <div className="absolute top-[6%] left-[65%] w-3 h-3 bg-amber-400 rounded-sm animate-fall-fast opacity-80 rotate-12"></div>
        <div className="absolute top-[8%] left-[71%] w-2 h-4 bg-fuchsia-400 rounded-sm animate-fall-slow opacity-75 -rotate-45"></div>
        <div className="absolute top-[7%] left-[77%] w-4 h-2 bg-pink-400 rounded-sm animate-fall-medium opacity-70 rotate-45"></div>
        <div className="absolute top-[9%] left-[83%] w-3 h-2 bg-yellow-400 rounded-sm animate-fall-fast opacity-85 -rotate-12"></div>
        <div className="absolute top-[6%] left-[89%] w-2 h-3 bg-purple-400 rounded-sm animate-fall-slow opacity-80 rotate-12"></div>
        <div className="absolute top-[8%] left-[95%] w-2 h-2 bg-teal-400 rounded-full animate-fall-medium opacity-75"></div>
        
        {/* Row 3 */}
        <div className="absolute top-[12%] left-[3%] w-2 h-3 bg-sky-400 rounded-sm animate-fall-fast opacity-75 -rotate-12"></div>
        <div className="absolute top-[14%] left-[9%] w-3 h-2 bg-lime-400 rounded-sm animate-fall-slow opacity-80 rotate-45"></div>
        <div className="absolute top-[11%] left-[15%] w-2 h-2 bg-fuchsia-400 rounded-full animate-fall-medium opacity-70"></div>
        <div className="absolute top-[13%] left-[21%] w-4 h-3 bg-amber-400 rounded-sm animate-fall-fast opacity-85 rotate-12"></div>
        <div className="absolute top-[12%] left-[27%] w-2 h-4 bg-pink-400 rounded-sm animate-fall-slow opacity-75 -rotate-45"></div>
        <div className="absolute top-[14%] left-[33%] w-3 h-2 bg-yellow-400 rounded-sm animate-fall-medium opacity-80 rotate-45"></div>
        <div className="absolute top-[11%] left-[39%] w-2 h-2 bg-purple-400 rounded-full animate-fall-fast opacity-70"></div>
        <div className="absolute top-[13%] left-[45%] w-3 h-3 bg-teal-400 rounded-sm animate-fall-slow opacity-75 -rotate-12"></div>
        <div className="absolute top-[12%] left-[51%] w-4 h-2 bg-orange-400 rounded-sm animate-fall-medium opacity-80 rotate-12"></div>
        <div className="absolute top-[14%] left-[57%] w-2 h-3 bg-rose-400 rounded-sm animate-fall-fast opacity-70 -rotate-45"></div>
        <div className="absolute top-[11%] left-[63%] w-3 h-2 bg-sky-400 rounded-sm animate-fall-slow opacity-85 rotate-45"></div>
        <div className="absolute top-[13%] left-[69%] w-2 h-4 bg-lime-400 rounded-sm animate-fall-medium opacity-75 -rotate-12"></div>
        <div className="absolute top-[12%] left-[75%] w-2 h-2 bg-amber-400 rounded-full animate-fall-fast opacity-80"></div>
        <div className="absolute top-[14%] left-[81%] w-3 h-3 bg-fuchsia-400 rounded-sm animate-fall-slow opacity-70 rotate-12"></div>
        <div className="absolute top-[11%] left-[87%] w-4 h-2 bg-pink-400 rounded-sm animate-fall-medium opacity-75 -rotate-45"></div>
        <div className="absolute top-[13%] left-[93%] w-2 h-3 bg-yellow-400 rounded-sm animate-fall-fast opacity-80 rotate-45"></div>
        
        {/* Row 4 */}
        <div className="absolute top-[17%] left-[1%] w-3 h-2 bg-purple-400 rounded-sm animate-fall-medium opacity-75 -rotate-12"></div>
        <div className="absolute top-[19%] left-[7%] w-2 h-3 bg-teal-400 rounded-sm animate-fall-fast opacity-80 rotate-45"></div>
        <div className="absolute top-[16%] left-[13%] w-4 h-2 bg-orange-400 rounded-sm animate-fall-slow opacity-70 -rotate-45"></div>
        <div className="absolute top-[18%] left-[19%] w-2 h-2 bg-rose-400 rounded-full animate-fall-medium opacity-85"></div>
        <div className="absolute top-[17%] left-[25%] w-3 h-3 bg-sky-400 rounded-sm animate-fall-fast opacity-75 rotate-12"></div>
        <div className="absolute top-[19%] left-[31%] w-2 h-4 bg-lime-400 rounded-sm animate-fall-slow opacity-80 -rotate-12"></div>
        <div className="absolute top-[16%] left-[37%] w-3 h-2 bg-amber-400 rounded-sm animate-fall-medium opacity-70 rotate-45"></div>
        <div className="absolute top-[18%] left-[43%] w-2 h-3 bg-fuchsia-400 rounded-sm animate-fall-fast opacity-75 -rotate-45"></div>
        <div className="absolute top-[17%] left-[49%] w-4 h-2 bg-pink-400 rounded-sm animate-fall-slow opacity-80 rotate-12"></div>
        <div className="absolute top-[19%] left-[55%] w-2 h-2 bg-yellow-400 rounded-full animate-fall-medium opacity-85"></div>
        <div className="absolute top-[16%] left-[61%] w-3 h-3 bg-purple-400 rounded-sm animate-fall-fast opacity-70 -rotate-12"></div>
        <div className="absolute top-[18%] left-[67%] w-2 h-4 bg-teal-400 rounded-sm animate-fall-slow opacity-75 rotate-45"></div>
        <div className="absolute top-[17%] left-[73%] w-4 h-2 bg-orange-400 rounded-sm animate-fall-medium opacity-80 -rotate-45"></div>
        <div className="absolute top-[19%] left-[79%] w-3 h-2 bg-rose-400 rounded-sm animate-fall-fast opacity-70 rotate-12"></div>
        <div className="absolute top-[16%] left-[85%] w-2 h-3 bg-sky-400 rounded-sm animate-fall-slow opacity-85 -rotate-12"></div>
        <div className="absolute top-[18%] left-[91%] w-2 h-2 bg-lime-400 rounded-full animate-fall-medium opacity-75"></div>
        <div className="absolute top-[17%] left-[97%] w-3 h-3 bg-amber-400 rounded-sm animate-fall-fast opacity-80 rotate-45"></div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-accent2/10 rounded-full blur-3xl"></div>

      <div className="pt-20 pb-24 lg:py-32 px-6 mx-auto max-w-[1600px] relative">
        <Columns
          cols="grid-cols-1 lg:grid-cols-2"
          gap="gap-12 lg:gap-16"
          reverseColumns={false}
        >
          <Column className="flex flex-col justify-center space-y-8">
            <div>
              <Heading
                as="h1"
                className="max-w-2xl"
                margin="mb-6"
              >
                Your Dream Event, Perfectly Planned
              </Heading>
              <Paragraph className="text-lg max-w-xl">
                From intimate ceremonies to grand celebrations, we bring your
                vision to life with meticulous attention to detail, creative
                flair, and seamless execution. Let us transform your special
                moments into cherished memories that last a lifetime.
              </Paragraph>
            </div>

            <Buttons className="flex-wrap">
              <Button
                href="#planning-services-tailored-to-you"
                variant="primary"
                icon={heartIcon}
                iconPlacement="after"
              >
                Plan Your Event
              </Button>
              <Button
                href="#moments-weve-crafted"
                variant="secondary"
                icon={sparklesIcon}
                iconPlacement="after"
              >
                View Our Work
              </Button>
            </Buttons>
          </Column>

          <Column className="relative">
            {/* Image grid with elegant overlapping layout */}
            <div className="relative h-[500px] lg:h-[650px]">
              {/* Main large image */}
              <div className="absolute top-0 right-0 w-[70%] h-[60%] z-10">
                <Image
                  className="w-full h-full object-cover shadow-2xl"
                  src="/images/layout-5/pexels-mat-brown-150387-1395967.jpg"
                  alt="Elegant wedding ceremony setup with beautiful floral arrangements"
                  size="large"
                  rounded="rounded-lg"
                  lazy={false}
                />
                {/* Decorative frame */}
                <div className="absolute -inset-4 border-2 border-accent/20 rounded-lg -z-10"></div>
              </div>

              {/* Secondary image - bottom left */}
              <div className="absolute bottom-0 left-0 w-[65%] h-[55%] z-20">
                <Image
                  className="w-full h-full object-cover shadow-2xl"
                  src="/images/layout-5/pexels-thatguycraig000-2306281.jpg"
                  alt="Beautiful event decoration with elegant table settings"
                  size="large"
                  rounded="rounded-lg"
                  lazy={false}
                />
              </div>
            </div>
          </Column>
        </Columns>
      </div>
    </div>
  )
}
