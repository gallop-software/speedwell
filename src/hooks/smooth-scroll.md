# Smooth Scroll

A client-side hook that enables smooth scrolling behavior for anchor links with an automatic offset adjustment.

## Usage

```tsx
import SmoothScroll from '@/hooks/smooth-scroll'

export default function Layout() {
  return (
    <>
      <SmoothScroll />
      {/* Your content */}
    </>
  )
}
```

## Features

- Automatically attaches smooth scroll behavior to all anchor links (`a[href^="#"]`)
- Applies a 40px offset from the top when scrolling to anchors
- Updates the URL hash in browser history
- Dynamically observes DOM changes to attach listeners to new links
- Opt-out available by adding `no-anchor-scroll` class to specific links
- Reattaches listeners on route changes via Next.js pathname monitoring

## How it Works

1. Detects clicks on anchor links starting with `#`
2. Prevents default browser jump behavior
3. Smoothly scrolls to the target element with offset
4. Updates the URL without page reload
5. Uses MutationObserver to handle dynamically added links

## Excluding Links

To exclude specific links from smooth scrolling, add the `no-anchor-scroll` class:

```tsx
<a
  href="#section"
  className="no-anchor-scroll"
>
  Jump without smooth scroll
</a>
```

## Implementation

The component is used in `src/app/layout.tsx` to enable smooth scrolling throughout the application.
