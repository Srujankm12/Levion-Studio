# Levion Studio - Design Guidelines

## Design Approach
**Reference-Based**: Draw inspiration from premium agency sites like Vercel, Linear, and Stripe for futuristic aesthetics, combined with bold motion design principles from Awwwards-winning studios.

## Brand Identity
- **Color Palette**: Sleek black backgrounds with bright yellow (#FFD700 range) accents matching the provided logo
- **Tone**: Bold, Modern, Professional, Confident, Futuristic

## Typography System
- **Headings**: Bold, geometric sans-serif (Inter or Space Grotesk) - weights 700-900
- **Hero**: 4xl to 6xl, tracking tight
- **Section Headers**: 3xl to 4xl
- **Body**: Regular sans-serif (Inter) - weights 400-500, 16-18px base, generous line-height (1.6-1.8)
- **Buttons/CTAs**: 600 weight, uppercase tracking for emphasis

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 to py-32 desktop, py-12 to py-16 mobile
- Container: max-w-7xl with px-6 to px-8
- Component spacing: gap-8 to gap-12

## Core Sections

### 1. Hero Section
- Full viewport height with gradient black background
- Levion Studio logo (provided image) prominently displayed
- Bold headline: "Our Work. Your Way." in 5xl-6xl
- Subheading explaining full-stack creative and software development agency
- Bright yellow CTA button with blur background effect
- Subtle animated grid pattern or particles in background
- Scroll indicator at bottom

### 2. How We Work Section
- Interactive timeline/step visualization
- Four stages with animated progression: Communication → Design → Development → Deployment
- Each stage as an expanding card with icon, title, and description
- Animated connectors between stages
- Yellow accent highlights for active/hovered stage

### 3. Services Grid
- 7 service cards in 3-column grid (desktop), 1-column (mobile)
- Each card: Icon (Heroicons), service name, brief description
- Hover animations with yellow border glow and slight lift effect
- Services: UI/UX Design, Mobile Development, Web Development, Website Design, API/Backend, Video Production, Digital Marketing/SEO

### 4. Portfolio Showcase
- Masonry grid or 2-column layout with project cards
- Each card: Project thumbnail, title, tech stack tags
- Hover effects revealing case study preview or additional details
- Yellow overlay accent on hover with "View Project" CTA

### 5. Contact & Quote Section
- Split layout: Contact form on left, company info/social on right
- Form fields: Name, Email, Project Type (dropdown), Budget, Message
- Bright yellow submit button with hover glow effect
- Alternative contact methods and social links displayed

## Component Specifications

### Navigation
- Fixed transparent header with blur backdrop on scroll
- Logo on left, navigation links center/right
- Yellow underline on active/hover states
- Mobile: Hamburger menu with slide-in overlay

### Cards
- Dark background (#0a0a0a to #1a1a1a) with subtle border
- Rounded corners (rounded-xl to rounded-2xl)
- Hover: Yellow border glow, transform scale(1.02)
- Internal padding: p-6 to p-8

### Buttons
- Primary: Yellow background, black text, bold weight
- Secondary: Black background, yellow border and text
- Blur background when overlaying images
- Padding: px-8 py-4 for hero CTAs, px-6 py-3 for standard

### Footer
- Dark background with yellow accent divider
- Three columns: About, Quick Links, Contact Info
- Newsletter signup with yellow submit button
- Social media icons with yellow hover states

## Animation Strategy
- Use Framer Motion or GSAP for smooth transitions
- Scroll-triggered animations: Fade-in-up for sections, stagger for card grids
- Hero: Animated text reveal and logo entrance
- How We Work: Progress bar animation, stage expansion
- Service Cards: Stagger entrance, hover lift and glow
- Portfolio: Image reveal on scroll, hover zoom
- Parallax: Subtle background movement on hero
- Keep animations smooth (0.3s-0.6s duration, ease-out curves)

## Images
- **Hero**: Use abstract tech/digital artwork or futuristic geometric patterns as background (dark with yellow accents)
- **Portfolio**: Project screenshots/mockups showcasing your work
- **About/Team**: Optional team or office imagery

## Responsive Behavior
- Desktop: Multi-column grids, full animations
- Tablet: 2-column grids, maintained animations
- Mobile: Single column, simplified animations for performance
- Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)

## Accessibility
- Maintain 4.5:1 contrast ratio (yellow on black meets WCAG AA)
- Focus states with yellow outline
- Keyboard navigation support
- Alt text for all images and icons
- Reduced motion media query support