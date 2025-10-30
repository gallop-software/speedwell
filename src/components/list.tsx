import { clsx } from 'clsx'

export interface ListProps extends React.ComponentPropsWithoutRef<'ul'> {
  /** Variant of the list - controls default styling */
  variant?: 'default' | 'bulleted' | 'numbered' | 'unstyled'
  /** Custom spacing between list items */
  spacing?: 'tight' | 'normal' | 'loose'
  /** Gap override - provide full Tailwind classes like 'gap-4' or 'gap-x-8 gap-y-4' */
  gap?: string
  /** Font size override */
  fontSize?: string
  /** Text color override */
  color?: string
  /** Font family override */
  fontFamily?: string
  /** Font weight override */
  fontWeight?: string
  /** Font style override */
  fontStyle?: string
  /** Line height override */
  lineHeight?: string
  /** Text alignment override */
  textAlign?: string
  /** Margin override */
  margin?: string
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
  gap = '',
  fontSize = '',
  color = '',
  fontFamily = '',
  fontWeight = '',
  fontStyle = '',
  lineHeight = '',
  textAlign = '',
  margin = '',
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

  // Use user-defined values if provided, otherwise use defaults
  const finalFontSize = fontSize || 'text-base'
  const finalColor = color || 'text-gray-950'
  const finalFontFamily = fontFamily || '' // no default font family
  const finalFontWeight = fontWeight || 'font-medium' // default font weight
  const finalFontStyle = fontStyle || '' // no default font style
  const finalLineHeight = lineHeight || '' // no default line height
  const finalTextAlign = textAlign || '' // no default text alignment
  const finalMargin = margin || 'mb-8'
  const finalGap = gap || 'gap-y-2'

  const Component = ordered ? 'ol' : 'ul'

  return (
    <Component
      className={clsx(
        'content-wrapper [&>li]:mb-0 grid',
        ordered ? 'list-decimal' : variantClasses[variant],
        spacingClasses[spacing],
        variant !== 'unstyled' && '[&>li]:ml-6',
        finalFontSize,
        finalColor,
        finalFontFamily,
        finalFontWeight,
        finalFontStyle,
        finalLineHeight,
        finalTextAlign,
        finalMargin,
        finalGap,
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
      className={clsx('[&>ul]:mt-2', className)}
      {...props}
    >
      {children}
    </li>
  )
}
