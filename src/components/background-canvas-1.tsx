'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

interface BackgroundCanvas1Props {
  className?: string
}

// Falling hexagons like snow
interface Hexagon {
  x: number
  y: number
  baseSize: number
  size: number
  sizePhase: number
  speedY: number
  speedX: number
  rotation: number
  rotationSpeed: number
  opacity: number
  swayPhase: number
  swayAmount: number
}

export function BackgroundCanvas1({ className = '' }: BackgroundCanvas1Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const hexagonsRef = useRef<Hexagon[]>([])
  const animationFrameIdRef = useRef<number | undefined>(undefined)
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener('resize', resize)

    const hexagonCount = 50

    // Initialize hexagons only once
    if (hexagonsRef.current.length === 0) {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      for (let i = 0; i < hexagonCount; i++) {
        const baseSize = Math.random() * 10 + 5 // 5-15px hexagons

        hexagonsRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height, // Spread throughout viewport
          baseSize: baseSize,
          size: baseSize,
          sizePhase: Math.random() * Math.PI * 2,
          speedY: Math.random() * 0.5 + 0.3, // Falling speed (0.3-0.8)
          speedX: Math.random() * 0.2 - 0.1, // Slight horizontal drift (-0.1 to 0.1)
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02, // Slow rotation
          opacity: Math.random() * 0.4 + 0.2, // 0.2-0.6 opacity
          swayPhase: Math.random() * Math.PI * 2,
          swayAmount: Math.random() * 30 + 20, // Sway distance (20-50px)
        })
      }
    }

    const drawHexagons = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      hexagonsRef.current.forEach((hex) => {
        // Only update position when in view
        if (inView) {
          // Update position
          hex.y += hex.speedY
          hex.swayPhase += 0.01

          // Add swaying motion (side to side)
          const sway = Math.sin(hex.swayPhase) * 0.3
          hex.x += sway + hex.speedX

          // Update rotation
          hex.rotation += hex.rotationSpeed

          // Update size (subtle pulsating)
          hex.sizePhase += 0.005
          hex.size =
            hex.baseSize + Math.sin(hex.sizePhase) * (hex.baseSize * 0.2)

          // Wrap around when falling off bottom
          if (hex.y > height + 50) {
            hex.y = -50
            hex.x = Math.random() * width
          }

          // Wrap around horizontal edges
          if (hex.x < -50) {
            hex.x = width + 50
          } else if (hex.x > width + 50) {
            hex.x = -50
          }
        }

        // Always draw hexagons, even when paused
        // Save context for rotation
        ctx.save()
        ctx.translate(hex.x, hex.y)
        ctx.rotate(hex.rotation)

        // Draw hexagon
        ctx.beginPath()
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i // 60 degrees per side
          const x = hex.size * Math.cos(angle)
          const y = hex.size * Math.sin(angle)

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.closePath()

        // White fill with opacity
        ctx.fillStyle = `rgba(255, 255, 255, ${hex.opacity})`
        ctx.shadowBlur = 8
        ctx.shadowColor = 'rgba(255, 255, 255, 0.5)'
        ctx.fill()

        ctx.shadowBlur = 0
        ctx.restore()
      })
    }

    const animate = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Draw the falling hexagons
      drawHexagons()

      animationFrameIdRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current)
      }
    }
  }, [inView])

  return (
    <canvas
      ref={(node) => {
        canvasRef.current = node
        inViewRef(node)
      }}
      className={`pointer-events-none ${className}`}
    />
  )
}
