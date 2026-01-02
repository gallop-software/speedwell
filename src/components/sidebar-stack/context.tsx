'use client'

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react'

export interface SidebarItem {
  id: string
  title: string
  componentId: string
}

interface SidebarStackContextType {
  /** Array of open sidebars in order */
  stack: SidebarItem[]
  /** Push a new sidebar onto the stack, returns id */
  push: (item: Omit<SidebarItem, 'id'>) => string
  /** Close a specific sidebar by id */
  close: (id: string) => void
  /** Close all sidebars */
  closeAll: () => void
  /** Check if any sidebar is open */
  isOpen: boolean
}

const SidebarStackContext = createContext<SidebarStackContextType | null>(null)

let idCounter = 0
function generateId(): string {
  return `sidebar-${++idCounter}-${Date.now()}`
}

export function SidebarStackProvider({ children }: { children: ReactNode }) {
  const [stack, setStack] = useState<SidebarItem[]>([])

  const push = useCallback((item: Omit<SidebarItem, 'id'>): string => {
    const id = generateId()
    const newItem: SidebarItem = { ...item, id }
    setStack((prev) => [...prev, newItem])
    return id
  }, [])

  const close = useCallback((id: string) => {
    setStack((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const closeAll = useCallback(() => {
    setStack([])
  }, [])

  const isOpen = stack.length > 0

  return (
    <SidebarStackContext.Provider
      value={{ stack, push, close, closeAll, isOpen }}
    >
      {children}
    </SidebarStackContext.Provider>
  )
}

export function useSidebarStack(): SidebarStackContextType {
  const context = useContext(SidebarStackContext)
  if (!context) {
    throw new Error(
      'useSidebarStack must be used within a SidebarStackProvider'
    )
  }
  return context
}
