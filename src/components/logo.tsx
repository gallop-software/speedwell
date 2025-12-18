import { Image } from '@/components'

interface LogoProps {
  className?: string
  width?: number
  height?: number
  dark?: boolean
}

export function Logo({
  className = '',
  width,
  height,
  dark = false,
}: LogoProps) {
  return (
    <Image
      rounded="rounded-none"
      src={dark ? '/images/logo-white.png' : '/images/logo.png'}
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
