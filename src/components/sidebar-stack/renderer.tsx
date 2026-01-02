'use client'

import React, { useRef, useEffect, useState, type ReactNode } from 'react'
import clsx from 'clsx'
import xMarkIcon from '@iconify/icons-heroicons/x-mark'
import copyIcon from '@iconify/icons-lucide/copy'
import { Icon } from '@/components/icon'
import { Button } from '@/components'
import { useSidebarStack, type SidebarItem } from './context'

/** Lock body scroll when sidebar is open */
function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [isLocked])
}

/** Sidebar level classes - each level shifts 24px left */
const LEVEL_CLASSES: Record<number, string> = {
  0: 'translate-x-0',
  1: '-translate-x-6', // 24px
  2: '-translate-x-12', // 48px
  3: '-translate-x-[72px]',
  4: '-translate-x-24', // 96px
  5: '-translate-x-[120px]',
  6: '-translate-x-36', // 144px
  7: '-translate-x-[168px]',
  8: '-translate-x-48', // 192px
  9: '-translate-x-[216px]',
}

/** Z-index classes for stacking */
const Z_INDEX_CLASSES: Record<number, string> = {
  0: 'z-[59]',
  1: 'z-[58]',
  2: 'z-[57]',
  3: 'z-[56]',
  4: 'z-[55]',
  5: 'z-[54]',
  6: 'z-[53]',
  7: 'z-[52]',
  8: 'z-[51]',
  9: 'z-50',
}

interface SidebarPanelProps {
  item: SidebarItem
  level: number
  isActive: boolean
  isClosing: boolean
  onClose: (id: string) => void
  /** Render function for code content */
  renderContent: (item: SidebarItem) => ReactNode
}

/** Individual sidebar panel with stacking visual effects */
function SidebarPanel({
  item,
  level,
  isActive,
  isClosing,
  onClose,
  renderContent,
}: SidebarPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  // Trigger enter animation after mount
  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true))
  }, [])

  const displayName = item.name || item.filepath.split('/').pop() || 'Component'

  const handleCopy = async () => {
    if (!item.code) return
    try {
      await navigator.clipboard.writeText(item.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Clipboard copy failed', err)
    }
  }

  // Clamp level to supported range
  const clampedLevel = Math.min(level, 9)

  return (
    <div
      className={clsx(
        'fixed inset-y-0 right-0 flex flex-col',
        'max-w-[86%] md:max-w-[77%] lg:max-w-[67%] xl:max-w-[900px] w-full',
        'transition-transform duration-500 ease-out',
        Z_INDEX_CLASSES[clampedLevel],
        isClosing
          ? 'translate-x-full'
          : !isVisible
            ? 'translate-x-full'
            : LEVEL_CLASSES[clampedLevel],
        !isActive && 'pointer-events-none'
      )}
    >
      <div
        ref={panelRef}
        className={clsx(
          'h-full bg-body overflow-y-auto scrollbar-hide',
          isActive ? 'shadow-2xl' : 'shadow-xl'
        )}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-body/95 backdrop-blur-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-4 md:px-8 py-4">
            <div className="flex items-center gap-3 min-w-0">
              <h2 className="text-lg font-semibold text-gray-900 truncate">
                {displayName}
              </h2>
            </div>
            <button
              type="button"
              className="rounded-full h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors shrink-0"
              onClick={(e) => {
                e.stopPropagation()
                onClose(item.id)
              }}
              aria-label={`Close ${displayName}`}
            >
              <Icon
                icon={xMarkIcon}
                className="h-5 w-5 text-gray-600"
              />
            </button>
          </div>
        </div>

        {/* File path with copy button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 px-4 md:px-8 pt-9 pb-3">
          <code className="text-base text-gray-500 font-mono break-all">
            {item.filepath}
          </code>
          <Button
            onClick={handleCopy}
            disabled={!item.code}
            icon={copyIcon}
            iconPlacement="after"
            variant="outline"
            className="w-full md:w-auto shrink-0 transition-colors duration-200 border-gray-300 text-gray-600 hover:bg-gray-50 cursor-pointer"
          >
            {copied ? 'Copied!' : 'Copy'}
          </Button>
        </div>

        {/* Code content - delegated to render function */}
        <div className="px-4 md:px-8 py-6">{renderContent(item)}</div>
      </div>
    </div>
  )
}

export interface SidebarStackRendererProps {
  /** Render function for code content in each panel */
  renderContent: (item: SidebarItem) => ReactNode
}

/** Renders sidebar stack with shared backdrop */
export function SidebarStackRenderer({
  renderContent,
}: SidebarStackRendererProps) {
  const { stack, close, isOpen } = useSidebarStack()
  const [closingIds, setClosingIds] = useState<Set<string>>(new Set())
  const [shouldRender, setShouldRender] = useState(false)

  // Filter out closing items to calculate levels for active items
  const activeItems = stack.filter((item) => !closingIds.has(item.id))
  const hasClosing = closingIds.size > 0

  useBodyScrollLock(isOpen || hasClosing)

  // Handle mount/unmount with animation
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
    }
  }, [isOpen])

  // Clean up render state when all sidebars finish closing
  useEffect(() => {
    if (!isOpen && shouldRender && !hasClosing) {
      setShouldRender(false)
    }
  }, [isOpen, shouldRender, hasClosing])

  const handleClose = (id: string) => {
    setClosingIds((prev) => new Set(prev).add(id))
    setTimeout(() => {
      close(id)
      setClosingIds((prev) => {
        const next = new Set(prev)
        next.delete(id)
        return next
      })
    }, 500)
  }

  const handleBackdropClick = () => {
    // Close topmost active (non-closing) item
    const topItem = activeItems[activeItems.length - 1]
    if (topItem) handleClose(topItem.id)
  }

  // Handle Escape key to close topmost sidebar
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        const topItem = activeItems[activeItems.length - 1]
        if (topItem) handleClose(topItem.id)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, activeItems])

  if (!shouldRender) return null

  const isLastClosing = activeItems.length === 0 && hasClosing

  return (
    <>
      {/* Backdrop */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-body/50 backdrop-blur-md transition-opacity duration-500',
          isLastClosing ? 'opacity-0' : 'opacity-100'
        )}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Sidebar panels */}
      {stack.map((item) => {
        const isClosing = closingIds.has(item.id)
        const activeIndex = activeItems.findIndex((i) => i.id === item.id)
        const level = isClosing ? 0 : activeItems.length - 1 - activeIndex
        const isActive = !isClosing && activeIndex === activeItems.length - 1

        return (
          <SidebarPanel
            key={item.id}
            item={item}
            level={level}
            isActive={isActive}
            isClosing={isClosing}
            onClose={handleClose}
            renderContent={renderContent}
          />
        )
      })}
    </>
  )
}
