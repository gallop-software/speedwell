# Navbar Architecture

## Overview

The navbar has been refactored from a single 999-line file into a modular component system organized in `/src/components/navbar/`. This architecture improves maintainability, readability, and makes it easier to understand and modify specific parts of the navigation.

## File Structure

```
src/components/navbar/
├── index.tsx                      # Main navbar component
├── types.ts                       # TypeScript interfaces
├── config.ts                      # Navigation data (links, social)
├── desktop-nav.tsx               # Desktop navigation
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
  - Manages authentication session state
  - Handles login modal state
  - Passes theme prop to child components
  - Renders both desktop and mobile navigation
- **Props**: `theme?: 'hero' | 'normal'` (default: 'normal')

### `types.ts`

- **Purpose**: Centralized TypeScript type definitions
- **Key Types**:
  - `NavbarProps`: Main navbar props with theme
  - `NavLink`: Navigation link structure with optional dropdowns
  - `DropdownItem`: Dropdown menu item structure
  - `SocialLink`: Social media link structure
  - `LoginView`: Union type for login modal states

### `config.ts`

- **Purpose**: Centralized configuration data
- **Contents**:
  - `links`: Array of main navigation links
  - `socialLinks`: Array of social media links (GitHub, Slack)
- **Benefits**: Easy to add/remove/modify navigation items without touching component logic

### `desktop-nav.tsx`

- **Purpose**: Desktop navigation with dropdowns
- **Features**:
  - Popover-based dropdown menus using Headless UI
  - Theme-aware button styling (conditional "Get full access" button)
  - Theme-aware dropdown backgrounds (gradient vs solid)
  - Theme-aware icon styling in dropdowns
  - Account dropdown with user info, settings, logout
- **Theme Behavior**:
  - `theme='normal'`: Dark button, gradient dropdown background
  - `theme='hero'`: Transparent button, solid dropdown background

### `mobile-nav.tsx`

- **Purpose**: Mobile slide-down navigation menu
- **Features**:
  - Expandable accordion sections using Headless UI Disclosure
  - Framer Motion animations
  - Theme-aware button styling matching desktop
  - Theme-aware "logged in as" box and icon backgrounds
  - Integrated search functionality
  - Social media links at bottom
- **Theme Behavior**:
  - `theme='normal'`: Gradient overlay on logged-in box and icons
  - `theme='hero'`: Simple transparent styling

### `search-button.tsx`

- **Purpose**: Search toggle with keyboard shortcuts
- **Features**:
  - Platform detection (⌘ for Mac, Ctrl for Windows/Linux)
  - Keyboard shortcut listener (Cmd/Ctrl+K)
  - Opens search modal

### `social-media-nav.tsx`

- **Purpose**: Desktop social media icons
- **Features**:
  - Renders social links from config
  - Desktop-only display (hidden on mobile)
  - Uses Iconify icons

### `mobile-nav-button.tsx`

- **Purpose**: Hamburger menu button for mobile
- **Features**:
  - Animated icon using Framer Motion
  - Rotates when menu is open
  - Mobile/tablet only (hidden on desktop)

### `sticky-navbar.tsx`

- **Purpose**: Sticky navbar that appears on scroll
- **Features**:
  - Motion-based scroll detection
  - Slides in/out based on scroll direction
  - Always uses `theme='normal'`
  - Includes both desktop and mobile navigation

### `sticky-mobile-nav-button.tsx`

- **Purpose**: Mobile menu for sticky navbar
- **Features**:
  - Sidebar dialog using Headless UI
  - Slide-in animation from right
  - Gradient background matching sign-in modal
  - Always passes `theme='normal'` to MobileNav
  - Full-height scrollable menu

## Theme System

The navbar supports two theme modes:

### `theme='normal'` (Default)

- Used on most pages and sticky navbar
- Desktop: Dark "Get full access" button, gradient dropdown
- Mobile: Gradient overlay on logged-in box and icons
- Sticky mobile nav: Full gradient background panel

### `theme='hero'`

- Used on hero/landing sections
- Desktop: Transparent "Get full access" button, solid dropdown
- Mobile: Simple transparent styling
- Creates a lighter, more minimal appearance

## Styling Patterns

### Gradient Background

```
bg-linear-115 from-[#fff9e0] from-8% via-[#ffc9e8] via-70% to-[#d4b3ff]
```

Used in:

- Desktop dropdown (when theme='normal')
- Sticky mobile nav panel
- Sign-in modal

### Icon Gradient Overlay (Mobile, theme='normal')

```
before:bg-linear-to-br before:from-[#fffaeb]/20 before:via-[#ffd4e8]/20 before:to-[#e0d4ff]/20 before:opacity-50
```

### Border & Shadow

```
ring-1 ring-[#D15052]/15
after:shadow-[inset_0_0_2px_1px_#ffffff4d]
```

## Benefits of This Architecture

1. **Modularity**: Each component has a single responsibility
2. **Maintainability**: Easy to locate and modify specific features
3. **Reusability**: Components can be reused in different contexts
4. **Type Safety**: Centralized types prevent inconsistencies
5. **Configuration**: Data separated from presentation logic
6. **Testing**: Individual components can be tested in isolation
7. **Performance**: Can lazy load or code-split if needed
8. **Readability**: Much easier to understand than a 999-line file

## Making Changes

### Adding a new navigation link

Edit `config.ts` and add to the `links` array

### Modifying theme behavior

Edit the conditional logic in `desktop-nav.tsx` or `mobile-nav.tsx`

### Changing dropdown styling

Modify the theme-based classes in `desktop-nav.tsx`

### Updating mobile menu behavior

Edit `mobile-nav.tsx` for the menu content or `sticky-mobile-nav-button.tsx` for the container

### Adding new theme options

1. Update `types.ts` to add new theme value
2. Update conditional logic in affected components
3. Add new styling variants
