'use client'

import { useCountUp } from 'react-countup'
import { useEffect, useRef } from 'react'

interface CountUpProps {
  start?: number
  end: number
  decimals?: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  separator?: string
  decimal?: string
  className?: string
}

export function CountUp({
  start = 0,
  end,
  decimals = 0,
  duration = 2,
  delay = 0,
  prefix = '',
  suffix = '',
  separator = '',
  decimal = '.',
  className = '',
}: CountUpProps) {
  const countUpRef = useRef<HTMLSpanElement>(null!)
  const hasStartedRef = useRef(false)
  
  const { start: startCountUp } = useCountUp({
    ref: countUpRef,
    start,
    end,
    decimals,
    duration,
    delay,
    prefix,
    suffix,
    separator,
    decimal,
    startOnMount: false,
  })

  useEffect(() => {
    const element = countUpRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasStartedRef.current) {
          hasStartedRef.current = true
          startCountUp()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [startCountUp])

  return <span ref={countUpRef} className={className} />
}
