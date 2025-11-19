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

    // Warm, elegant interior design color palette (more visible)
    const colors = ['#C4B5A9', '#A8988A', '#7B6345', '#B9A898', '#988975']

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener('resize', resize)

    // Floating particles - like dust in elegant lighting
    interface Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
    }

    const particles: Particle[] = []
    const particleCount = 40

    const initParticles = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.6 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    }

    initParticles()

    // Draw architectural grid lines (like blueprint overlay)
    const drawArchitecturalGrid = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      ctx.strokeStyle = 'rgba(139, 115, 85, 0.25)'
      ctx.lineWidth = 1.5

      // Vertical lines with subtle animation
      const gridSpacing = 60
      for (let x = 0; x < width; x += gridSpacing) {
        const offset = Math.sin(time * 0.0005 + x * 0.01) * 3
        ctx.beginPath()
        ctx.moveTo(x + offset, 0)
        ctx.lineTo(x + offset, height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y < height; y += gridSpacing) {
        const offset = Math.cos(time * 0.0005 + y * 0.01) * 3
        ctx.beginPath()
        ctx.moveTo(0, y + offset)
        ctx.lineTo(width, y + offset)
        ctx.stroke()
      }
    }

    // Draw elegant flowing curves (like architectural arches)
    const drawFlowingArches = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      // Multiple arch layers
      for (let layer = 0; layer < 3; layer++) {
        ctx.beginPath()
        const yOffset = height * 0.2 + layer * 80
        const amplitude = 60 + layer * 20
        const frequency = 0.003

        for (let x = 0; x <= width; x += 5) {
          const y =
            yOffset +
            Math.sin(x * frequency + time * 0.0008 + layer * 0.5) * amplitude +
            Math.sin(x * frequency * 2 - time * 0.0005) * (amplitude * 0.3)

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.strokeStyle = colors[layer % colors.length] + '40'
        ctx.lineWidth = 3
        ctx.stroke()

        // Add subtle fill below curve
        ctx.lineTo(width, height)
        ctx.lineTo(0, height)
        ctx.closePath()
        ctx.fillStyle = colors[(layer + 1) % colors.length] + '15'
        ctx.fill()
      }
    }

    // Draw Art Deco inspired geometric patterns
    const drawGeometricPatterns = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      const centerX = width * 0.3
      const centerY = height * 0.4

      // Rotating geometric sunburst pattern
      const rays = 12
      for (let i = 0; i < rays; i++) {
        const angle = (i / rays) * Math.PI * 2 + time * 0.0002
        const length = 80 + Math.sin(time * 0.001 + i) * 20

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(
          centerX + Math.cos(angle) * length,
          centerY + Math.sin(angle) * length
        )

        ctx.strokeStyle = colors[i % colors.length] + '35'
        ctx.lineWidth = 2
        ctx.stroke()

        // Add small circle at end
        ctx.beginPath()
        ctx.arc(
          centerX + Math.cos(angle) * length,
          centerY + Math.sin(angle) * length,
          4,
          0,
          Math.PI * 2
        )
        ctx.fillStyle = colors[i % colors.length] + '50'
        ctx.fill()
      }

      // Concentric circles (like chandelier view from below)
      for (let ring = 1; ring <= 4; ring++) {
        ctx.beginPath()
        ctx.arc(centerX, centerY, ring * 25, 0, Math.PI * 2)
        ctx.strokeStyle = colors[ring % colors.length] + '30'
        ctx.lineWidth = 2
        ctx.stroke()
      }
    }

    // Draw floating particles
    const drawParticles = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      particles.forEach((particle) => {
        // Update position with gentle floating motion
        particle.x += particle.speedX + Math.sin(time * 0.001) * 0.2
        particle.y += particle.speedY + Math.cos(time * 0.0008) * 0.2

        // Wrap around edges
        if (particle.x < 0) particle.x = width
        if (particle.x > width) particle.x = 0
        if (particle.y < 0) particle.y = height
        if (particle.y > height) particle.y = 0

        // Draw particle with soft glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.shadowBlur = 4
        ctx.shadowColor = particle.color
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.globalAlpha = 1
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

      // Layer the elements
      drawArchitecturalGrid()
      drawFlowingArches()
      drawGeometricPatterns()
      drawParticles()

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
