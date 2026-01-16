'use client'

import type { ReactNode } from 'react'
import { Button } from '@/components'
import { useSidebarStack } from './context'

export interface OpenSidebarButtonProps {
  children: ReactNode
  componentId: string
  title: string
  className?: string
}

/**
 * A button that opens a sidebar panel when clicked.
 * Client component that uses the sidebar stack context.
 */
export function OpenSidebarButton({
  children,
  componentId,
  title,
  className,
}: OpenSidebarButtonProps) {
  const { push } = useSidebarStack()

  const handleClick = () => {
    push({ title, componentId })
  }

  return (
    <Button
      onClick={handleClick}
      className={className}
    >
      {children}
    </Button>
  )
}
