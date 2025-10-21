import { clsx } from 'clsx'

export function Container({
  className,
  children,
  align = 'wide',
  maxWidth,
}: {
  className?: string
  children: React.ReactNode
  align?: 'wide' | 'none' | 'content'
  maxWidth?: string
}) {
  const alignClasses = {
    wide: 'max-w-2xl lg:max-w-7xl',
    content: 'max-w-4xl',
    none: '',
  }

  // Use maxWidth prop if provided, otherwise use alignClasses
  const finalMaxWidth = maxWidth || alignClasses[align]

  return (
    <div className={clsx(className, 'px-6 lg:px-8')}>
      <div className={clsx('mx-auto', finalMaxWidth)}>{children}</div>
    </div>
  )
}
