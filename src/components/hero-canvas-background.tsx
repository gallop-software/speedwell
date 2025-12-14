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

    const draw = () => {
      const dpr = window.devicePixelRatio || 1
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      canvas.width = Math.max(1, Math.round(width * dpr))
      canvas.height = Math.max(1, Math.round(height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      ctx.strokeStyle = '#5A4530'
      ctx.lineWidth = 1
      ctx.lineCap = 'round'
      ctx.globalAlpha = 0.4

      // First set: horizontal lines full width, covering top 50%, rotated 60 degrees, moved left 50%
      ctx.save()
      ctx.translate(width * 0.2, height / 2) // Move rotation center left
      ctx.rotate((60 * Math.PI) / 180)
      ctx.translate(-width / 2, -height / 2)

      const spacing = 15
      const topHalf = height * 0.5
      const lineCount = Math.ceil(topHalf / spacing)

      for (let i = 0; i < lineCount; i++) {
        const y = i * spacing

        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      ctx.restore()

      // Second set: horizontal lines full height (0 to 100% on y axis), moved down and right 5%
      ctx.save()
      ctx.translate(width * 0.05, height * 0.05)

      const lineCount2 = Math.ceil(height / spacing)

      for (let i = 0; i < lineCount2; i++) {
        const y = i * spacing

        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      ctx.restore()

      // Third set: horizontal lines from 0 to 33% on y axis, rotated -76 degrees, moved back 40% and down 21%
      ctx.save()
      ctx.globalAlpha = 0.8
      ctx.translate(width * 0.8, height * 0.54) // Move rotation center left and down
      ctx.rotate((-60 * Math.PI) / 180)
      ctx.translate(-width / 2, -height / 2)

      const topThird = height * 0.33
      const lineCount3 = Math.ceil(topThird / spacing)

      for (let i = 0; i < lineCount3; i++) {
        const y = i * spacing

        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      ctx.restore()

      ctx.globalAlpha = 1
    }

    draw()
    window.addEventListener('resize', draw)

    return () => {
      window.removeEventListener('resize', draw)
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
