'use client'

import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import {
  Pagination,
  Autoplay,
  EffectFade,
  Navigation,
  Keyboard,
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

interface SwiperSliderInitProps {
  swiperId: string
  layout?: 'slider' | 'carousel'
}

const SwiperSliderInit = ({
  swiperId,
  layout = 'slider',
}: SwiperSliderInitProps) => {
  const initializedRef = useRef(false)
  const swiperInstanceRef = useRef<Swiper | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (initializedRef.current) return // Ensure initialization only happens once

    const swiperContainer = document.getElementById(swiperId)

    if (!swiperContainer) return

    // Initialize Swiper with layout-specific config
    const config: any = {
      modules: [Pagination, Autoplay, EffectFade, Navigation, Keyboard],
      spaceBetween: 30,
      autoHeight: true,
      observer: true,
      observeParents: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      autoplay: {
        delay: 4500,
        pauseOnMouseEnter: false,
        disableOnInteraction: false,
      },
      pagination: {
        el: `#${swiperId} .swiper-pagination`,
        clickable: true,
      },
    }

    if (layout === 'slider') {
      config.effect = 'fade'
      config.loop = true
      config.fadeEffect = { crossFade: true }
    } else if (layout === 'carousel') {
      config.loop = false
      config.slidesPerView = 1
      config.breakpoints = {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }
      config.navigation = {
        prevEl: `.swiper-button-prev-${swiperId}`,
        nextEl: `.swiper-button-next-${swiperId}`,
      }
    }

    swiperInstanceRef.current = new Swiper(swiperContainer, config)

    // Force enable keyboard after initialization
    if (swiperInstanceRef.current?.keyboard) {
      swiperInstanceRef.current.keyboard.enable()
    }

    // Mark as initialized
    initializedRef.current = true

    // Setup IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            swiperInstanceRef.current?.autoplay.start()
          } else {
            swiperInstanceRef.current?.autoplay.stop()
          }
        })
      },
      {
        threshold: 0.9, // 10% of the swiper container should be visible
      }
    )

    if (swiperContainer) {
      observerRef.current.observe(swiperContainer)
    }

    return () => {
      observerRef.current?.disconnect()
      swiperInstanceRef.current?.destroy()
      initializedRef.current = false
    }
  }, [swiperId])

  return null
}

export default SwiperSliderInit
