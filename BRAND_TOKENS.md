# Milesme Brand Tokens - Extracted from Brand Guidelines

## Overview
This document outlines the design tokens extracted from the Milesme V1 Branding Guidelines and implemented in Roux CSS.

## Brand Personality
Based on the brand sliders (Page 3):
- **Playful** (leaning toward playful, not serious)
- **Exclusive** (leaning toward exclusive over accessible)
- **Innovative** (strongly innovative vs traditional)
- **Quiet** (moderate, between loud and quiet)
- **Mature** (leaning toward mature vs youthful)
- **Premium** (strongly premium over budget)
- **Niche** (leaning toward niche over mass market)

## Color Palette

### Primary Colors
- **Amber**: `#F3A72A` - Primary accent color for buttons, active states, default interactive elements
- **Orange**: `#E8762C` - Secondary accent for hover states, emphasis, and urgent actions
- **Cream**: `#F5E6CE` - Primary background color, creates warmth and outdoor natural feel
- **Green**: `#5DA777` - Success states, destinations, moments of calm achievement
- **Dark**: `#2D2F26` - Primary text color, icons, high-contrast UI elements

### Color Scale (from guidelines)
The full color scale includes variations from light to dark:
- Amber/Orange gradient (10 shades)
- Cream variations (subtle changes for elevated surfaces)
- Green tones (for success/completion states)
- Dark tones (from light gray to deep charcoal/black)

### Semantic Color Usage
- **bg-primary**: Cream (#F5E6CE) - Main app background
- **bg-secondary**: Lighter Cream - Cards, elevated surfaces
- **bg-inverse**: Dark (#2D2F26) - Dark sections, nav bars
- **bg-accent**: Amber (#F3A72A) - Buttons, highlighted cards
- **bg-accent-bold**: Orange (#E8762C) - Emphasis, urgent actions
- **bg-success**: Green (#5DA777) - Success states

- **text-primary**: Dark 500 - Headings, body text
- **text-secondary**: Dark 600 - Descriptions, labels
- **text-tertiary**: Dark 400 - Placeholders, hints
- **text-inverse**: Cream 50 - Text on dark backgrounds
- **text-accent**: Amber - Links, highlights
- **text-accent-bold**: Orange - Warnings, emphasis
- **text-success**: Green - Success messages

- **interactive-default**: Amber - Buttons, active states
- **interactive-hover**: Orange 400 (#EB944E) - Hover states
- **interactive-active**: Orange - Pressed states
- **interactive-disabled**: Dark 200 - Disabled elements

- **border-default**: Dark 200 - Card borders, dividers
- **border-subtle**: Cream 600 - Subtle separators
- **border-accent**: Amber - Focus rings, highlights
- **border-accent-bold**: Orange - Active borders, emphasis

## Typography

### Font Families
1. **Bebas Neue** (Display/Headings)
   - Used for: All headings (H1-H5), Display text, splash pages, marketing material
   - Characteristics: Large blocky letters, condensed, impactful
   - Regular weight (400) only

2. **Switzer Variable** (Body/UI)
   - Used for: Body copy, UI labels, navigation, forms
   - Weights: Regular (400), Medium (500), Bold (700)
   - Variable font for smooth weight transitions

### Type Scale (16px base)

#### Display & Headings (Bebas Neue)
- **Display**: 80px (5rem), -2% letter spacing - Splash page, Login, marketing
- **Heading 1**: 48px (3rem), 0% letter spacing
- **Heading 2**: 40px (2.5rem), 0% letter spacing
- **Heading 3**: 32px (2rem), 1% letter spacing
- **Heading 4**: 24px (1.5rem), 2.5% letter spacing
- **Heading 5**: 20px (1.25rem), 3% letter spacing

#### Body Text (Switzer)
- **Body Large**: 20px (1.25rem), Regular/Medium/Bold
- **Body**: 16px (1rem), Regular/Medium/Bold - Main body copy
- **Details Small**: 12px (0.75rem), Regular/Medium/Bold - Icon labels, nav bar labels

### Letter Spacing
- **tight**: -2% (Display)
- **normal**: 0% (H1, H2)
- **wide**: 1% (H3)
- **wider**: 2.5% (H4)
- **widest**: 3% (H5)

### Line Height
- **heading**: 1 (auto) - For all display and heading text
- **base**: 1.5 - For body copy
- **tight**: 1.2 - For UI elements

## Spacing System

Based on 16px (1rem) base unit, divisible by 16:
- **xs**: 4px (0.25rem)
- **sm**: 8px (0.5rem)
- **2sm**: 12px (0.75rem)
- **md**: 16px (1rem) - Base unit
- **2md**: 20px (1.25rem)
- **3md**: 24px (1.5rem)
- **lg**: 32px (2rem)
- **xl**: 40px (2.5rem)
- **2xl**: 48px (3rem)
- **3xl**: 64px (4rem)
- **4xl**: 80px (5rem)
- **5xl**: 96px (6rem)

### Grid System
- iPhone width: 343px content area
- 16px gutters/margins
- Consistent spacing helps eliminate guesswork

## UI Elements

### Buttons
Based on UI element examples (Pages 48-49):

**Default State**:
- Background: Amber (#F3A72A)
- Text: Dark (Body Base weight)
- Border-radius: 16px (lg)
- Padding: 12px 24px (vertical/horizontal)
- Font: Switzer Bold

**Hover State**:
- Background: Orange 400 (#EB944E)

**Pressed/Active State**:
- Background: Orange (#E8762C)

**Disabled State**:
- Background: Gray/Dark 200
- Opacity: 0.6
- Cursor: not-allowed

**Secondary (Outlined)**:
- Background: Transparent
- Border: 2px solid Orange
- Text: Dark
- Hover: Fill with Orange

**Tertiary (Text Only)**:
- Background: Transparent
- Text: Orange
- No border

### Toggles
(Page 50)
- Size variations: sm, md
- States: unpressed (gray), pressed (amber)
- Hover: Subtle background change
- Focused: Ring outline (amber)
- Disabled: Grayed out

### Checkboxes & Radio Buttons
(Page 51)
- Unchecked: Gray outline
- Checked: Amber fill with checkmark
- Some selection: Amber with minus icon
- Hover: Orange outline
- Focused: Amber ring
- Disabled: Grayed out

### Progress Bars
(Pages 52-56)
- Background: Light gray/cream
- Fill: Amber to Orange gradient
- Options for:
  - Digits to the right/below
  - In container above/below
  - Full circle / Half circle
- Rounded ends

### Sliders
(Pages 57-60)
- Track: Light gray/cream
- Active fill: Amber/Orange
- Handle: White circle with border
- Digits: Above or below
- Range slider: Two handles

## Border Radius
- **sm**: 4px - Small elements
- **md**: 8px - Standard
- **lg**: 16px - Buttons, cards
- **xl**: 24px - Large cards
- **pill**: 100px - Pill-shaped buttons
- **circle**: 100% - Avatar, icons

## Elevation/Shadows
Not explicitly defined in guidelines, but implied:
- Cards on cream background use subtle borders (Dark 200)
- Elevated surfaces use lighter cream shade
- Focus states use outline rather than shadow

## Interactive States

### Standard Pattern
1. **Default**: Amber background
2. **Hover**: Transition to Orange 400
3. **Active/Pressed**: Orange 500
4. **Focused**: Amber outline ring (2-3px, 2px offset)
5. **Disabled**: Gray with reduced opacity

## Logo Variations
(Pages 29-33, 35-39)
Multiple logo options presented:

**Option #1** (Recommended based on mockups):
- "M" icon in rounded square
- Mountain peak design
- Wordmark: Libre Franklin (adapted)

**Typography options**:
- Option #1: Playful curves
- Option #2: Forward slashes (motion)
- Option #3: Subtle baseline curve

Colors used in mockups:
- Icon: Amber/Dark on various backgrounds
- Adapts to light/dark backgrounds

## Application Examples

### Mobile Screens (Pages 35-39, 41)
- Clean layouts with cream backgrounds
- Dark text for readability in outdoor light
- Amber CTAs stand out
- Green for success/completion
- Generous spacing (16px grid)

### Light/Dark Mode (Pages 41, 46)
- Light: Cream background, dark text
- Dark: Dark background, cream text
- Amber/Orange accents work in both modes

## Brand Voice
"Let's move." - Tagline suggests:
- Active, motivational
- Inclusive ("Let's" not "Go")
- Simple, direct
- Forward-thinking

## Implementation Notes

### CSS Custom Properties
All tokens implemented as CSS custom properties in `css/base/_variables.css`:
- Color scale with semantic naming
- Typography scale
- Spacing system
- Border styles
- Interactive states

### Component Styling
- Buttons: `css/base/_buttons.css`
- Typography: `css/base/_typography.css`
- Forms: `css/base/_forms.css` (to be updated)

### Recommended Usage
1. Use Bebas Neue for all headings and display text
2. Use Switzer for all body copy and UI elements
3. Maintain 16px base spacing grid
4. Use Amber as primary interactive color
5. Use Cream as primary background
6. Ensure WCAG contrast ratios (Dark on Cream passes AAA)

## Design Principles
1. **Motion-focused**: Colors and shapes suggest movement and progress
2. **Outdoor aesthetic**: Warm, natural color palette
3. **Premium feel**: Clean, spacious layouts with quality typography
4. **Accessible**: High contrast text, clear interactive states
5. **Flexible**: Color system allows easy updates across design system
