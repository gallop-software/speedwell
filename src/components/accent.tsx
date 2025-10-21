import clsx from 'clsx'
import React from 'react'

interface AccentProps {
  children: React.ReactNode
  className?: string
  /** Size preset for default text sizing */
  size?: 'small' | 'medium' | 'large'
  /** Font size override */
  fontSize?: string
  /** Text color override */
  color?: string
  /** Font family override */
  fontFamily?: string
  /** Margin override */
  margin?: string
  /** Text alignment (Tailwind CSS classes) */
  textAlign?: string
}

export function Accent({
  children,
  className = '',
  size = 'large',
  fontSize = '',
  color = '',
  fontFamily = '',
  margin = '',
  textAlign = '',
}: AccentProps) {
  // Define font size presets
  const sizeClasses = {
    small: 'text-4xl sm:text-4xl lg:text-5xl xl:text-6xl',
    medium: 'text-5xl sm:text-5xl lg:text-6xl xl:text-7xl',
    large: 'text-6xl sm:text-7xl lg:text-8xl xl:text-9xl',
  }

  // Use user-defined values if provided, otherwise use defaults
  const finalFontSize = fontSize || sizeClasses[size]
  const finalColor = color || 'text-accent5'
  const finalFontFamily = fontFamily || 'font-accent'
  const finalMargin = margin || 'mb-0'

  // Add subtle drop shadow for white text to improve readability
  const textShadow =
    finalColor === 'text-white' ? 'text-shadow-sm text-shadow-contrast/10' : ''

  return (
    <span
      className={clsx(
        'inline-block font-normal',
        // fixes issue with safari cutting off text
        'px-2 -ml-2',
        // Apply final styles (user-defined or defaults)
        finalFontSize,
        finalColor,
        finalFontFamily,
        finalMargin,
        textAlign,
        textShadow,
        // Custom className can override or extend default styles
        className
      )}
    >
      {children}
    </span>
  )
}
