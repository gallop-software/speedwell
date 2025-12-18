# Navbar2 Architecture

## Overview

The navbar is a modular component system organized in `/src/components/navbar-2/`. This architecture improves maintainability, readability, and makes it easier to understand and modify specific parts of the navigation.

## File Structure

```
src/components/navbar-2/
├── index.tsx                      # Main navbar component (Navbar2)
├── types.ts                       # TypeScript interfaces
├── config.ts                      # Navigation data (links, social, homeLink)
├── desktop-nav.tsx               # Desktop navigation with dropdowns
├── mobile-nav.tsx                # Mobile navigation menu
├── search-button.tsx             # Search functionality
├── social-media-nav.tsx          # Social media icons
├── mobile-nav-button.tsx         # Mobile hamburger button
├── sticky-navbar.tsx             # Sticky navbar on scroll
└── sticky-mobile-nav-button.tsx  # Sticky mobile menu
```

## Component Breakdown

### `index.tsx`

- **Purpose**: Main entry point for the navbar
- **Responsibilities**:
  - Tracks scroll position via `useOffsetTop` hook
  - Manages scroll state for sticky navbar behavior
  - Renders both desktop and mobile navigation
  - Renders sticky navbar that appears on scroll
- **Props**:
  - `className?: string` - Additional CSS classes
  - `dark?: boolean` - When true, renders white text/icons for dark backgrounds (default: false)
- **Export**: `Navbar2`

### `types.ts`

- **Purpose**: Centralized TypeScript type definitions
- **Key Types**:
  - `NavbarProps`: Main navbar props with className and dark
  - `NavLink`: Navigation link structure with optional dropdowns
  - `DropdownItem`: Dropdown menu item structure
  - `SocialLink`: Social media link structure
  - `PopoverRenderProps`: Headless UI popover render props

### `config.ts`

- **Purpose**: Centralized configuration data
- **Contents**:
  - `homeLink`: Logo link destination
  - `links`: Array of main navigation links with optional dropdowns
  - `socialLinks`: Array of social media links
- **Benefits**: Easy to add/remove/modify navigation items without touching component logic
- **Note**: All subcomponents import directly from this file rather than receiving props

### `desktop-nav.tsx`

- **Purpose**: Desktop navigation with dropdowns
- **Features**:
  - Popover-based dropdown menus using Headless UI
  - Multi-column dropdown support (1, 2, or 3 columns)
  - Dropdown positioning (left, center, right)
  - Icon support for dropdown items
  - Dark mode support for white text on dark backgrounds
- **Props**: `isScrolling?: boolean`, `forceCloseOnHide?: boolean`, `dark?: boolean`

### `mobile-nav.tsx`

- **Purpose**: Mobile slide-down navigation menu
- **Features**:
  - Expandable accordion sections using Headless UI Disclosure
  - Framer Motion animations
  - Integrated search button
  - Social media links at bottom
- **Props**: None (imports from config directly)

### `search-button.tsx`

- **Purpose**: Search toggle with keyboard shortcuts
- **Features**:
  - Keyboard shortcut listener (Cmd/Ctrl+K)
  - Opens search modal
  - Dark mode support for white icon
- **Props**: `enableShortcut?: boolean`, `dark?: boolean`

### `social-media-nav.tsx`

- **Purpose**: Desktop social media icons
- **Features**:
  - Renders social links from config
  - Desktop-only display (hidden on mobile)
  - Uses Iconify icons
  - Dark mode support for white icons
- **Props**: `dark?: boolean`

### `mobile-nav-button.tsx`

- **Purpose**: Hamburger menu button for mobile
- **Features**:
  - Animated icon using Framer Motion
  - Rotates when menu is open
  - Mobile/tablet only (hidden on desktop)
- **Props**: `open: boolean`

### `sticky-navbar.tsx`

- **Purpose**: Sticky navbar that appears on scroll
- **Features**:
  - Motion-based slide animation
  - Slides in when scrolling up, slides out when scrolling down
  - Includes desktop nav, search, social links, and sticky mobile button
- **Props**: `isScrolling?: boolean`, `scrollingDirection?: string`

### `sticky-mobile-nav-button.tsx`

- **Purpose**: Mobile menu for sticky navbar
- **Features**:
  - Sidebar dialog using Headless UI
  - Slide-in animation from right
  - Full-height scrollable menu
- **Props**: None

## Dark Mode

The navbar supports a `dark` prop for use on dark backgrounds (e.g., hero sections with background images):

```tsx
<Navbar2 dark={true} />
```

When `dark={true}`:
- Logo switches to white version (`/images/logo-white.png`)
- Desktop nav links use white text with `hover:bg-white/10`
- Social media icons use white color
- Search icon uses white color

## Data Flow

All navigation data is centralized in `config.ts`. Components import directly from this file:

```
config.ts
├── homeLink → index.tsx, sticky-navbar.tsx
├── links → desktop-nav.tsx, mobile-nav.tsx
└── socialLinks → social-media-nav.tsx, mobile-nav.tsx
```

## Benefits of This Architecture

1. **Modularity**: Each component has a single responsibility
2. **Maintainability**: Easy to locate and modify specific features
3. **Centralized Config**: All navigation data in one place
4. **Type Safety**: Centralized types prevent inconsistencies
5. **Reusability**: Components can be reused in different contexts
6. **Readability**: Clear separation of concerns

## Making Changes

### Adding a new navigation link

Edit `config.ts` and add to the `links` array

### Adding a dropdown to a link

Add a `dropdown` property with `items`, optional `columns` (1-3), and optional `position` ('left', 'center', 'right')

### Modifying social links

Edit `config.ts` and update the `socialLinks` array

### Changing the logo link destination

Edit `homeLink` in `config.ts`

### Using dark mode

Pass `dark={true}` to the Navbar2 component for dark backgrounds

### Updating mobile menu behavior

Edit `mobile-nav.tsx` for the menu content or `sticky-mobile-nav-button.tsx` for the container
