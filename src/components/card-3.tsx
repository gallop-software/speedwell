import React from 'react'
import Link from 'next/link'
import { Heading } from './heading'
import { Image } from './image'

export interface CardLinkData {
  id: string
  image: string
  href: string
  alt: string
  width?: number
  height?: number
  /** Image size variant to use from metadata - defaults to 'large' */
  size?: 'small' | 'medium' | 'large' | 'full'
}

interface Card3Props {
  id: string
  image: string
  href: string
  alt: string
  width?: number
  height?: number
  /** Image size variant to use from metadata - defaults to 'large' */
  size?: 'small' | 'medium' | 'large' | 'full'
}

export function Card3({
  id,
  image,
  href,
  alt,
  width,
  height,
  size = 'large',
}: Card3Props) {
  return (
    <a
      key={id}
      href={href}
      className="group relative focus:outline-none p-10 border border-black aspect-square flex justify-center items-center hover:bg-body2/40"
      aria-label={alt}
    >
      {/* Card Container */}
      <div className="relative ">
        {/* Background Image */}
        <Image
          src={image}
          alt={alt}
          width={width}
          height={height}
          size={size}
          className="rounded-lg shadow-lg"
          rounded=""
        />
      </div>
    </a>
  )
}
