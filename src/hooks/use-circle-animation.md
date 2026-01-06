# Use Circle Animation

A React hook that adds a spinning animation class to an element when it enters the viewport.

**Tier:** Free  
**File:** `src/hooks/use-circle-animation.tsx`

## Usage

```tsx
'use client'

import { useId } from 'react'
import useCircleAnimation from '@/hooks/use-circle-animation'

export default function CircleText() {
  let circleId = 'circle-' + useId()
  circleId = circleId.replace(/:/g, '-')

  useCircleAnimation(circleId)

  return (
    <div id={circleId} className="w-36 h-36">
      {/* Circle text content */}
    </div>
  )
}
```

## API

### Parameters

- `id`: String - The DOM element ID to observe and animate

### Behavior

- Adds `animate-spin-slow-reverse` class when element enters viewport
- Removes the class when element leaves viewport
- Uses `react-intersection-observer` with 1% threshold

## CSS Requirement

Requires the `animate-spin-slow-reverse` animation defined in `src/styles/tailwind.css`:

```css
@layer utilities {
  .animate-spin-slow-reverse {
    animation: spin-slow-reverse 10s linear infinite;
  }
}

@keyframes spin-slow-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
```

## Example Use Case

Commonly used for rotating circular text around a play button or other decorative elements that should only animate when visible to improve performance.

See `src/blocks/hero-16.tsx` for a full implementation example.
