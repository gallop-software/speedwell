import { clsx } from 'clsx'
import { Image } from '@/components/image'

const logos = [
  { alt: 'Next.js', src: '/images/nextjs.png', href: 'https://nextjs.org' },
  {
    alt: 'Tailwind CSS',
    src: '/images/tailwindcss.png',
    href: 'https://tailwindcss.com',
  },
  { alt: 'Vercel', src: '/images/vercel.png', href: 'https://vercel.com' },
  {
    alt: 'Visual Studio Code',
    src: '/images/vscode.png',
    href: 'https://code.visualstudio.com',
  },
  {
    alt: 'GitHub Copilot',
    src: '/images/copilot.png',
    href: 'https://github.com/features/copilot',
  },
]

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex flex-nowrap gap-6 sm:gap-10 md:gap-20 lg:gap-30 xl:gap-40 items-center justify-center lg:justify-evenly'
      )}
    >
      {logos.map((logo) => (
        <a
          key={logo.alt}
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center group"
        >
          <Image
            alt={logo.alt}
            src={logo.src}
            size="medium"
            rounded="rounded-none"
            className="h-auto max-h-8 sm:max-h-10 lg:max-h-12 w-auto max-w-full grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-100"
          />
        </a>
      ))}
    </div>
  )
}
