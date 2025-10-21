import { clsx } from 'clsx'

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-linear-115 from-[var(--color-body2)] from-28% via-[var(--color-accent3)] via-70% to-[var(--color-accent3-dark)] sm:bg-linear-145'
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -top-44 -right-60 h-70 w-xl transform-gpu md:right-0',
          'bg-linear-115 from-[var(--color-body2)] from-28% via-[var(--color-accent3)] via-70% to-[var(--color-accent3-dark)]',
          'rotate-[-10deg] rounded-full blur-3xl'
        )}
      />
    </div>
  )
}
