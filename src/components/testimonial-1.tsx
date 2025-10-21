import React from 'react'
import { Quote } from './quote'
import { Image } from './image'

interface Testimonial1Props {
  /** Image source URL for the testimonial author */
  img: string
  /** Name or citation for the testimonial author */
  cite: string
  /** Testimonial content - should be Paragraph components */
  children: React.ReactNode
}

export function Testimonial1({ img, cite, children }: Testimonial1Props) {
  return (
    <div className="swiper-slide flex flex-col justify-center items-center">
      <div className="flex justify-center w-full [&>*]:max-w-3xl [&>*]:xl:max-w-4xl">
        {children}
      </div>

      <div className="flex justify-center items-center gap-4">
        <Image
          src={img}
          alt={cite}
          wrap={false}
          size="small"
          className="h-32 w-32 object-cover object-center"
          rounded="rounded-full"
        />
        <Quote margin="m-0">{cite}</Quote>
      </div>
    </div>
  )
}
