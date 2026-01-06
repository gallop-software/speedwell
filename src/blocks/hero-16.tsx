'use client'

import { useId } from 'react'
import {
  Cover,
  Container,
  Heading,
  Paragraph,
  Accent,
  VideoPopup,
  Icon,
} from '@/components'
import useCircleAnimation from '@/hooks/use-circle-animation'
import SwiperSliderInit from '@/hooks/swiper-slider-init'
import playIcon from '@iconify/icons-heroicons/play-solid'
import arrowLongRightIcon from '@iconify/icons-heroicons/arrow-long-right-20-solid'

const slides = [
  {
    accent: 'award winning',
    heading: 'Transforming Spaces Into Dreams',
    paragraph:
      'We craft interiors that blend timeless elegance with modern functionality, creating spaces that inspire and delight.',
  },
  {
    accent: 'luxury design',
    heading: 'Where Vision Meets Reality',
    paragraph:
      'Our expert team brings your design aspirations to life with meticulous attention to detail and unparalleled craftsmanship.',
  },
  {
    accent: 'bespoke solutions',
    heading: 'Curated Interiors For Living',
    paragraph:
      'Every project is a unique journey tailored to your lifestyle, reflecting your personality in every carefully chosen element.',
  },
]

const circleText = 'Watch Video - Watch Video - '

export default function Hero16() {
  let swiperId = 'swiper-' + useId()
  swiperId = swiperId.replace(/:/g, '-')

  let circleTextId = 'circle-text-' + useId()
  circleTextId = circleTextId.replace(/:/g, '-')

  useCircleAnimation(circleTextId)

  return (
    <Cover
      imageSrc="/images/portfolio/pexels-heyho-6794934.jpg"
      imageAlt="Interior design showcase"
      overlayColor="bg-contrast/60"
      height="lg:min-h-screen"
      className="flex items-center justify-center"
    >
      <div className="mx-auto max-w-[1600px] relative flex flex-col xl:flex-row py-16 gap-12 xl:gap-0 pt-40 mb-40">
        {/* Left side - Swiper slider */}
        <div className="w-full xl:w-7/12 flex justify-center">
          <div
            id={swiperId}
            className="swiper max-w-[950px] xl:max-w-none"
          >
            <div className="swiper-wrapper items-start flex mb-20">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="swiper-slide"
                >
                  <div className="flex flex-col gap-8">
                    <Accent
                      size="medium"
                      margin="ml-2"
                      color="text-body"
                    >
                      {slide.accent}
                    </Accent>
                    <Heading
                      as="h1"
                      color="text-body"
                      className="mb-0!"
                    >
                      {slide.heading}
                    </Heading>
                    <Paragraph
                      variant="large"
                      color="text-body"
                      className="mb-0! max-w-xl"
                    >
                      {slide.paragraph}
                    </Paragraph>
                  </div>
                </div>
              ))}
            </div>
            <div className="z-10 swiper-pagination absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center w-full [&>.swiper-pagination-bullet]:w-3 [&>.swiper-pagination-bullet]:h-3 [&>.swiper-pagination-bullet]:bg-body/50 [&>.swiper-pagination-bullet]:rounded-full [&>.swiper-pagination-bullet]:transition [&>.swiper-pagination-bullet]:duration-300 [&>.swiper-pagination-bullet]:mx-1 [&>.swiper-pagination-bullet]:cursor-pointer [&>.swiper-pagination-bullet-active]:bg-body [&>.swiper-pagination-bullet-active]:scale-110"></div>
          </div>
          <SwiperSliderInit swiperId={swiperId} />
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
                  className="shrink-0 h-auto w-10 text-contrast -mr-1"
                />
              </div>
            </div>
          </VideoPopup>
        </div>
      </div>
    </Cover>
  )
}
