# WEHAGO Style Design System Guide

## Overview

This project follows a WEHAGO-inspired enterprise SaaS admin design system.

Core principles:
- Compact enterprise UI
- Data-first layout
- Minimal rounded corners
- Low shadow usage
- Strong border hierarchy
- High readability
- Dense information structure
- Consistent spacing system

Use Tailwind CSS utilities whenever possible.

---

# Foundation

## Typography

### Font Family

Use:
- Pretendard
- sans-serif fallback

```css
font-family: 'Pretendard', sans-serif;
```

---

## Font Rules

### Heading

| Type | Size | Weight | Line Height |
|---|---|---|---|
| H1 | 28px | 700 | 150% |
| H2 | 24px | 700 | 150% |
| H3 | 20px | 600 | 150% |
| H4 | 18px | 600 | 150% |

### Body

| Type | Size | Weight |
|---|---|---|
| Body Large | 16px | 400 |
| Body Medium | 14px | 400 |
| Body Small | 13px | 400 |
| Caption | 12px | 400 |

### Rules

- Prefer 14px body text
- Use medium/bold only for emphasis
- Avoid oversized typography
- Maintain compact readability

---

# Color System

## Primary

| Token | Color |
|---|---|
| primary-50 | #EFF6FF |
| primary-100 | #DBEAFE |
| primary-200 | #BFDBFE |
| primary-300 | #93C5FD |
| primary-400 | #60A5FA |
| primary-500 | #2563EB |
| primary-600 | #1D4ED8 |
| primary-700 | #1E40AF |
| primary-800 | #1E3A8A |
| primary-900 | #172554 |

Primary action color:
```txt
#2563EB
```

---

## Gray / Neutral

| Token | Color |
|---|---|
| gray-50 | #F9FAFB |
| gray-100 | #F3F4F6 |
| gray-200 | #E5E7EB |
| gray-300 | #D1D5DB |
| gray-400 | #9CA3AF |
| gray-500 | #6B7280 |
| gray-600 | #4B5563 |
| gray-700 | #374151 |
| gray-800 | #1F2937 |
| gray-900 | #111827 |

---

## Semantic Colors

### Positive

- bg: #DCFCE7
- text: #166534
- border: #86EFAC

### Negative

- bg: #FEE2E2
- text: #991B1B
- border: #FCA5A5

### Warning / Pending

- bg: #FEF3C7
- text: #92400E
- border: #FCD34D

---

# Radius

Use minimal radius.

| Token | Value |
|---|---|
| radius-xs | 2px |
| radius-sm | 4px |
| radius-md | 6px |
| radius-lg | 8px |

Rules:
- Prefer 6px
- Avoid large rounded UI
- Enterprise style over trendy UI

---

# Spacing

## Gap System

| Token | Value |
|---|---|
| gap-xs | 4px |
| gap-sm | 8px |
| gap-md | 12px |
| gap-lg | 16px |
| gap-xl | 24px |

---

# Shadow

Minimal shadows only.

```css
box-shadow:
0 1px 2px rgba(0,0,0,0.04);
```

Rules:
- Prefer border hierarchy
- Avoid floating cards
- Avoid soft neumorphism

---

# Layout Rules

## Admin Layout

### Sidebar

- Width: 240px
- Dark background
- Compact menu spacing

### Header

- Height: 56px
- White background
- Bottom border required

### Content Area

- Background: gray-50
- Card spacing: 16~24px

---

# Component Rules

# Button

## Height

| Size | Height |
|---|---|
| Small | 28px |
| Medium | 36px |
| Large | 40px |

---

## Primary Button

Style:
- Blue background
- White text
- Medium weight
- Minimal radius

Tailwind:
```txt
bg-blue-600 text-white border border-blue-600
```

Hover:
```txt
bg-blue-700
```

---

## Secondary Button

Style:
- White background
- Gray border
- Gray text

Tailwind:
```txt
bg-white border border-gray-300 text-gray-700
```

---

## Ghost Button

Style:
- Transparent background
- Borderless
- Gray text

---

## Rules

- Avoid oversized CTA buttons
- Prefer compact widths
- Use icon + text layout carefully
- Keep enterprise density

---

# Input

## Height

| Size | Height |
|---|---|
| Small | 32px |
| Medium | 36px |
| Large | 40px |

---

## Style

Default:
```txt
border-gray-300 bg-white
```

Focus:
```txt
border-blue-500 ring-1 ring-blue-500
```

Error:
```txt
border-red-500
```

Success:
```txt
border-green-500
```

Warning:
```txt
border-yellow-500
```

---

## Rules

- Use subtle borders
- Avoid heavy shadows
- Compact forms preferred
- Labels align left

---

# Table

## Rules

- Dense table layout
- Compact row height
- Clear border separation
- Sticky header preferred
- Hover row state required

---

## Table Header

Style:
- gray-50 background
- medium font
- border-bottom

---

## Table Row

Hover:
```txt
bg-gray-50
```

Selected:
```txt
bg-blue-50
```

---

## Status Badge

### Approved
- Green

### Pending
- Orange

### Rejected
- Red

### Completed
- Blue

Badge rules:
- Small size
- Rounded-full
- Medium weight

---

# Card

## Style

- White background
- Border required
- Radius: 8px
- Minimal shadow

---

# Modal

## Rules

- Width: 480~720px
- Header + body + footer structure
- Footer right aligned
- Background dim required

---

# Interaction Rules

## Hover

Use subtle hover only.

Avoid:
- excessive animations
- floating transitions
- dramatic scaling

---

## Transition

```css
transition: all 0.2s ease;
```

---

# Design Tone

This project must feel:

- enterprise
- structured
- efficient
- compact
- trustworthy
- data-driven

Avoid:
- playful UI
- oversized spacing
- heavy shadows
- glassmorphism
- neumorphism
- excessive gradients

---

# Cursor Implementation Rules

When generating UI:
- Always prioritize admin usability
- Prefer table layouts over cards for data
- Use compact spacing
- Use consistent component heights
- Follow the color tokens strictly
- Reuse shared components
- Maintain WEHAGO-style density
