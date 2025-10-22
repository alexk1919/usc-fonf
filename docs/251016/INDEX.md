# Design System Documentation Index

> Central hub for all design system documentation

---

## Quick Links

### 🚀 Getting Started
- **[Quick Start Guide](DESIGN_QUICK_START.md)** - Get building in 5 minutes
- **[Color Reference](COLOR_PALETTE_REFERENCE.md)** - Copy-paste color values
- **Demo Pages**: Visit `/design-demo` and `/dashboard-example`

### 📚 Complete Documentation
- **[Full Design System](DESIGN_SYSTEM.md)** - Comprehensive specification
- **[Screen Mockups](SCREEN_MOCKUPS.md)** - Visual layout descriptions
- **[Implementation Summary](DESIGN_SYSTEM_SUMMARY.md)** - What was built

---

## Documentation Structure

### 1. DESIGN_QUICK_START.md
**Purpose**: Fast reference for developers
**Contents**:
- Essential components
- Common patterns
- Copy-paste utilities
- Color usage guide
- Pro tips

**When to use**: Building features, need quick reference

---

### 2. DESIGN_SYSTEM.md
**Purpose**: Complete design specification
**Contents**:
- Color system with psychology
- Typography scale and usage
- Component specifications
- Accessibility guidelines
- Responsive strategies
- Best practices and anti-patterns

**When to use**: Understanding the system deeply, making design decisions

---

### 3. COLOR_PALETTE_REFERENCE.md
**Purpose**: Color values and usage guide
**Contents**:
- All color values (OKLCH + HEX approximations)
- Usage patterns for each color
- Accessibility contrast ratios
- Gradient combinations
- Color psychology explanations

**When to use**: Choosing colors, checking accessibility, creating new components

---

### 4. SCREEN_MOCKUPS.md
**Purpose**: Visual layout descriptions
**Contents**:
- ASCII mockups of all screens
- Layout structures
- Interaction patterns
- Mobile adaptations
- Dark mode variations

**When to use**: Understanding page layouts, planning new screens

---

### 5. DESIGN_SYSTEM_SUMMARY.md
**Purpose**: Implementation overview
**Contents**:
- What was built
- File structure
- Key design decisions
- Next steps
- Troubleshooting

**When to use**: Onboarding new developers, understanding project status

---

## Component Reference

### Built Components

All components are in `src/components/dashboard/`:

| Component | File | Purpose | Variants |
|-----------|------|---------|----------|
| **Goal Card** | `goal-card.tsx` | Display goals with progress | Standard, Compact |
| **Stat Card** | `stat-card.tsx` | Show metrics | Default, Success, Warning, Info |
| **Quick Add** | `quick-add-goal.tsx` | Rapid goal entry | Input, FAB |
| **Filters** | `filter-controls.tsx` | Category/status filtering | Full, Compact |
| **Layout** | `dashboard-layout.tsx` | Page structure | Dashboard, Header, Grid |

### Usage Examples

**Goal Card**:
```tsx
import { GoalCard } from '@/components/dashboard/goal-card';

<GoalCard goal={goal} onClick={handleClick} />
```

**Stat Card**:
```tsx
import { StatCard } from '@/components/dashboard/stat-card';

<StatCard
  label="Active Goals"
  value={12}
  variant="info"
/>
```

**Quick Add**:
```tsx
import { QuickAddGoal } from '@/components/dashboard/quick-add-goal';

<QuickAddGoal onAdd={handleAdd} />
```

---

## Color System Reference

### Primary Colors
- **Purple** (Primary): `oklch(0.55 0.22 285)` - Ambition & Creativity
- **Blue** (Secondary): `oklch(0.92 0.02 240)` - Focus & Progress
- **Coral** (Accent): `oklch(0.91 0.03 25)` - Energy & Motivation

### Semantic Colors
- **Success**: `oklch(0.65 0.19 150)` - Green for achievements
- **Warning**: `oklch(0.75 0.15 75)` - Amber for attention
- **Info**: `oklch(0.62 0.17 235)` - Blue for information
- **Destructive**: `oklch(0.58 0.22 25)` - Red for errors

### Progress Colors
- **Low (0-39%)**: `oklch(0.72 0.18 25)` - Coral
- **Medium (40-69%)**: `oklch(0.75 0.15 75)` - Amber
- **High (70-99%)**: `oklch(0.68 0.17 160)` - Teal
- **Complete (100%)**: `oklch(0.65 0.19 150)` - Green

[Full reference →](COLOR_PALETTE_REFERENCE.md)

---

## Utility Classes

### Layout
```css
.container-narrow      /* max-w-4xl container */
.container-standard    /* max-w-7xl container */
.section-padding       /* responsive padding */
```

### Cards
```css
.goal-card            /* standard card */
.goal-card-interactive /* with hover effects */
.stat-card            /* metric display */
.glass                /* glass morphism */
```

### Progress
```css
.progress-bar         /* container */
.progress-bar-fill    /* animated fill */
.progress-low         /* 0-39% coral */
.progress-medium      /* 40-69% amber */
.progress-high        /* 70-99% teal */
.progress-complete    /* 100% green */
```

### Status
```css
.badge-active         /* blue badge */
.badge-completed      /* green badge */
.badge-archived       /* gray badge */
.category-pill        /* category label */
```

### Effects
```css
.gradient-hero        /* hero background */
.text-gradient-primary /* purple-blue text */
.text-gradient-success /* green-teal text */
.animate-scale-in     /* scale animation */
.animate-slide-up     /* slide animation */
```

[Full utility reference →](DESIGN_SYSTEM.md#components)

---

## File Structure Map

```
src/
├── app/
│   ├── globals.css              ← Theme system
│   ├── layout.tsx               ← Root layout
│   ├── design-demo/page.tsx     ← Component showcase
│   └── dashboard-example/page.tsx ← Working example
│
├── components/
│   └── dashboard/               ← All UI components
│       ├── goal-card.tsx
│       ├── stat-card.tsx
│       ├── quick-add-goal.tsx
│       ├── filter-controls.tsx
│       └── dashboard-layout.tsx
│
└── lib/
    └── utils.ts                 ← Utilities (cn, etc.)

docs/
├── INDEX.md                     ← This file
├── DESIGN_SYSTEM.md             ← Complete spec
├── DESIGN_QUICK_START.md        ← Quick reference
├── COLOR_PALETTE_REFERENCE.md   ← Color guide
├── SCREEN_MOCKUPS.md            ← Visual layouts
└── DESIGN_SYSTEM_SUMMARY.md     ← Implementation summary
```

---

## Design Principles

### 1. Motivational First
Colors and interactions should energize and inspire action. Use vibrant colors that encourage progress.

### 2. Clarity Over Complexity
Clean layouts with clear visual hierarchy. Users should understand the interface immediately.

### 3. Mobile-First
Optimized for thumb-reach and quick interactions. Touch targets minimum 44x44px.

### 4. Progress-Focused
Visual feedback celebrates achievement at every step. Progress bars use dynamic colors.

### 5. Accessibility Built-In
WCAG 2.1 AA compliance minimum. All interactions keyboard accessible.

[Full principles →](DESIGN_SYSTEM.md#design-principles)

---

## Responsive Breakpoints

```css
sm:  640px   /* Small tablets */
md:  768px   /* Tablets */
lg:  1024px  /* Laptops */
xl:  1280px  /* Desktops */
2xl: 1536px  /* Large screens */
```

### Mobile Strategy
1. Design for 375px (iPhone SE) first
2. Scale up with `sm:` and `md:` modifiers
3. Optimize touch targets (min 44x44px)
4. Bottom navigation for primary actions
5. FAB for quick add on mobile

[Full responsive guide →](DESIGN_SYSTEM.md#responsive-breakpoints)

---

## Common Tasks

### Creating a New Page
1. Use `DashboardLayout` component
2. Import needed components
3. Follow grid patterns (1-2-3 columns)
4. Add proper spacing (`space-y-6`)
5. Include empty states

### Adding a New Color
1. Define in `globals.css` (light + dark)
2. Add to theme inline section
3. Document in `COLOR_PALETTE_REFERENCE.md`
4. Test contrast ratios
5. Update component examples

### Building a New Component
1. Create in `src/components/dashboard/`
2. Use existing utility classes
3. Add TypeScript types
4. Export properly
5. Add to demo page
6. Document usage

---

## Testing & QA

### Checklist for New Components

- [ ] Works in light mode
- [ ] Works in dark mode
- [ ] Responsive (mobile/tablet/desktop)
- [ ] Keyboard accessible
- [ ] Screen reader friendly
- [ ] Loading states implemented
- [ ] Error states handled
- [ ] Empty states included
- [ ] Hover/focus effects working
- [ ] TypeScript types complete

### Browser Testing

- Chrome 90+ (primary)
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 14+)
- Chrome Mobile

[Troubleshooting guide →](DESIGN_SYSTEM_SUMMARY.md#troubleshooting)

---

## Demo Pages

### Design System Showcase
**URL**: `/design-demo`
**Purpose**: See all components in action
**Contains**:
- Color palette display
- Typography examples
- All component variants
- Interactive demos
- Gradient examples
- Animation showcases

### Working Dashboard
**URL**: `/dashboard-example`
**Purpose**: Real-world implementation
**Contains**:
- Functional filtering
- Sample goal data
- State management
- Add goal workflow
- Empty states
- Responsive behavior

**How to view**:
```bash
npm run dev
# Visit http://localhost:3000/design-demo
# Or http://localhost:3000/dashboard-example
```

---

## Integration Guide

### Using with Supabase

```tsx
// Example: Fetching goals
const { data: goals } = await supabase
  .from('goals')
  .select('*')
  .eq('user_id', userId);

// Render with GoalCard
{goals?.map(goal => (
  <GoalCard key={goal.id} goal={goal} />
))}
```

### Using with Forms

```tsx
import { QuickAddGoal } from '@/components/dashboard/quick-add-goal';

const handleAddGoal = async (title: string) => {
  await supabase.from('goals').insert({ title, user_id: userId });
};

<QuickAddGoal onAdd={handleAddGoal} />
```

### Using with State Management

```tsx
const [selectedCategory, setSelectedCategory] = useState('all');

<FilterControls
  categories={categories}
  selectedCategory={selectedCategory}
  onCategoryChange={setSelectedCategory}
/>
```

---

## Performance Tips

### Optimization Strategies
1. Use Tailwind JIT for minimal CSS
2. Lazy load demo pages
3. Code split large components
4. Optimize images with Next.js Image
5. Use CSS variables for theming (no JS needed)

### Bundle Size Targets
- CSS: <50KB (with purge)
- Components: <20KB (gzipped)
- Total: <100KB additional to Next.js

[Performance guide →](DESIGN_SYSTEM_SUMMARY.md#performance-benchmarks)

---

## FAQ

### Q: How do I change the primary color?
A: Edit `--primary` in `src/app/globals.css` (both light and dark modes)

### Q: Can I use this with other frameworks?
A: The design system is built for Next.js + Tailwind, but concepts are transferable

### Q: How do I add dark mode toggle?
A: Use `next-themes` package or implement custom dark mode switcher

### Q: Are components accessible?
A: Yes, WCAG AA compliant with keyboard navigation and screen reader support

### Q: Can I customize component styles?
A: Yes, all components use Tailwind classes - easy to override or extend

[More Q&A →](DESIGN_SYSTEM.md#best-practices)

---

## Changelog

### Version 1.0.0 (2025-10-16)
- ✅ Complete color system with psychology-based palette
- ✅ 5 core dashboard components
- ✅ 20+ utility classes
- ✅ Full light/dark mode support
- ✅ Comprehensive documentation (5 guides)
- ✅ 2 demo pages with examples
- ✅ TypeScript types throughout
- ✅ WCAG AA accessibility
- ✅ Mobile-first responsive design
- ✅ Production-ready components

---

## Contributing

When adding to the design system:

1. **Document It**: Update relevant docs
2. **Demo It**: Add to `/design-demo`
3. **Type It**: Full TypeScript coverage
4. **Test It**: Check all breakpoints
5. **Review It**: Ensure accessibility

---

## Support & Resources

### Internal Resources
- [CLAUDE.md](../../CLAUDE.md) - Development guidelines
- [README.md](../../README.md) - Project overview
- Component files in `src/components/dashboard/`

### External Resources
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/docs)
- [Lucide Icons](https://lucide.dev)
- [OKLCH Color](https://oklch.com)

### Tools
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Color Blindness Simulator](https://www.getstark.co)
- [Responsive Tester](https://responsively.app)

---

## Next Steps

### For Developers
1. ✅ Familiarize with design system
2. ✅ Review demo pages
3. → Start implementing features
4. → Connect to Supabase
5. → Add authentication

### For Designers
1. ✅ Review color palette
2. ✅ Check component library
3. → Create additional screens
4. → Design empty states
5. → Plan animations

### For Product
1. ✅ Review UX patterns
2. ✅ Validate user flows
3. → Plan feature rollout
4. → Gather user feedback
5. → Iterate on design

---

## Quick Command Reference

```bash
# Start development
npm run dev

# View design system
open http://localhost:3000/design-demo

# View dashboard example
open http://localhost:3000/dashboard-example

# Build for production
npm run build

# Run linter
npm run lint
```

---

**Design System Status**: ✅ Complete & Production Ready
**Version**: 1.0.0
**Last Updated**: 2025-10-16
**Maintained By**: Design Team

---

### Need Help?

1. Check [DESIGN_QUICK_START.md](DESIGN_QUICK_START.md) for quick answers
2. Review [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for detailed specs
3. See [DESIGN_SYSTEM_SUMMARY.md](DESIGN_SYSTEM_SUMMARY.md) for troubleshooting
4. View demo pages for live examples

Happy building! 🚀
