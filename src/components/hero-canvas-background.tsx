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

    // Earth tone color palette for geometric shapes
    const colors = [
      '#8B7355', // Warm brown
      '#A0826D', // Tan
      '#6B5D4F', // Dark taupe
      '#C19A6B', // Camel
      '#987554', // Wood brown
      '#8C7853', // Khaki
      '#B5A642', // Olive
      '#7D6E5D', // Stone gray
      '#96836E', // Mushroom
      '#9C8F7F', // Greige
    ]

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener('resize', resize)

    // Geometric shapes floating towards top left
    interface GeometricShape {
      x: number
      y: number
      size: number
      baseSize: number
      sizePhase: number
      speedX: number
      speedY: number
      rotation: number
      rotationSpeed: number
      opacity: number
      color: string
      type: 'square' | 'circle' | 'triangle' | 'hexagon' | 'diamond'
    }

    const shapes: GeometricShape[] = []
    const shapeCount = 25

    const initShapes = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      const types: GeometricShape['type'][] = [
        'square',
        'circle',
        'triangle',
        'hexagon',
        'diamond',
      ]

      for (let i = 0; i < shapeCount; i++) {
        const baseSize = Math.random() * 40 + 20
        shapes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: baseSize,
          baseSize: baseSize,
          sizePhase: Math.random() * Math.PI * 2,
          speedX: -(Math.random() * 0.2 + 0.1), // Slower left movement
          speedY: -(Math.random() * 0.2 + 0.1), // Slower upward movement
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          opacity: Math.random() * 0.4 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          type: types[Math.floor(Math.random() * types.length)],
        })
      }
    }

    initShapes()

    // Draw architectural grid lines (like blueprint overlay)
    const drawArchitecturalGrid = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      ctx.strokeStyle = 'rgba(139, 115, 85, 0.4)'
      ctx.lineWidth = 1.5

      // Vertical lines with subtle animation - start from gridSpacing to avoid edge line
      const gridSpacing = 60
      for (let x = gridSpacing; x < width; x += gridSpacing) {
        const offset = Math.sin(time * 0.0005 + x * 0.01) * 3
        ctx.beginPath()
        ctx.moveTo(x + offset, 0)
        ctx.lineTo(x + offset, height)
        ctx.stroke()
      }

      // Horizontal lines - start from gridSpacing to avoid edge line
      for (let y = gridSpacing; y < height; y += gridSpacing) {
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

    // Draw and animate geometric shapes
    const drawGeometricShapes = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      shapes.forEach((shape) => {
        // Update position - moving towards top left
        shape.x += shape.speedX
        shape.y += shape.speedY

        // Update size (breathing animation) - slower
        shape.sizePhase += 0.008
        shape.size =
          shape.baseSize + Math.sin(shape.sizePhase) * (shape.baseSize * 0.3)

        // Update rotation
        shape.rotation += shape.rotationSpeed

        // Wrap around edges - reappear from bottom right when going off top left
        if (shape.x < -100) shape.x = width + 100
        if (shape.y < -100) shape.y = height + 100

        ctx.save()
        ctx.translate(shape.x, shape.y)
        ctx.rotate(shape.rotation)
        ctx.globalAlpha = shape.opacity
        ctx.fillStyle = shape.color
        ctx.strokeStyle = shape.color
        ctx.lineWidth = 2

        // Draw different geometric shapes
        ctx.beginPath()
        switch (shape.type) {
          case 'square':
            ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
            break
          case 'circle':
            ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2)
            break
          case 'triangle':
            ctx.moveTo(0, -shape.size / 2)
            ctx.lineTo(shape.size / 2, shape.size / 2)
            ctx.lineTo(-shape.size / 2, shape.size / 2)
            ctx.closePath()
            break
          case 'hexagon':
            for (let i = 0; i < 6; i++) {
              const angle = (i / 6) * Math.PI * 2
              const x = (Math.cos(angle) * shape.size) / 2
              const y = (Math.sin(angle) * shape.size) / 2
              if (i === 0) ctx.moveTo(x, y)
              else ctx.lineTo(x, y)
            }
            ctx.closePath()
            break
          case 'diamond':
            ctx.moveTo(0, -shape.size / 2)
            ctx.lineTo(shape.size / 3, 0)
            ctx.lineTo(0, shape.size / 2)
            ctx.lineTo(-shape.size / 3, 0)
            ctx.closePath()
            break
        }

        // Draw with subtle fill and stroke
        ctx.fill()
        ctx.globalAlpha = shape.opacity * 0.6
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

      // Layer the elements
      drawArchitecturalGrid()
      drawFlowingArches()
      drawGeometricPatterns()
      drawGeometricShapes()

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
