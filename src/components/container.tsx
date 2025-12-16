import { clsx } from 'clsx'

export function Container({
  className,
  children,
  align = 'wide',
  maxWidth,
  padding,
}: {
  className?: string
  children: React.ReactNode
  align?: 'wide' | 'none' | 'content'
  maxWidth?: string
  padding?: string
}) {
  const alignClasses = {
    wide: 'max-w-2xl lg:max-w-7xl',
    content: 'max-w-4xl',
    none: '',
  }

  // Use maxWidth prop if provided, otherwise use alignClasses
  const finalMaxWidth = maxWidth || alignClasses[align]

  // Use padding prop if provided, otherwise use default padding
  const finalPadding = padding || 'px-6 lg:px-8'

  return (
    <div className={clsx(className, finalPadding)}>
      <div className={clsx('mx-auto', finalMaxWidth)}>{children}</div>
    </div>
  )
}
