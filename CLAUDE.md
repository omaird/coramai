# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server with Turbopack at http://localhost:3000
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

### TypeScript
The project uses TypeScript with strict mode enabled. Type checking happens automatically during build, but no explicit typecheck script is configured.

## Architecture

### Tech Stack
- **Framework**: Next.js 15.4.5 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 with CSS variables
- **UI Components**: Custom components built with shadcn/ui patterns
- **Animations**: Framer Motion for advanced animations
- **Icons**: Lucide React

### Project Structure
- `/src/app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Geist font configuration
  - `page.tsx` - Main landing page for Coram AI video security platform
  - `demo/` - Demo pages directory
- `/src/components/ui/` - Reusable UI components following shadcn/ui patterns
  - Components use class-variance-authority (CVA) for variant management
  - Components use tailwind-merge for className handling
- `/src/lib/` - Utility functions and shared logic
- `/public/logos/` - Company logo assets in AVIF format

### Key Patterns
- **Component Architecture**: Uses shadcn/ui component patterns with CVA for variants
- **Path Aliases**: `@/` maps to `./src/` for clean imports
- **Styling**: Tailwind CSS with custom CSS variables defined in globals.css
- **Font Loading**: Uses Next.js font optimization with Geist fonts

### Component Configuration
The project uses shadcn/ui configuration (components.json) with:
- New York style theme
- React Server Components enabled
- Lucide icons as the icon library
- Tailwind CSS variables for theming

### Current Implementation
The main page (`src/app/page.tsx`) implements a landing page for Coram AI, a video security platform featuring:
- Hero section with call-to-action
- Logo marquee showcasing client companies
- Feature sections highlighting video search and analytics capabilities
- FAQ and footer sections