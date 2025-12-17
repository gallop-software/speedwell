'use client'

import { useEffect, useRef, useState } from 'react'
import { clsx } from 'clsx'
import { Image, Container, Accent } from '@/components'

export default function Cover6() {
  const [scrollY, setScrollY] = useState(0)
  const coverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (coverRef.current) {
        const rect = coverRef.current.getBoundingClientRect()
        const scrollProgress = -rect.top / (rect.height + window.innerHeight)
        setScrollY(scrollProgress * 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={coverRef}
      className={clsx(
        'bg-body2',
        'relative w-full overflow-hidden z-0',
        '[&>*>*>*:last-child]:mb-0',
        'h-[300px] md:h-[400px] lg:h-[500px]'
      )}
    >
      <div
        className="absolute inset-0 w-full"
        style={{
          height: '230%',
          transform: `translateY(${scrollY * 0.85}%)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <Image
          src="/images/layout-3/pexels-cesar-o-neill-26650613-35240283.jpg"
          size="full"
          alt="Creative workspace with design materials"
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-black/30"></div>
      <Container
        className={clsx(
          'relative flex flex-col items-center justify-center h-full w-full'
        )}
      >
        <Accent className="text-center" color="text-white" size="medium">
          Capturing Moments That Last Forever
        </Accent>
      </Container>
    </div>
  )
}
