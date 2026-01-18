import { useEffect, useRef } from 'react'
import { state } from '@/state'

// ----------------------------------------------------------------------

export default function useOffsetTop(top?: number) {
  const isTop = top || 100
  const isInitialMount = useRef(true)

  useEffect(() => {
    const onScroll = () => {
      state.lastScrollingDirection = state.scrollingDirection
      state.lastOffsetTop = state.offsetTop
      state.offsetTop = window.scrollY

      // Skip direction update on initial mount to prevent HMR issues
      if (isInitialMount.current) {
        isInitialMount.current = false
        // Just sync the offset values without changing direction
        state.lastOffsetTop = state.offsetTop
        return
      }

      if (!state.lockScrollDirection) {
        if (state.offsetTop > state.lastOffsetTop) {
          state.scrollingDirection = 'down'
        } else if (state.offsetTop < state.lastOffsetTop) {
          state.scrollingDirection = 'up'
        } else {
          state.scrollingDirection = 'none'
        }
      }

      if (state.dialogOpen === false) {
        if (state.offsetTop > isTop) {
          state.isScrolling = true
        } else {
          state.isScrolling = false
        }
      }
    }
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [isTop])
}
