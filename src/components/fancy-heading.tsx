import React from 'react'
import { Heading } from './heading'
import { Accent } from './accent'

interface FancyHeadingProps {
  text: string
  accent: string
  className?: string
  id?: string
  as?: 'h1' | 'h2'
}

// Helper function to generate a valid ID from text
function generateId(text: string, accent: string): string {
  const combined = `${text} ${accent}`
  const processed = combined
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, '') // Remove leading/trailing hyphens

  return processed || 'heading' // Fallback if empty
}

export function FancyHeading({
  text,
  accent,
  className,
  id,
  as = 'h2',
}: FancyHeadingProps) {
  const generatedId = id || generateId(text, accent)

  return (
    <div className={`text-center mb-16 ${className || ''}`}>
      <Heading
        as={as}
        styleAs="h2"
        margin="mb-0"
        id={generatedId}
      >
        <span className="lg:pr-[25%] block">{text}</span>{' '}
        <Accent
          className="lg:pl-[15%] lg:-mt-6"
          color="text-black"
          fontSize="text-6xl sm:text-7xl lg:text-7xl"
        >
          {accent}
        </Accent>
      </Heading>
    </div>
  )
}
