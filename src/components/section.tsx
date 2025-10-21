import React from 'react'
import { clsx } from 'clsx'
import { Container } from './container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  innerAlign?: 'wide' | 'content' | 'none'
  imageSrc?: string
  imageAlt?: string
  imageClassName?: string
  overlayColor?: string
  backgroundColor?: string
}

export function Section({
  children,
  className,
  innerAlign,
  imageSrc,
  imageAlt,
  imageClassName,
  overlayColor,
  backgroundColor,
}: SectionProps) {
  return (
    <section className={clsx('relative [&>*>*>*:last-child]:mb-0', className)}>
      {imageSrc && (
        <>
          <img
            src={imageSrc}
            alt={imageAlt || ''}
            className={clsx(
              'object-cover object-center absolute inset-0 w-full h-full -z-[2]',
              imageClassName
            )}
          />
          <div
            className={clsx(
              'absolute inset-0 -z-[1]',
              overlayColor || 'bg-black/30'
            )}
          ></div>
        </>
      )}
      <Container {...(innerAlign && { align: innerAlign })}>
        {children}
      </Container>
    </section>
  )
}
