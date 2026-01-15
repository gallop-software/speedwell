# Circle Animation Init

A client-side component that adds a spinning animation class to an element when it enters the viewport.

**Tier:** Free  
**File:** `src/hooks/use-circle-animation.tsx`

## Usage

```tsx
import CircleAnimationInit from '@/hooks/use-circle-animation'

export default function CircleText() {
  const circleId = 'my-circle-text'

  return (
    <>
      <div id={circleId} className="w-36 h-36">
        {/* Circle text content */}
      </div>
      <CircleAnimationInit targetId={circleId} />
    </>
  )
}
```

## Props

- `targetId` (string, required): The DOM element ID to observe and animate

## Behavior

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
