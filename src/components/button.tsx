import { Paragraph } from './paragraph'
import { Button as HeadlessButton } from '@headlessui/react'
import { clsx } from 'clsx'
import { Icon } from '@iconify/react'
import { Link } from './link'

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center',
    'rounded-full border border-transparent bg-gray-950 shadow-md',
    'text-white',
    'disabled:bg-gray-950 disabled:opacity-40 hover:bg-gray-800'
  ),
  secondary: clsx(
    'relative inline-flex items-center justify-center',
    'rounded-full border border-transparent bg-white/15 shadow-md ring-1 ring-[#D15052]/15',
    'after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d]',
    'text-gray-950',
    'disabled:bg-white/15 disabled:opacity-40 hover:bg-white/20'
  ),
  outline: clsx(
    'inline-flex items-center justify-center',
    'rounded-full border border-transparent shadow-sm ring-2 ring-gray-950',
    'text-gray-950',
    'disabled:bg-transparent disabled:opacity-40 hover:bg-gray-950/5'
  ),
}

const sizes = {
  default: clsx('px-6 py-[calc(--spacing(2)-1px)]', 'text-base font-medium'),
  medium: clsx(
    'px-6 lg:px-8 py-[calc(--spacing(2)-1px)] lg:py-[calc(--spacing(3)-1px)]',
    'text-lg font-medium'
  ),
  large: clsx(
    'px-8 lg:px-10 py-[calc(--spacing(3)-1px)] lg:py-[calc(--spacing(4)-1px)]',
    'text-xl font-medium'
  ),
}

type ButtonProps = {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  icon?: string
  iconPlacement?: 'before' | 'after'
  iconSize?: string
  wrap?: boolean
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<typeof HeadlessButton> & {
      href?: undefined
    })
)

export function Button({
  variant = 'primary',
  size = 'default',
  className,
  icon,
  iconPlacement = 'before',
  iconSize = 'w-5 h-5',
  wrap = false,
  children,
  ...props
}: ButtonProps) {
  className = clsx(className, variants[variant], sizes[size])

  const iconElement = icon ? (
    <Icon
      icon={icon}
      className={clsx(
        iconSize,
        iconPlacement === 'before' && children ? 'mr-2' : '',
        iconPlacement === 'after' && children ? 'ml-2' : ''
      )}
    />
  ) : null

  const content = (
    <>
      {iconPlacement === 'before' && iconElement}
      {children}
      {iconPlacement === 'after' && iconElement}
    </>
  )

  const buttonElement =
    typeof props.href === 'undefined' ? (
      <HeadlessButton
        {...props}
        className={clsx('cursor-pointer', className)}
      >
        {content}
      </HeadlessButton>
    ) : (
      <Link
        {...props}
        className={clsx('cursor-pointer', className)}
      >
        {content}
      </Link>
    )

  if (wrap) {
    return <Paragraph>{buttonElement}</Paragraph>
  }

  return buttonElement
}
