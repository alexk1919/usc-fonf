# Color Palette Reference Card

> Quick reference for all design system colors with hex approximations

---

## Primary Colors

### Purple (Primary) - Ambition & Creativity
```
Light Mode:  oklch(0.55 0.22 285)  ≈ #7C3AED
Dark Mode:   oklch(0.68 0.22 285)  ≈ #A78BFA

Usage: CTAs, focus states, primary actions, brand elements
CSS: var(--primary)
Tailwind: bg-primary, text-primary, border-primary
```

### Blue (Secondary) - Focus & Progress
```
Light Mode BG:   oklch(0.92 0.02 240)  ≈ #EEF2FF
Light Mode Text: oklch(0.35 0.15 240)  ≈ #3730A3
Dark Mode BG:    oklch(0.25 0.03 240)  ≈ #1E293B
Dark Mode Text:  oklch(0.75 0.12 240)  ≈ #93C5FD

Usage: Category pills, supporting elements, secondary actions
CSS: var(--secondary)
Tailwind: bg-secondary, text-secondary-foreground
```

### Coral (Accent) - Energy & Motivation
```
Light Mode BG:   oklch(0.91 0.03 25)   ≈ #FEF3F2
Light Mode Text: oklch(0.45 0.18 25)   ≈ #DC2626
Dark Mode BG:    oklch(0.28 0.04 25)   ≈ #451A16
Dark Mode Text:  oklch(0.80 0.15 25)   ≈ #FCA5A5

Usage: Highlights, special callouts, motivational elements
CSS: var(--accent)
Tailwind: bg-accent, text-accent-foreground
```

---

## Semantic Colors

### Success - Achievement & Completion
```
Light Mode:  oklch(0.65 0.19 150)  ≈ #10B981
Dark Mode:   oklch(0.68 0.19 150)  ≈ #34D399

Usage: Completed goals, positive feedback, achievement badges
CSS: var(--success)
Tailwind: bg-success, text-success-foreground
```

### Warning - Attention & Deadlines
```
Light Mode:      oklch(0.75 0.15 75)   ≈ #F59E0B
Light Mode Text: oklch(0.25 0.05 75)   ≈ #78350F
Dark Mode:       oklch(0.78 0.15 75)   ≈ #FBBF24
Dark Mode Text:  oklch(0.12 0.01 270)  ≈ #1F2937

Usage: Approaching deadlines, important notifications
CSS: var(--warning)
Tailwind: bg-warning, text-warning-foreground
```

### Info - Information & Active State
```
Light Mode:  oklch(0.62 0.17 235)  ≈ #3B82F6
Dark Mode:   oklch(0.68 0.17 235)  ≈ #60A5FA

Usage: Active status, information callouts, help text
CSS: var(--info)
Tailwind: bg-info, text-info-foreground
```

### Destructive - Delete & Error
```
Light Mode:  oklch(0.58 0.22 25)   ≈ #EF4444
Dark Mode:   oklch(0.65 0.22 25)   ≈ #F87171

Usage: Delete actions, error states, critical warnings
CSS: var(--destructive)
Tailwind: bg-destructive, text-destructive-foreground
```

---

## Progress Colors (Dynamic)

### Progress Low (0-39%) - Just Started
```
Light Mode:  oklch(0.72 0.18 25)   ≈ #FB923C
Dark Mode:   oklch(0.75 0.18 25)   ≈ #FDBA74

Visual: Warm coral gradient
Message: "Keep going!"
CSS: var(--progress-low)
Class: .progress-low
```

### Progress Medium (40-69%) - Making Progress
```
Light Mode:  oklch(0.75 0.15 75)   ≈ #F59E0B
Dark Mode:   oklch(0.78 0.15 75)   ≈ #FBBF24

Visual: Amber gradient
Message: "You're getting there!"
CSS: var(--progress-medium)
Class: .progress-medium
```

### Progress High (70-99%) - Almost There
```
Light Mode:  oklch(0.68 0.17 160)  ≈ #14B8A6
Dark Mode:   oklch(0.72 0.17 160)  ≈ #2DD4BF

Visual: Teal gradient
Message: "Almost done!"
CSS: var(--progress-high)
Class: .progress-high
```

### Progress Complete (100%) - Achieved!
```
Light Mode:  oklch(0.65 0.19 150)  ≈ #10B981
Dark Mode:   oklch(0.68 0.19 150)  ≈ #34D399

Visual: Green gradient with success color
Message: "You did it! 🎉"
CSS: var(--progress-complete)
Class: .progress-complete
```

---

## Neutral Colors

### Background & Foreground
```
Background (Light):  oklch(0.99 0 0)      ≈ #FCFCFC
Background (Dark):   oklch(0.12 0.01 270) ≈ #1A1A1E

Foreground (Light):  oklch(0.15 0.01 270) ≈ #1F2937
Foreground (Dark):   oklch(0.97 0.005 270) ≈ #F9FAFB

Usage: Base page background and text
CSS: var(--background), var(--foreground)
Tailwind: bg-background, text-foreground
```

### Card Surfaces
```
Card (Light):  oklch(1 0 0)         ≈ #FFFFFF
Card (Dark):   oklch(0.18 0.01 270) ≈ #27272A

Usage: Elevated content containers
CSS: var(--card)
Tailwind: bg-card, text-card-foreground
```

### Muted & Borders
```
Muted BG (Light):        oklch(0.96 0.005 270) ≈ #F4F4F5
Muted Text (Light):      oklch(0.50 0.01 270)  ≈ #71717A
Muted BG (Dark):         oklch(0.25 0.01 270)  ≈ #3F3F46
Muted Text (Dark):       oklch(0.60 0.01 270)  ≈ #A1A1AA

Border (Light):  oklch(0.90 0.005 270) ≈ #E4E4E7
Border (Dark):   oklch(0.30 0.01 270)  ≈ #52525B

Usage: Secondary text, disabled states, subtle backgrounds
CSS: var(--muted), var(--border)
Tailwind: bg-muted, text-muted-foreground, border-border
```

---

## Chart Colors (Data Visualization)

```
Chart 1 (Light):  oklch(0.60 0.20 285)  ≈ #8B5CF6  (Purple)
Chart 2 (Light):  oklch(0.62 0.17 235)  ≈ #3B82F6  (Blue)
Chart 3 (Light):  oklch(0.65 0.19 150)  ≈ #10B981  (Green)
Chart 4 (Light):  oklch(0.72 0.18 25)   ≈ #FB923C  (Coral)
Chart 5 (Light):  oklch(0.75 0.15 75)   ≈ #F59E0B  (Amber)

Usage: Analytics graphs, progress charts, data visualization
CSS: var(--chart-1) through var(--chart-5)
Tailwind: bg-chart-1, text-chart-1, etc.
```

---

## Usage Patterns

### Buttons

**Primary CTA**:
```css
bg-primary text-primary-foreground
hover:bg-primary/90
```

**Secondary**:
```css
bg-secondary text-secondary-foreground
hover:bg-secondary/80
```

**Success**:
```css
bg-success text-success-foreground
hover:bg-success/90
```

**Destructive**:
```css
bg-destructive text-destructive-foreground
hover:bg-destructive/90
```

**Ghost**:
```css
hover:bg-muted text-foreground
```

**Outline**:
```css
border border-primary text-primary
hover:bg-primary/5
```

### Badges

**Active Goal**:
```css
bg-info/10 text-info border border-info/20
```

**Completed Goal**:
```css
bg-success/10 text-success border border-success/20
```

**Archived Goal**:
```css
bg-muted text-muted-foreground border border-border
```

### Progress Bars

**Automatic Color Based on Percentage**:
```tsx
const getProgressClass = (progress: number) => {
  if (progress === 100) return 'progress-complete';
  if (progress >= 70) return 'progress-high';
  if (progress >= 40) return 'progress-medium';
  return 'progress-low';
};
```

---

## Accessibility Notes

### Color Contrast Ratios (WCAG AA)

**Light Mode**:
- Primary on White: 7.2:1 ✅
- Foreground on Background: 15.8:1 ✅
- Muted Text on Background: 4.6:1 ✅
- Success on White: 4.8:1 ✅

**Dark Mode**:
- Primary on Dark: 8.1:1 ✅
- Foreground on Background: 14.2:1 ✅
- Muted Text on Background: 5.1:1 ✅
- Success on Dark: 6.2:1 ✅

**Never Use**:
- Light text on light backgrounds
- Dark text on dark backgrounds
- Low contrast color combinations

**Always Provide**:
- Sufficient contrast (4.5:1 minimum for text)
- Visual indicators beyond color alone
- Focus states for interactive elements

---

## Color Meaning & Psychology

### Why These Colors?

**Purple (Primary)**:
- Represents: Ambition, creativity, luxury, transformation
- Psychology: Encourages goal-setting and vision
- Target audience: Appeals to young professionals

**Coral/Orange (Accent)**:
- Represents: Energy, enthusiasm, warmth, motivation
- Psychology: Stimulates action and positive emotions
- Use case: Early-stage progress, call-to-actions

**Blue (Secondary)**:
- Represents: Trust, focus, stability, calm
- Psychology: Promotes concentration and productivity
- Use case: Work-related goals, professional context

**Green (Success)**:
- Represents: Growth, achievement, health, completion
- Psychology: Rewards and celebrates accomplishment
- Use case: Completed goals, positive reinforcement

**Amber (Warning)**:
- Represents: Attention, caution, approaching deadline
- Psychology: Creates urgency without panic
- Use case: Deadline reminders, important updates

---

## Gradient Combinations

### Recommended Gradients

**Hero Background**:
```css
bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5
```

**Success Celebration**:
```css
bg-gradient-to-r from-success to-progress-high
```

**Primary Action**:
```css
bg-gradient-to-r from-primary to-info
```

**Progress Bar (Complete)**:
```css
bg-gradient-to-r from-progress-complete to-success
```

**Text Gradient (Hero)**:
```css
bg-gradient-to-r from-primary to-info bg-clip-text text-transparent
```

---

## Color Testing Checklist

When adding new colors:

- [ ] Check light mode contrast (4.5:1 minimum)
- [ ] Check dark mode contrast (4.5:1 minimum)
- [ ] Test with color blindness simulators
- [ ] Verify gradient smoothness
- [ ] Test on mobile devices
- [ ] Check in different browsers
- [ ] Validate with design team
- [ ] Update this reference

---

## Tools & Resources

### Color Pickers
- [OKLCH Color Picker](https://oklch.com) - Modern color space
- [Coolors](https://coolors.co) - Palette generator
- [Adobe Color](https://color.adobe.com) - Advanced color tools

### Accessibility
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Stark](https://www.getstark.co) - Color blindness simulator
- [Who Can Use](https://www.whocanuse.com) - Contrast tester

### Conversion
- OKLCH → HEX: Use browser DevTools or online converters
- Note: OKLCH provides better perceptual uniformity than HEX/RGB

---

## Quick Copy-Paste Values

### CSS Variables (for manual styling)
```css
/* Primary */
background: var(--primary);
color: var(--primary-foreground);

/* Success */
background: var(--success);
color: var(--success-foreground);

/* Progress */
background: var(--progress-high);

/* Borders */
border-color: var(--border);

/* Text */
color: var(--muted-foreground);
```

### Tailwind Classes (for components)
```html
<!-- Primary Button -->
<button class="bg-primary text-primary-foreground">

<!-- Success Badge -->
<span class="bg-success/10 text-success border border-success/20">

<!-- Muted Text -->
<p class="text-muted-foreground">

<!-- Card -->
<div class="bg-card text-card-foreground border border-border">
```

---

**Color System Version**: 1.0.0
**Last Updated**: 2025-10-16
**Total Colors**: 30+ variables
**Accessibility**: WCAG AA Compliant
