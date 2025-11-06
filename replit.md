# Levion Studio - Portfolio Website

## Overview

Levion Studio is a modern, full-stack portfolio website for a creative and software development agency. The application showcases services, portfolio work, and provides a contact form for potential clients. Built with a focus on premium aesthetics inspired by companies like Vercel, Linear, and Stripe, featuring bold black backgrounds with bright yellow (#FFD700) accents and futuristic motion design.

The project follows a monorepo structure with a React/TypeScript frontend using Vite and shadcn/ui components, paired with an Express backend for API endpoints and contact form handling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture
### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured to serve from the `client` directory
- **Wouter** for lightweight client-side routing (home page and 404 fallback)

**UI Component System**
- **shadcn/ui** components built on Radix UI primitives, using the "new-york" style
- **Tailwind CSS** for styling with custom design tokens and CSS variables
- Components aliased via `@/components`, `@/lib`, `@/hooks` for clean imports
- Custom color system supporting light/dark modes with HSL-based color tokens
- Typography using Inter and Space Grotesk fonts for modern, geometric aesthetic

**State Management & Data Fetching**
- **TanStack Query (React Query)** for server state management and API communication
- Custom query client configuration with infinite stale time and disabled auto-refetching
- **React Hook Form** with **Zod** validation for type-safe form handling
- Form schemas shared between client and server via the `shared` directory

**Animation & Interactivity**
- **Framer Motion** for scroll-based animations, transitions, and motion design
- **Embla Carousel** for portfolio showcase carousels
- Lucide React icons for consistent iconography

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with ES modules
- Custom middleware for request logging with response time tracking
- JSON body parsing with raw body access for potential webhook integrations

**API Design**
- RESTful API endpoints under `/api` prefix
- Contact form submission: `POST /api/contact`
- Contact form retrieval: `GET /api/contact` (for admin viewing)
- Centralized error handling with Zod validation error formatting

**Development vs Production**
- Development: Vite dev server integrated as Express middleware with HMR support
- Production: Serves pre-built static assets from `dist/public`
- Build process bundles both client (Vite) and server (esbuild) separately

### Data Storage

**Schema Definition**
- **Drizzle ORM** configured for PostgreSQL with type-safe schema definitions
- Schemas defined in `shared/schema.ts` for sharing between client and server
- **Drizzle-Zod** integration for automatic validation schema generation

**Database Tables**
1. **users** - User authentication (currently unused but scaffolded)
   - id (UUID primary key)
   - username (unique)
   - password (hashed)

2. **contact_submissions** - Contact form entries
   - id (UUID primary key)
   - name, email, projectType, budget, message
   - createdAt timestamp

**Current Storage Implementation**
- **In-memory storage** (`MemStorage` class) used as the active implementation
- Interface-based design (`IStorage`) allows easy swap to database-backed storage
- Contact submissions sorted by creation date (newest first)

**Migration Strategy**
- Drizzle Kit configured for PostgreSQL migrations in `./migrations` directory
- `db:push` script available for schema synchronization
- Ready to connect to Neon Database or any PostgreSQL instance via `DATABASE_URL`

### External Dependencies

**Third-Party Services**
- **Neon Database** - Serverless PostgreSQL (configured but not actively connected)
- Configured to use `@neondatabase/serverless` driver for edge-compatible connections

**UI Libraries & Frameworks**
- **Radix UI** - Accessible component primitives for all interactive elements (dialogs, dropdowns, tooltips, etc.)
- **Class Variance Authority (CVA)** - Type-safe variant management for component styles
- **Tailwind CSS** with PostCSS for utility-first styling

**Build & Development Tools**
- **TypeScript** with strict mode enabled
- **esbuild** for server-side bundling in production
- **tsx** for running TypeScript in development
- **Replit-specific plugins** for development experience (cartographer, dev banner, error overlay)

**Form Handling Stack**
- **React Hook Form** - Performance-optimized form state management
- **Zod** - Runtime type validation and schema definition
- **@hookform/resolvers** - Zod integration with React Hook Form
- **zod-validation-error** - User-friendly validation error messages

**Design Assets**
- Custom logo image stored in `attached_assets` directory
- Alias configured as `@assets` for easy importing

**Session Management (Scaffolded)**
- **connect-pg-simple** - PostgreSQL session store for Express (configured but not actively used)
- Infrastructure ready for user authentication implementation