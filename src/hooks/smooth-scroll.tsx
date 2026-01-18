'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { state } from '@/state'

const SmoothScroll = () => {
  const offset = 40
  const pathname = usePathname()

  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = event.currentTarget as HTMLAnchorElement
      const hash = anchor.hash
      if (!hash) return

      const targetElement = document.querySelector(hash)
      if (targetElement) {
        event.preventDefault()
        state.scrollingDirection = 'down'
        state.lockScrollDirection = true

        // Unlock after scroll completes
        window.addEventListener('scrollend', () => {
          state.lockScrollDirection = false
        }, { once: true })

        window.scrollTo({
          top:
            targetElement.getBoundingClientRect().top + window.scrollY - offset,
          behavior: 'smooth',
        })

        history.pushState(null, '', hash)
      }
    }

    const attachListeners = () => {
      const links = document.querySelectorAll<HTMLAnchorElement>(
        'body a[href^="#"]:not(.no-anchor-scroll)'
      )

      links.forEach((link) => {
        // Avoid duplicate listeners by checking a data attribute
        if (!link.dataset.smoothScrollAttached) {
          link.addEventListener('click', handleAnchorClick)
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
      const links = document.querySelectorAll<HTMLAnchorElement>(
        'body a[href^="#"]:not(.no-anchor-scroll)'
      )

      links.forEach((link) => {
        if (link.dataset.smoothScrollAttached) {
          link.removeEventListener('click', handleAnchorClick)
          delete link.dataset.smoothScrollAttached
        }
      })
    }
  }, [pathname])

  return null
}

export default SmoothScroll
