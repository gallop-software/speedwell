'use client'

import { useEffect, useRef, useState } from 'react'

const colors = [
  'bg-pink-400',
  'bg-yellow-400',
  'bg-purple-400',
  'bg-teal-400',
  'bg-orange-400',
  'bg-rose-400',
  'bg-sky-400',
  'bg-lime-400',
  'bg-fuchsia-400',
  'bg-amber-400',
]

const shapes = [
  { width: 'w-2', height: 'h-2', rounded: 'rounded-full' },
  { width: 'w-2', height: 'h-3', rounded: 'rounded-sm' },
  { width: 'w-3', height: 'h-2', rounded: 'rounded-sm' },
  { width: 'w-3', height: 'h-3', rounded: 'rounded-sm' },
  { width: 'w-2', height: 'h-4', rounded: 'rounded-sm' },
  { width: 'w-4', height: 'h-2', rounded: 'rounded-sm' },
]

const rotations = [
  'rotate-0',
  'rotate-12',
  '-rotate-12',
  'rotate-45',
  '-rotate-45',
]

interface ConfettiPiece {
  id: number
  left: number
  top: number
  color: string
  shape: (typeof shapes)[0]
  rotation: string
  delay: number
  duration: number
}

function generateConfetti(count: number): ConfettiPiece[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 40, // Start in top 40% of container
    color: colors[Math.floor(Math.random() * colors.length)],
    shape: shapes[Math.floor(Math.random() * shapes.length)],
    rotation: rotations[Math.floor(Math.random() * rotations.length)],
    delay: Math.random() * 0.5, // Stagger the start
    duration: 2 + Math.random() * 2, // 2-4 seconds to fall
  }))
}

export default function BackgroundConfetti() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)
  const [confetti] = useState(() => generateConfetti(80))

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when fully in view (threshold 1.0)
        if (entry.isIntersecting && !hasPlayed) {
          setIsVisible(true)
          setHasPlayed(true)
        }
      },
      { threshold: 0.8 } // 80% visible triggers animation
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [hasPlayed])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-40 pointer-events-none overflow-hidden"
    >
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className={`absolute ${piece.shape.width} ${piece.shape.height} ${piece.color} ${piece.shape.rounded} ${piece.rotation} ${
            isVisible ? 'animate-confetti-fall' : 'opacity-0'
          }`}
          style={{
            left: `${piece.left}%`,
            top: `${piece.top}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
