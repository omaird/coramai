# Hero Component

A beautiful, animated hero section component with gradient effects and smooth animations.

## Features

- ✨ Smooth animations using Framer Motion
- 🎨 Beautiful gradient effects with blur
- 📱 Fully responsive design
- 🎯 Customizable title, subtitle, and actions
- 🎨 Customizable styling with className props
- 🔧 TypeScript support with full type safety

## Usage

```tsx
import { Hero } from "@/components/ui/hero";

function MyPage() {
  return (
    <Hero
      title="Your Amazing Title"
      subtitle="Your compelling subtitle that describes your product or service"
      actions={[
        {
          label: "Get Started",
          href: "/signup",
          variant: "default"
        },
        {
          label: "Learn More",
          href: "/about",
          variant: "outline"
        }
      ]}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | The main heading text (required) |
| `subtitle` | `string` | - | The subtitle text (optional) |
| `actions` | `HeroAction[]` | - | Array of action buttons (optional) |
| `gradient` | `boolean` | `true` | Enable/disable gradient effects |
| `blur` | `boolean` | `true` | Enable/disable blur effects |
| `className` | `string` | - | Additional CSS classes for the section |
| `titleClassName` | `string` | - | Additional CSS classes for the title |
| `subtitleClassName` | `string` | - | Additional CSS classes for the subtitle |
| `actionsClassName` | `string` | - | Additional CSS classes for the actions container |

## HeroAction Interface

```tsx
interface HeroAction {
  label: string;
  href: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}
```

## Examples

### Basic Usage
```tsx
<Hero
  title="Welcome to Our Platform"
  subtitle="Discover amazing features that will transform your workflow"
/>
```

### With Actions
```tsx
<Hero
  title="Start Your Journey"
  subtitle="Join thousands of users who trust our platform"
  actions={[
    { label: "Sign Up", href: "/signup", variant: "default" },
    { label: "View Demo", href: "/demo", variant: "outline" }
  ]}
/>
```

### Custom Styling
```tsx
<Hero
  title="Custom Styled Hero"
  subtitle="With personalized styling"
  titleClassName="text-6xl font-extrabold text-blue-600"
  subtitleClassName="text-xl text-gray-600 max-w-2xl"
  actionsClassName="mt-12 space-x-4"
/>
```

### Without Gradient Effects
```tsx
<Hero
  title="Simple Hero"
  subtitle="Clean and minimal design"
  gradient={false}
  blur={false}
/>
```

## Dependencies

- `framer-motion` - For animations
- `@radix-ui/react-slot` - For button composition
- `class-variance-authority` - For button variants
- `next/link` - For navigation
- `@/lib/utils` - For className utilities

## CSS Requirements

The component uses Tailwind CSS classes and requires the following custom utility:

```css
@layer utilities {
  .bg-gradient-conic {
    background: conic-gradient(var(--tw-gradient-stops));
  }
}
```

This is already included in your `globals.css` file.
