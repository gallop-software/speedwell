import { proxy, useSnapshot, subscribe } from 'valtio'

const state = proxy({
  playVideo: false,
  offsetTop: 0,
  windowHeight: 0,
  lastOffsetTop: 0,
  isScrolling: false,
  dialogOpen: false,
  scrollingDirection: 'down',
  lastScrollingDirection: 'down',
})

export { state, useSnapshot, subscribe, proxy }
