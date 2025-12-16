import { useId, Children } from 'react'
import SwiperSliderInit from '@/hooks/swiper-slider-init'
import clsx from 'clsx'

interface SwiperProps {
  /** Child components to render inside the swiper */
  children: React.ReactNode
  /** Layout type: "slider" (default) or "carousel" */
  layout?: 'slider' | 'carousel'
}

export function Swiper({ children, layout = 'slider' }: SwiperProps) {
  let swiperId = 'swiper-' + useId()
  swiperId = swiperId.replace(/:/g, '-')

  return (
    <>
      <div
        id={swiperId}
        className={clsx(
          'swiper lg:mt-0',
          layout === 'carousel' && 'overflow-visible!',
          layout === 'slider' && 'max-w-[950px] xl:max-w-none'
        )}
      >
        <div className="swiper-wrapper items-start flex mb-20">
          {Children.map(children, (child, index) => (
            <div
              key={index}
              className="swiper-slide"
            >
              {child}
            </div>
          ))}
        </div>
        {layout === 'slider' && (
          <div className="z-10 swiper-pagination absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center w-full [&>.swiper-pagination-bullet]:w-3 [&>.swiper-pagination-bullet]:h-3 [&>.swiper-pagination-bullet]:bg-gray-400 [&>.swiper-pagination-bullet]:rounded-full [&>.swiper-pagination-bullet]:opacity-50 [&>.swiper-pagination-bullet]:transition [&>.swiper-pagination-bullet]:duration-300 [&>.swiper-pagination-bullet]:mx-1 [&>.swiper-pagination-bullet]:cursor-pointer [&>.swiper-pagination-bullet-active]:bg-black [&>.swiper-pagination-bullet-active]:opacity-100 [&>.swiper-pagination-bullet-active]:scale-110"></div>
        )}
      </div>
      <SwiperSliderInit
        swiperId={swiperId}
        layout={layout}
      />
    </>
  )
}
