'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function useCircleAnimation(id: string) {
  const { ref, inView } = useInView({
    threshold: 0.01,
  })

  useEffect(() => {
    const container = document.getElementById(id)
    if (!container) return

    if (inView) {
      container.classList.add('animate-spin-slow-reverse')
    } else {
      container.classList.remove('animate-spin-slow-reverse')
    }
  }, [id, inView])

  // Attach ref to the target element
  useEffect(() => {
    const container = document.getElementById(id)
    if (container && ref) {
      ;(ref as (node: Element | null) => void)(container)
    }
  }, [id, ref])
}
