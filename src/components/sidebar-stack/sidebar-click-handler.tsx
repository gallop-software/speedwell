'use client'

import type { ReactNode } from 'react'
import { useSidebarStack } from './context'

export interface SidebarClickHandlerProps {
  children: ReactNode
  className?: string
}

/**
 * Wraps content and intercepts clicks on SidebarLink elements.
 * Uses event delegation to push sidebar items without requiring
 * hooks in the SidebarLink component itself.
 */
export function SidebarClickHandler({
  children,
  className,
}: SidebarClickHandlerProps) {
  const { push } = useSidebarStack()

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    const link = target.closest('a[data-sidebar-component]')

    if (link) {
      e.preventDefault()
      e.stopPropagation() // Prevent other handlers (like smooth-scroll) from processing
      const componentId = link.getAttribute('data-sidebar-component')
      const title = link.getAttribute('data-sidebar-title') || ''

      if (componentId) {
        push({ title, componentId })
      }
    }
  }

  return (
    <div
      onClick={handleClick}
      className={className}
    >
      {children}
    </div>
  )
}
