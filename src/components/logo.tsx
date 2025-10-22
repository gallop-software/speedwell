import { Image } from '@/components'

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export function Logo({ className = '', width, height }: LogoProps) {
  return (
    <Image
      rounded="rounded-none"
      src="/images/logo.png"
      size="medium"
      alt="Logo"
      {...(width && { width })}
      {...(height && { height })}
      className={className}
    />
  )
}

// Keep Mark component for backward compatibility if needed elsewhere
export function Mark({
  className,
  width,
  height,
}: {
  className?: string
  width?: number
  height?: number
}) {
  return (
    <Image
      src="/images/logo.png"
      size="medium"
      alt="Logo Mark"
      {...(width && { width })}
      {...(height && { height })}
      className={className}
    />
  )
}
