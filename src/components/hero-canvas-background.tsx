'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

interface HeroCanvasBackgroundProps {
  className?: string
}

export function HeroCanvasBackground({
  className = '',
}: HeroCanvasBackgroundProps) {
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
    let time = 0

    // Three complementary shades for the wave gradients
    // Based on the beige/cream background, using warmer earth tones
    const waveColors = [
      { start: '#B8A490', end: '#A08876' }, // Medium warm taupe
      { start: '#C8B5A0', end: '#B09D88' }, // Light warm beige
      { start: '#A89580', end: '#907D68' }, // Darker warm brown
    ]

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener('resize', resize)

    // Wave configuration - concentrated in top left area
    interface Wave {
      amplitude: number
      frequency: number
      speed: number
      offset: number
      gradientColors: { start: string; end: string }
      opacity: number
    }

    const waves: Wave[] = [
      {
        amplitude: 60,
        frequency: 0.008,
        speed: 0.0008,
        offset: 0,
        gradientColors: waveColors[0],
        opacity: 0.4,
      },
      {
        amplitude: 80,
        frequency: 0.006,
        speed: 0.001,
        offset: Math.PI / 2,
        gradientColors: waveColors[1],
        opacity: 0.35,
      },
      {
        amplitude: 100,
        frequency: 0.007,
        speed: 0.0009,
        offset: Math.PI,
        gradientColors: waveColors[2],
        opacity: 0.45,
      },
    ]

    // Draw animated wave lines focused in top left corner
    const drawWaves = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      waves.forEach((wave, index) => {
        ctx.save()

        // Create gradient radiating from top left
        const gradient = ctx.createRadialGradient(
          0,
          0,
          0,
          0,
          0,
          Math.max(width, height) * 0.6
        )
        gradient.addColorStop(0, wave.gradientColors.start)
        gradient.addColorStop(0.6, wave.gradientColors.end)
        gradient.addColorStop(1, wave.gradientColors.end + '00')

        ctx.globalAlpha = wave.opacity

        // Draw flowing wave originating from top left
        ctx.beginPath()

        // Start from top left corner
        ctx.moveTo(0, 0)

        // Wave flows along the top edge
        for (let x = 0; x <= width * 0.5; x += 3) {
          const progress = x / (width * 0.5)
          const y =
            Math.sin(x * wave.frequency + time * wave.speed + wave.offset) *
              wave.amplitude *
              (1 - progress * 0.5) +
            Math.sin(x * wave.frequency * 1.5 - time * wave.speed * 0.6) *
              (wave.amplitude * 0.4) *
              (1 - progress * 0.5) +
            index * 40

          ctx.lineTo(x, Math.max(0, y))
        }

        // Wave flows down the left edge
        for (let y = 0; y <= height * 0.5; y += 3) {
          const progress = y / (height * 0.5)
          const x =
            Math.sin(
              y * wave.frequency + time * wave.speed + wave.offset + Math.PI / 2
            ) *
              wave.amplitude *
              (1 - progress * 0.5) +
            Math.sin(y * wave.frequency * 1.5 - time * wave.speed * 0.6) *
              (wave.amplitude * 0.4) *
              (1 - progress * 0.5) +
            index * 40

          ctx.lineTo(Math.max(0, x), y)
        }

        // Close path back to origin
        ctx.lineTo(0, height * 0.5)
        ctx.lineTo(0, 0)
        ctx.closePath()

        ctx.fillStyle = gradient
        ctx.fill()

        // Draw stroke along top edge for definition
        ctx.beginPath()
        for (let x = 0; x <= width * 0.5; x += 3) {
          const progress = x / (width * 0.5)
          const y =
            Math.sin(x * wave.frequency + time * wave.speed + wave.offset) *
              wave.amplitude *
              (1 - progress * 0.5) +
            Math.sin(x * wave.frequency * 1.5 - time * wave.speed * 0.6) *
              (wave.amplitude * 0.4) *
              (1 - progress * 0.5) +
            index * 40

          if (x === 0) {
            ctx.moveTo(x, Math.max(0, y))
          } else {
            ctx.lineTo(x, Math.max(0, y))
          }
        }

        ctx.strokeStyle = gradient
        ctx.lineWidth = 3
        ctx.globalAlpha = wave.opacity * 0.7
        ctx.stroke()

        // Draw stroke along left edge for definition
        ctx.beginPath()
        for (let y = 0; y <= height * 0.5; y += 3) {
          const progress = y / (height * 0.5)
          const x =
            Math.sin(
              y * wave.frequency + time * wave.speed + wave.offset + Math.PI / 2
            ) *
              wave.amplitude *
              (1 - progress * 0.5) +
            Math.sin(y * wave.frequency * 1.5 - time * wave.speed * 0.6) *
              (wave.amplitude * 0.4) *
              (1 - progress * 0.5) +
            index * 40

          if (y === 0) {
            ctx.moveTo(Math.max(0, x), y)
          } else {
            ctx.lineTo(Math.max(0, x), y)
          }
        }

        ctx.strokeStyle = gradient
        ctx.lineWidth = 3
        ctx.globalAlpha = wave.opacity * 0.7
        ctx.stroke()

        ctx.restore()
      })
    }

    const animate = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      // Soft gradient background (warm beige/cream tones)
      ctx.clearRect(0, 0, width, height)

      const bgGradient = ctx.createLinearGradient(0, 0, width, height)
      bgGradient.addColorStop(0, '#D5C0B1')
      bgGradient.addColorStop(0.5, '#CBC3B8')
      bgGradient.addColorStop(1, '#C0B5A7')
      ctx.fillStyle = bgGradient
      ctx.globalAlpha = 0.8
      ctx.fillRect(0, 0, width, height)
      ctx.globalAlpha = 1

      // Draw the animated waves
      drawWaves()

      time += 1
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
