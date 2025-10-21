import { clsx } from 'clsx'

export interface ListProps extends React.ComponentPropsWithoutRef<'ul'> {
  /** Variant of the list - controls default styling */
  variant?: 'default' | 'bulleted' | 'numbered' | 'unstyled'
  /** Custom spacing between list items */
  spacing?: 'tight' | 'normal' | 'loose'
  /** Additional CSS classes */
  className?: string
  /** Whether to render as ordered list (ol) or unordered list (ul) */
  ordered?: boolean
}

export interface LiProps extends React.ComponentPropsWithoutRef<'li'> {
  /** Additional CSS classes */
  className?: string
}

export function List({
  className = '',
  variant = 'default',
  spacing = 'normal',
  ordered = false,
  children,
  ...props
}: ListProps) {
  const variantClasses = {
    default: 'list-disc',
    bulleted: 'list-disc',
    numbered: 'list-decimal',
    unstyled: 'list-none',
  }

  const spacingClasses = {
    tight: 'space-y-1',
    normal: 'space-y-2',
    loose: 'space-y-4',
  }

  const Component = ordered ? 'ol' : 'ul'

  return (
    <Component
      className={clsx(
        'content-wrapper text-lg/normal mb-8 font-medium text-gray-950',
        ordered ? 'list-decimal' : variantClasses[variant],
        spacingClasses[spacing],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export function Li({ className = '', children, ...props }: LiProps) {
  return (
    <li
      className={clsx(
        'text-lg/normal font-medium text-gray-950 ml-6 [&>ul]:mt-2',
        className
      )}
      {...props}
    >
      {children}
    </li>
  )
}
