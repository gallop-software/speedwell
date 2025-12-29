# HTML Class

A client-side hook that adds a class to the `<html>` element on mount and removes it on unmount.

**Tier:** Internal  
**File:** `src/hooks/html-class.tsx`

## Usage

```tsx
import { HtmlClass } from '@/hooks/html-class'

export default function MyComponent() {
  return (
    <>
      <HtmlClass className="dark-mode" />
      {/* Your content */}
    </>
  )
}
```

## Features

- Adds a CSS class to the document root (`<html>`) element
- Automatically removes the class when the component unmounts
- Useful for page-specific styling or theme toggling
- Renders nothing to the DOM

## How it Works

1. On mount, adds the specified class to `document.documentElement`
2. On unmount, removes the class via the cleanup function
3. Re-runs if the `className` prop changes

## Props

| Prop        | Type     | Description                                  |
| ----------- | -------- | -------------------------------------------- |
| `className` | `string` | The CSS class to add to the `<html>` element |

## Use Cases

- Page-specific navbar styling (e.g., transparent vs solid background)
- Theme switching per route
- Scroll behavior modifications
- Layout-specific body styles
