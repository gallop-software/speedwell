import type { ReactElement } from 'react'
import { Icon } from '../icon'
import { socialLinks } from './config'
import type { SocialLink } from './types'

/**
 * Social media navigation component
 * Renders social media icons for desktop view
 * @returns {ReactElement} Social media links
 */
export function SocialMediaNav(): ReactElement {
  return (
    <div className="hidden lg:flex items-center space-x-0 xl:space-x-1">
      {socialLinks.map((item: SocialLink) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-dark hover:bg-black/2.5 rounded-lg transition-colors duration-200 p-2"
          aria-label={item.name}
        >
          <Icon icon={item.icon} />
        </a>
      ))}
    </div>
  )
}
