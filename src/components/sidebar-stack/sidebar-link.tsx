import type { ReactNode } from 'react'

export interface SidebarLinkProps {
  children: ReactNode
  componentId: string
  title: string
  className?: string
}

/**
 * A declarative link component for sidebar navigation.
 * Does not use hooks - works with SidebarClickHandler via event delegation.
 */
export function SidebarLink({
  children,
  componentId,
  title,
  className = 'text-blue-600 underline cursor-pointer hover:text-blue-800',
}: SidebarLinkProps) {
  // Note: onClick is handled by SidebarClickHandler via event delegation
  // The href uses a dash separator to avoid CSS selector issues with colons
  return (
    <a
      href={`#sidebar-panel-${componentId}`}
      data-sidebar-title={title}
      data-sidebar-component={componentId}
      className={className}
    >
      {children}
    </a>
  )
}
