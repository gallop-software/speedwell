'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface CircleAnimationInitProps {
  targetId: string
}

const CircleAnimationInit = ({ targetId }: CircleAnimationInitProps) => {
  const { ref, inView } = useInView({
    threshold: 0.01,
  })

  useEffect(() => {
    const container = document.getElementById(targetId)
    if (!container) return

    if (inView) {
      container.classList.add('animate-spin-slow-reverse')
    } else {
      container.classList.remove('animate-spin-slow-reverse')
    }
  }, [targetId, inView])

  // Attach ref to the target element
  useEffect(() => {
    const container = document.getElementById(targetId)
    if (container && ref) {
      ;(ref as (node: Element | null) => void)(container)
    }
  }, [targetId, ref])

  return null
}

export default CircleAnimationInit
