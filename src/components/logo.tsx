import { Image } from '@/components/image'

// The logo files and their size, from _data/_studio.json
const LOGO = {
  src: 'https://speedwell-cdn.gallop.software/images/logo-md.png',
  darkSrc: 'https://speedwell-cdn.gallop.software/images/logo-white-md.png',
  width: 700,
  height: 414,
}

interface LogoProps {
  className?: string
  /** Rendered width; the height follows the logo's shape */
  width?: number
  /** Rendered height; the width follows the logo's shape */
  height?: number
  dark?: boolean
}

export function Logo({
  className = '',
  width,
  height,
  dark = false,
}: LogoProps) {
  const ratio = LOGO.width / LOGO.height
  const w = width ?? (height ? Math.round(height * ratio) : LOGO.width)
  const h = height ?? Math.round(w / ratio)

  return (
    <Image
      rounded="rounded-none"
      src={dark ? LOGO.darkSrc : LOGO.src}
      width={w}
      height={h}
      alt="Logo"
      className={className}
    />
  )
}
