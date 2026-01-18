import { clsx } from 'clsx'
import { Image } from './image'
import { Container } from './container'

interface CoverProps {
  imageSrc?: string
  imageAlt?: string
  imageClassName?: string
  children?: React.ReactNode
  overlayColor?: string
  backgroundColor?: string
  height?: string
  className?: string
  innerAlign?: 'wide' | 'none' | 'content'
  parallax?: boolean
}

export function Cover({
  imageSrc,
  imageAlt,
  imageClassName,
  children,
  overlayColor,
  backgroundColor,
  height,
  className,
  innerAlign,
  parallax = false,
}: CoverProps) {
  return (
    <div
      className={clsx(
        backgroundColor || 'bg-body2',
        className,
        'relative w-full overflow-hidden z-0',
        '[&>*>*>*:last-child]:mb-0',
        height || 'h-[500px] md:h-[600px] lg:h-[800px]'
      )}
    >
      {imageSrc && (
        <>
          {parallax ? (
            <>
              {/* Parallax background - only on lg+ */}
              <div
                className={clsx(
                  'absolute inset-0 w-full h-full bg-fixed bg-center bg-no-repeat bg-cover hidden lg:block',
                  imageClassName
                )}
                style={{
                  backgroundImage: `url(${imageSrc})`,
                }}
                role="img"
                aria-label={imageAlt || ''}
              />
              {/* Static image fallback - under lg */}
              <Image
                src={imageSrc}
                size="full"
                alt={imageAlt || ''}
                className={clsx(
                  'object-cover object-center absolute inset-0 w-full h-full lg:hidden',
                  imageClassName
                )}
              />
            </>
          ) : (
            <Image
              src={imageSrc}
              size="full"
              alt={imageAlt || ''}
              className={clsx(
                'object-cover object-center absolute inset-0 w-full h-full',
                imageClassName
              )}
            />
          )}
          <div
            className={clsx('absolute inset-0', overlayColor || 'bg-black/30')}
          ></div>
        </>
      )}
      <Container
        className={clsx(
          'relative flex flex-col items-center justify-center h-full w-full'
        )}
        align={innerAlign}
      >
        {children && children}
      </Container>
    </div>
  )
}
