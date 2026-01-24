import { ProBlock } from '@/components'

export default function Hero19() {
  return (
<<<<<<< HEAD
    <ProBlock
      blockSlug="hero-19"
      blockName="Hero 19"
    />
=======
    <div className="lg:mb-20">
      {/* Hero Section */}
      <div
        className="relative px-6 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/portfolio/pexels-heyho-6794934.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-contrast/60" />

        <div className="mx-auto max-w-[1600px] relative flex flex-col xl:flex-row gap-12 xl:gap-0 pt-40 pb-40">
          {/* Left side - Swiper slider */}
          <div className="w-full xl:w-7/12 flex justify-center">
            <div
              id={swiperId}
              className="swiper max-w-[950px] xl:max-w-none"
            >
              <div className="swiper-wrapper items-center lg:items-start flex mb-20">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="swiper-slide"
                  >
                    <div className="flex flex-col gap-8">
                      <Accent
                        size="medium"
                        margin="xl:ml-2"
                        color="text-body"
                        textAlign="text-center xl:text-left"
                      >
                        {slide.accent}
                      </Accent>
                      <Heading
                        as="h1"
                        color="text-body"
                        margin="mb-0!"
                        className="max-w-3xl"
                        textAlign="text-center xl:text-left mx-auto xl:mx-0"
                      >
                        {slide.heading}
                      </Heading>
                      <Paragraph
                        variant="large"
                        color="text-body"
                        margin="mb-0!"
                        className="max-w-xl"
                        textAlign="text-center xl:text-left mx-auto xl:mx-0"
                      >
                        {slide.paragraph}
                      </Paragraph>
                    </div>
                  </div>
                ))}
              </div>
              <div className="z-10 swiper-pagination absolute bottom-4 left-0 flex justify-center xl:justify-start w-full [&>.swiper-pagination-bullet]:w-3 [&>.swiper-pagination-bullet]:h-3 [&>.swiper-pagination-bullet]:bg-body/50 [&>.swiper-pagination-bullet]:rounded-full [&>.swiper-pagination-bullet]:transition [&>.swiper-pagination-bullet]:duration-300 [&>.swiper-pagination-bullet]:mx-1 [&>.swiper-pagination-bullet]:cursor-pointer [&>.swiper-pagination-bullet-active]:bg-body [&>.swiper-pagination-bullet-active]:scale-110"></div>
            </div>
            <SwiperSliderInit
              swiperId={swiperId}
              autoHeight={false}
            />
          </div>

          {/* Right side - Video popup with circle animation */}
          <div className="w-full xl:w-5/12 flex items-start justify-center pt-8 xl:pt-32">
            <VideoPopup
              className="relative p-2 rounded-full border-2 border-body bg-body/10 hover:bg-body/20 transition-colors duration-300 ease-in-out"
              url="#video"
              embed={{
                wpBlockEmbedWrapper: {
                  iframe: {
                    _src: 'https://player.vimeo.com/video/1134529903',
                    _title: 'Interior Design Showcase',
                  },
                },
              }}
            >
              <div className="relative w-36 h-36 flex items-center justify-center">
                {/* Circle text animation */}
                <CircleAnimationInit targetId={circleTextId} />
                <div
                  id={circleTextId}
                  className="absolute w-full h-full"
                >
                  {circleText.split('').map((letter, index) => {
                    const length = circleText.length
                    const spacing = Math.round(360 / length)
                    const angle = spacing * index

                    return (
                      <span
                        key={index}
                        className="absolute top-0 left-0 right-0 h-full flex items-start justify-center origin-center uppercase text-sm text-body"
                        style={{ transform: `rotate(${angle}deg)` }}
                      >
                        {letter}
                      </span>
                    )
                  })}
                </div>

                {/* Play button */}
                <div className="absolute w-20 h-20 rounded-full bg-body flex items-center justify-center">
                  <Icon
                    icon={playIcon}
                    className="shrink-0 h-auto w-10 text-accent -mr-1"
                  />
                </div>
              </div>
            </VideoPopup>
          </div>
        </div>
      </div>

      {/* Business Info Section */}
      <div className="relative bg-contrast z-1 px-6">
        <div className="mx-auto max-w-[1600px] relative flex flex-col xl:flex-row gap-6 xl:gap-0">
          {/* Hours Section */}
          <div className="pt-14 pb-10 px-8 w-full xl:w-4/12 -mt-20 xl:-mb-20 relative rounded-md xl:rounded-b-md xl:rounded-t-md overflow-hidden shadow-lg bg-accent3">
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
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-accent-contrast">
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
    </div>
>>>>>>> pro
  )
}
