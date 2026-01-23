'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { state } from '@/state'

const SmoothScroll = () => {
  const offset = 40
  const pathname = usePathname()

  useEffect(() => {
    const smoothScroll = (hash: string) => {
      const targetElement = document.querySelector(hash)
      if (targetElement) {
        state.scrollingDirection = 'down'
        state.lockScrollDirection = true

        // Unlock after scroll completes
        window.addEventListener('scrollend', () => {
          state.lockScrollDirection = false
        }, { once: true })

        // No offset for div/section elements
        const tagName = targetElement.tagName.toLowerCase()
        const scrollOffset = (tagName === 'div' || tagName === 'section') ? 0 : offset

        window.scrollTo({
          top:
            targetElement.getBoundingClientRect().top + window.scrollY - scrollOffset,
          behavior: 'smooth',
        })

        history.pushState(null, '', hash)
      }
    }

    // Main links: preventDefault for smooth scroll
    const handleMainClick = (event: MouseEvent) => {
      const anchor = event.currentTarget as HTMLAnchorElement
      const hash = anchor.hash
      if (!hash) return

      const targetElement = document.querySelector(hash)
      if (targetElement) {
        event.preventDefault()
        smoothScroll(hash)
      }
    }

    // Header links: no preventDefault (allows CloseButton to work)
    const handleHeaderClick = (event: MouseEvent) => {
      const anchor = event.currentTarget as HTMLAnchorElement
      const hash = anchor.hash
      if (!hash) return

      smoothScroll(hash)
    }

    const attachListeners = () => {
      const mainLinks = document.querySelectorAll<HTMLAnchorElement>(
        'body main a[href^="#"]:not(.no-anchor-scroll)'
      )
      const headerLinks = document.querySelectorAll<HTMLAnchorElement>(
        'body header a[href^="#"]:not(.no-anchor-scroll)'
      )

      mainLinks.forEach((link) => {
        if (!link.dataset.smoothScrollAttached) {
          link.addEventListener('click', handleMainClick)
          link.dataset.smoothScrollAttached = 'true'
        }
      })

      headerLinks.forEach((link) => {
        if (!link.dataset.smoothScrollAttached) {
          link.addEventListener('click', handleHeaderClick)
          link.dataset.smoothScrollAttached = 'true'
        }
      })
    }

    // Initial attachment
    attachListeners()

    // Observe for new links being added to DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        attachListeners() // Re-attach to any new anchors
      })
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      // Clean up MutationObserver
      observer.disconnect()

      // Clean up listeners
      const mainLinks = document.querySelectorAll<HTMLAnchorElement>(
        'body main a[href^="#"]:not(.no-anchor-scroll)'
      )
      const headerLinks = document.querySelectorAll<HTMLAnchorElement>(
        'body header a[href^="#"]:not(.no-anchor-scroll)'
      )

      mainLinks.forEach((link) => {
        if (link.dataset.smoothScrollAttached) {
          link.removeEventListener('click', handleMainClick)
          delete link.dataset.smoothScrollAttached
        }
      })

      headerLinks.forEach((link) => {
        if (link.dataset.smoothScrollAttached) {
          link.removeEventListener('click', handleHeaderClick)
          delete link.dataset.smoothScrollAttached
        }
      })
    }
  }, [pathname])

  return null
}

export default SmoothScroll
