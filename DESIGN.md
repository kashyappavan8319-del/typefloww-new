# Design Brief

## Direction
Premium typing practice with refined minimalism. Calm, focused experience optimized for real-life typing on mobile and desktop. Zero friction, high accessibility, intentional slate blue aesthetic.

## Tone
Refined, restrained, intentional. No decoration that distracts from the core task. Premium feel through precision, not embellishment.

## Palette

| Token | Light OKLCH | Dark OKLCH | Purpose |
|-------|-------------|-----------|---------|
| Background | `0.98 0.01 248` | `0.12 0.02 248` | Primary surface, clean slate |
| Foreground | `0.20 0.01 248` | `0.93 0 0` | Body text, high contrast |
| Card | `0.99 0.0 0` | `0.16 0.02 248` | Elevated surfaces, headers |
| Primary | `0.45 0.12 248` | `0.65 0.15 248` | CTAs, focus rings, interactive states |
| Secondary | `0.88 0.03 248` | `0.24 0.02 248` | Disabled/muted states |
| Accent | `0.45 0.12 248` | `0.65 0.15 248` | Highlights, real-time feedback |
| Border | `0.92 0.02 248` | `0.22 0.02 248` | Input borders, dividers |
| Input | `0.95 0.01 248` | `0.20 0.02 248` | Typing field background |
| Ring | `0.45 0.12 248` | `0.65 0.15 248` | Focus outlines, accessibility |
| Destructive | `0.55 0.22 25` | `0.65 0.19 22` | Error states, delete actions |

## Typography

| Layer | Font | Weight | Use Case |
|-------|------|--------|----------|
| Display | General Sans | 700 | Headings, mode titles, large CTAs |
| Body | DM Sans | 400/500 | Practice text, labels, body copy |
| Mono | Geist Mono | 400/700 | Code mode, stats display |

Type scale: 12px (sm), 14px (base), 16px (lg), 18px (xl), 24px (2xl), 32px (3xl).  
Line height: 1.5x for body, 1.2x for headings.

## Shape Language
Border radius: 10px (0.625rem) — soft, intentional, consistent.  
Spacing: 8px base unit. Scale: 8, 16, 24, 32, 40, 48.

## Structural Zones

| Zone | Light | Dark | Purpose |
|------|-------|------|---------|
| Navbar | `bg-card` + `border-b border-border` | `bg-card` + `border-b border-border` | Logo, streak, dark toggle |
| Main Content | `bg-background` | `bg-background` | Typing practice, focus area |
| Input Area | `bg-input` + `border border-border` | `bg-input` + `border border-border` | Typing field, real-time highlighting |
| Results Card | `bg-card` + `card-elevated` shadow | `bg-card` + `card-elevated` shadow | WPM, accuracy, mistake review |
| Sidebar/Mode Selector | `bg-background` | `bg-background` | Practice mode selection |
| Button States | Primary: `bg-primary text-primary-foreground` | Primary: `bg-primary text-primary-foreground` | Default, hover, active, disabled |

## Elevation & Depth
Light mode: Subtle 1px borders define zones; minimal shadow.  
Dark mode: 2–4px shadows on cards create depth; slight blur offset.  
Focus states: 2px ring around interactive elements (accessibility).

## Spacing & Rhythm
Navbar: 16px vertical padding, 24px horizontal.  
Content sections: 24–32px padding, 32px gap between sections.  
Cards: 16–20px internal padding, 16px gap inside.  
Touch targets: Minimum 44px (mobile accessibility).

## Component Patterns
Buttons: Filled primary (CTA), outlined secondary, text-only tertiary. Smooth focus ring on all.  
Inputs: Border + focus ring, 12px padding, rounded corners. Error state: `border-destructive text-destructive`.  
Cards: `bg-card` + subtle shadow + border, rounded corners.  
Badges/Labels: Small pill-shaped backgrounds, contrasting text.

## Motion
Base transition: `cubic-bezier(0.4, 0, 0.2, 1)` 0.3s for all interactive elements.  
Entrance: Fade-in on page load (300ms).  
Cursor movement: Smooth, no bounce.  
Mistake highlight: Flash/fade animation (100ms).  
Theme toggle: Cross-fade, 200ms.  
No playful or bounce animations — premium, focused feel.

## Dark Mode
Class-based toggle via `.dark` on root.  
All tokens redefined for dark: warmer slate backgrounds, brighter text, stronger shadows.  
Smooth cross-fade on toggle (persisted in localStorage).  
Carefully tuned for eye comfort during extended typing practice.

## Mobile Optimization
Typography: Responsive scaling, 16px base on mobile to prevent zoom.  
Spacing: Tighter on mobile, breathing room on desktop.  
Keyboard support: Paragraph text remains visible when mobile keyboard appears.  
Touch-friendly buttons: 44px+ tap targets.  
Input field: Large enough for comfortable tapping, no tiny touch targets.

## Accessibility
Focus rings: Always visible, high contrast (2px ring-ring).  
Color contrast: WCAG AA+ in both light and dark modes.  
Semantic HTML: Proper heading hierarchy, form labels, ARIA where needed.  
Keyboard navigation: Full support, logical tab order.

## Signature Detail
Slate blue thread throughout: Every interactive element, focus state, and accent uses the same refined blue palette. Consistency creates Premium feeling. Smooth cursor movement during practice reinforces "real-life typing" aesthetic — no rigid, robotic UI.

## Constraints
- No gradients, no blur overlays (except subtle shadows).
- No animations beyond smooth transitions and entrance fades.
- No vibrant accent colors — slate blue only, used sparingly.
- No heavy decorative elements — focus on typography and whitespace.
- Mobile-first: Design starts at 375px, scales to 2xl (1400px).

## Performance
- Fonts loaded with `font-display: swap` for performance.
- CSS custom properties minimize repaints on dark mode toggle.
- Lightweight shadow definitions.
- No external icon libraries — use native elements or SVG inline.

---

**Last Updated**: Design System v1  
**Status**: Ready for frontend implementation
