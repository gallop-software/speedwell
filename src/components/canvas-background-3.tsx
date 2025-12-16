'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

interface CanvasBackground3Props {
  className?: string
}

export function CanvasBackground3({ className = '' }: CanvasBackground3Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !inView) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener('resize', resize)

    // Pulsating white balls in funnel shape
    interface Ball {
      x: number
      y: number
      baseSize: number
      size: number
      sizePhase: number
      speedX: number
      speedY: number
      opacity: number
      startY: number // Track starting Y position for funnel calculation
    }

    const balls: Ball[] = []
    const ballCount = 40

    const initBalls = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      for (let i = 0; i < ballCount; i++) {
        const startY = Math.random() * height
        const baseSize = Math.random() * 8 + 4 // Smaller balls (4-12px)

        balls.push({
          x: Math.random() * (width * 0.3), // Start from left side (30% of width)
          y: startY,
          baseSize: baseSize,
          size: baseSize,
          sizePhase: Math.random() * Math.PI * 2,
          speedX: Math.random() * 0.15 + 0.08, // Slower right movement
          speedY: -(Math.random() * 0.15 + 0.08), // Slower upward movement
          opacity: Math.random() * 0.4 + 0.3,
          startY: startY,
        })
      }
    }

    initBalls()

    const drawBalls = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      balls.forEach((ball) => {
        // Update position - moving towards top right
        ball.x += ball.speedX
        ball.y += ball.speedY

        // Update size (pulsating animation) - slower
        ball.sizePhase += 0.003
        ball.size =
          ball.baseSize + Math.sin(ball.sizePhase) * (ball.baseSize * 0.4)

        // Calculate funnel spread: balls spread apart as they move up
        // The higher they go (lower y value), the more they spread horizontally
        const progressUp = (ball.startY - ball.y) / height
        const spreadFactor = progressUp * 2 // Increase spread as it goes up
        ball.x += spreadFactor * 0.5

        // Calculate fade out before reaching edges
        const fadeZone = 100 // Start fading 100px before edges
        let fadeOpacity = ball.opacity

        // Fade when approaching right edge
        if (ball.x > width - fadeZone) {
          fadeOpacity *= Math.max(0, (width - ball.x) / fadeZone)
        }
        // Fade when approaching top edge
        if (ball.y < fadeZone) {
          fadeOpacity *= Math.max(0, ball.y / fadeZone)
        }

        // Wrap around edges - reset from bottom left when faded out
        if (ball.x > width || ball.y < 0) {
          ball.x = Math.random() * (width * 0.2) - 50 // Reset to left side
          ball.y = height + 50 // Reset to bottom
          ball.startY = ball.y
        }

        // Only draw if opacity is visible
        if (fadeOpacity > 0.01) {
          // Draw hexagon with soft glow
          ctx.beginPath()

          // Draw hexagon (6 sides)
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i // 60 degrees per side
            const x = ball.x + ball.size * Math.cos(angle)
            const y = ball.y + ball.size * Math.sin(angle)

            if (i === 0) {
              ctx.moveTo(x, y)
            } else {
              ctx.lineTo(x, y)
            }
          }
          ctx.closePath()

          // White fill with fading opacity
          ctx.fillStyle = `rgba(255, 255, 255, ${fadeOpacity})`
          ctx.globalAlpha = fadeOpacity
          ctx.shadowBlur = 10
          ctx.shadowColor = 'rgba(255, 255, 255, 0.6)'
          ctx.fill()

          ctx.shadowBlur = 0
          ctx.globalAlpha = 1
        }
      })
    }

    const animate = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Draw the pulsating balls
      drawBalls()

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
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
