# Visual Mockups & Screen Descriptions

> Detailed descriptions of key screens for the Personal Goal Tracker app

---

## 1. Dashboard (Main Screen)

### Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│  HEADER SECTION (Gradient Background)                   │
│  ┌──────────────────────────────────────────────────┐  │
│  │  👋 My Goals                    [+ New Goal]     │  │
│  │  Track your progress and achieve your ambitions  │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│  QUICK ADD INPUT                                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │  ✨ What do you want to achieve today? [Add →]  │  │
│  │  Press Enter to quickly add a goal               │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│  STATS CARDS (4-column grid on desktop, 2 on mobile)    │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                  │
│  │  🎯  │ │  ✓   │ │  ⏱  │ │  📈  │                  │
│  │  12  │ │   8  │ │   4  │ │ 67%  │                  │
│  │Active│ │ Done │ │Prog. │ │ Avg  │                  │
│  │↑ 15% │ │↑ 25% │ │↓ 10% │ │↑ 12% │                  │
│  └──────┘ └──────┘ └──────┘ └──────┘                  │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│  MAIN CONTENT (Sidebar + Goals Grid)                    │
│  ┌────────┐ ┌─────────────────────────────────────┐   │
│  │FILTERS │ │  GOALS GRID (2-3 columns)           │   │
│  │        │ │  ┌──────────┐ ┌──────────┐          │   │
│  │Category│ │  │ Learning │ │  Career  │          │   │
│  │ • All  │ │  │React Crs │ │Portfolio │          │   │
│  │ • Learn│ │  │[========]│ │[====    ]│          │   │
│  │ • Career│ │  │   75%    │ │   45%    │          │   │
│  │        │ │  └──────────┘ └──────────┘          │   │
│  │Status  │ │  ┌──────────┐ ┌──────────┐          │   │
│  │ • All  │ │  │  Health  │ │ Personal │          │   │
│  │ • Active│ │  │ 5K Run  │ │2 Books/m │          │   │
│  │ • Done │ │  │[========]│ │[===     ]│          │   │
│  │        │ │  │  100% ✓  │ │   30%    │          │   │
│  └────────┘ │  └──────────┘ └──────────┘          │   │
│             └─────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                                          [+ FAB Button] ←
```

### Visual Details

**Header Section**:
- Gradient background: subtle blend of primary purple, accent coral, secondary blue (5% opacity each)
- Large H1 title with text gradient (purple to blue)
- Light gray descriptive text below
- Primary purple "New Goal" button (top right)

**Quick Add Input**:
- Large rounded input field (12px border radius)
- Sparkles icon on left (gray, turns purple on focus)
- Inline "Add" button appears when text entered (purple, slides in)
- Helper text below in small gray font
- Subtle border that highlights purple on hover

**Stats Cards**:
- White background with subtle shadow
- Icon in purple rounded background (top right)
- Large monospace numbers (48px)
- Small uppercase label
- Trend indicator with arrow and percentage
- Color-coded by variant (info=blue, success=green)

**Filters Sidebar** (Desktop):
- White card with border
- "Filters" heading
- Two sections: Category and Status
- Pill-style buttons with counts
- Active filter: purple background with checkmark
- Inactive: light gray, hover effect

**Goal Cards**:
- White background, rounded corners (12px)
- Category pill (top left, soft blue background)
- Status badge (top right)
- Goal title (large, semibold, 2-line max)
- Description (gray, smaller, 2-line max)
- Progress bar with dynamic color:
  - 0-39%: Coral gradient
  - 40-69%: Amber gradient
  - 70-99%: Teal gradient
  - 100%: Green gradient
- Progress percentage (right aligned, monospace)
- Target date (bottom, small gray text)
- Hover: slight scale up (1.02x), shadow increase, purple border tint

**Floating Action Button** (Mobile):
- Purple circle (56px diameter)
- White plus icon
- Fixed bottom-right position
- Shadow with purple tint
- Scales up on hover (1.1x)

---

## 2. Goal Detail / Edit View

### Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│  [← Back]                              [Edit] [Delete]  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │  [Learning]                           [Active]     │ │
│  │                                                     │ │
│  │  Complete Advanced React Course                    │ │
│  │                                                     │ │
│  │  Finish all modules including hooks, context,     │ │
│  │  and performance optimization                      │ │
│  │                                                     │ │
│  │  Progress: 75%                                     │ │
│  │  [==========================================       ]│ │
│  │                                                     │ │
│  │  🎯 Target Date: Nov 30, 2025 (15 days left)      │ │
│  │  📅 Created: Oct 1, 2025                          │ │
│  │  🔄 Last Updated: Oct 15, 2025                    │ │
│  │                                                     │ │
│  │  ┌────────────────────────────────────────────┐   │ │
│  │  │  UPDATE PROGRESS                           │   │ │
│  │  │  ○────●──────────○ 0% - 50% - 100%        │   │ │
│  │  │                                            │   │ │
│  │  │  [Update Progress]                         │   │ │
│  │  └────────────────────────────────────────────┘   │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  ACTIVITY LOG                                           │
│  ┌────────────────────────────────────────────────────┐ │
│  │  ✓ Progress updated to 75%          Oct 15, 2025  │ │
│  │  ✓ Progress updated to 60%          Oct 10, 2025  │ │
│  │  📝 Description updated             Oct 5, 2025   │ │
│  │  🎯 Goal created                    Oct 1, 2025   │ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### Visual Details

**Header Actions**:
- Back button (left): Ghost button with arrow
- Edit button: Secondary button with pencil icon
- Delete button: Destructive red, trash icon

**Main Card**:
- Large white card with generous padding
- Category pill and status badge at top
- Large title (editable inline when in edit mode)
- Description below (gray, editable)
- Progress section with large percentage and gradient bar
- Info rows with icons (target, created, updated dates)
- All using consistent spacing (24px between sections)

**Progress Update Widget**:
- Nested lighter gray card
- Slider or buttons to adjust percentage
- Visual feedback as slider moves
- Update button (primary purple)

**Activity Log**:
- Timeline-style list
- Icons for different event types
- Timestamp on right
- Subtle dividers between items

---

## 3. Empty States

### No Goals Yet

```
┌─────────────────────────────────────────┐
│              ┌───┐                      │
│              │ 🏆 │                      │
│              └───┘                      │
│                                         │
│         No goals yet                   │
│                                         │
│    Start your journey by creating     │
│    your first goal. What do you       │
│    want to achieve today?             │
│                                         │
│      [Create Your First Goal]         │
│                                         │
└─────────────────────────────────────────┘
```

### No Filtered Results

```
┌─────────────────────────────────────────┐
│              ┌───┐                      │
│              │ 🔍 │                      │
│              └───┘                      │
│                                         │
│       No goals found                   │
│                                         │
│    Try adjusting your filters         │
│    to see more goals                  │
│                                         │
│         [Clear Filters]               │
│                                         │
└─────────────────────────────────────────┘
```

### Visual Details

- Centered vertically and horizontally
- Large icon in purple circle (64px)
- Heading below (20px, semibold)
- Description (gray, max 400px width)
- Action button (purple primary or secondary)
- Generous padding (48px vertical)

---

## 4. Mobile View Adaptations

### Mobile Dashboard

```
┌──────────────────────┐
│  My Goals      [≡]   │
│  Track progress      │
└──────────────────────┘
┌──────────────────────┐
│ ✨ What to achieve? │
│    [Add →]           │
└──────────────────────┘
┌──────────┬───────────┐
│  🎯 12  │  ✓  8     │
│ Active  │ Done      │
│ ↑ 15%   │ ↑ 25%     │
├──────────┼───────────┤
│  ⏱  4   │  📈 67%   │
│ Progress│  Avg      │
│ ↓ 10%   │ ↑ 12%     │
└──────────┴───────────┘
┌──────────────────────┐
│ Filters ▼     (2)    │
└──────────────────────┘
┌──────────────────────┐
│ [Learning]   [Active]│
│ React Course         │
│ [========]  75%      │
├──────────────────────┤
│ [Career]     [Active]│
│ Portfolio Site       │
│ [====    ]  45%      │
├──────────────────────┤
│ [Health] [Completed] │
│ 5K Run Weekly        │
│ [========] 100% ✓    │
└──────────────────────┘
                  [+ FAB]
```

### Key Mobile Changes

1. **Header**: Hamburger menu icon for navigation
2. **Stats**: 2-column grid instead of 4
3. **Filters**: Collapsible accordion (collapsed by default)
4. **Goals**: Single column, card style
5. **FAB**: Always visible for quick add
6. **Touch Targets**: Minimum 44x44px
7. **Spacing**: Reduced to fit more content

---

## 5. Color & Mood Board

### Primary Palette in Use

**Purple (Primary)**:
- Main CTAs and buttons
- Focus states and rings
- Brand elements
- Active filters

**Coral (Accent)**:
- Low progress (0-39%)
- Motivational highlights
- Call-to-action accents

**Amber (Warning/Medium Progress)**:
- 40-69% progress
- Deadline approaching warnings
- Attention elements

**Teal (High Progress)**:
- 70-99% progress
- Almost complete states

**Green (Success)**:
- 100% completed
- Achievement celebrations
- Positive trends

**Blue (Info/Secondary)**:
- Active status badges
- Information states
- Secondary actions

### Visual Hierarchy Examples

**Typography Weight Distribution**:
```
Page Title (H1):     600 semibold, 48-60px, gradient
Section Header (H2): 600 semibold, 36px
Card Title (H4):     600 semibold, 20px
Body Text:           400 regular, 16px
Labels:              500 medium, 12px uppercase
Stats:               700 bold, 48px monospace
```

**Shadow Levels**:
```
Cards:        0 1px 3px rgba(0,0,0,0.1)
Hover:        0 4px 12px rgba(0,0,0,0.15)
FAB:          0 8px 24px rgba(primary, 0.25)
Modal:        0 20px 40px rgba(0,0,0,0.3)
```

**Border Radius Scale**:
```
Buttons:      12px (lg)
Cards:        12px (xl)
Inputs:       12px (xl)
Pills:        9999px (full)
Progress:     9999px (full)
```

---

## 6. Interaction Patterns

### Hover States

**Goal Card**:
- Scale: 1.0 → 1.02
- Shadow: small → medium
- Border: gray → purple tint (20% opacity)
- Duration: 200ms ease-out

**Button**:
- Background: solid → slightly lighter (90% opacity)
- Scale: 1.0 → 1.05
- Duration: 200ms

**Filter Pill**:
- Background: muted → slightly darker
- Border: transparent → primary 30%

### Active/Pressed States

**Button Click**:
- Scale: 1.05 → 0.95 (quick squish)
- Duration: 100ms

**Card Click**:
- Scale: 1.02 → 0.98 (quick feedback)
- Duration: 100ms

### Loading States

**Stat Card Loading**:
- Skeleton: Pulse animation on gray blocks
- Numbers: Fade in when loaded

**Goal Card Loading**:
- Skeleton card with animated gradient
- Shimmer effect from left to right

**Button Loading**:
- Spinning circle (2px border)
- Text changes to "Adding..."
- Disabled state (50% opacity)

### Success Feedback

**Goal Completed (100%)**:
- Confetti animation (optional)
- Progress bar: Green gradient shine
- Badge changes to green checkmark
- Celebration microcopy: "Great job! 🎉"

**Goal Added**:
- New card slides in from top
- Scale animation (0.95 → 1.0)
- Brief green highlight border

---

## 7. Responsive Breakpoints

### Mobile (< 640px)
- Single column layout
- Stacked stats (2x2 grid)
- Collapsible filters
- Full-width cards
- FAB for quick add

### Tablet (640px - 1024px)
- 2-column goal grid
- 2x2 stat grid
- Filters in expandable drawer
- Larger touch targets

### Desktop (> 1024px)
- 3-column goal grid
- 4-column stat grid
- Persistent sidebar filters
- Hover effects enabled
- More generous spacing

---

## 8. Dark Mode Variations

### Key Changes

**Backgrounds**:
- Pure white → Dark charcoal (oklch 0.12)
- Light gray → Elevated dark (oklch 0.18)
- Cards stand out more against dark bg

**Colors**:
- Primary purple: Lighter, more vibrant
- All colors: Increased luminosity
- Borders: Lighter for visibility

**Shadows**:
- Black shadows → Lighter black (40% instead of 60%)
- Glow effects on colored elements

**Text**:
- Black → Off-white (not pure white)
- Gray text → Lighter gray for contrast

---

## Implementation Notes

### CSS Custom Properties Used

All colors use CSS variables for easy theming:
```css
var(--primary)
var(--success)
var(--progress-low)
var(--card)
var(--border)
etc.
```

### Component Reusability

Every visual element maps to a reusable component:
- `.goal-card` - Standard card styling
- `.stat-card` - Metric display
- `.progress-bar` - Progress visualization
- `.category-pill` - Category label
- `.badge-*` - Status indicators

### Animation Classes

Pre-built animations for common patterns:
- `.animate-scale-in` - New items
- `.animate-slide-up` - List items
- Custom transitions on interactive elements

---

**Last Updated**: 2025-10-16
**Design Version**: 1.0.0
