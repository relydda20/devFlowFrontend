# Design System: Dashboard

## Colors & Theme
- **Page Background**: `#0E1322` (Deep Navy).
- **Card Background**: `#161B2B` (with `border-white/5`).
- **Chart Line / Accents**: `#B3C5FF` (Soft Blue).
- **Metric Status Colors**:
  - High Churn / Warning: Orange/Red (`text-orange-400`, `bg-orange-400/10`).
  - Healthy Focus: Emerald Green (`text-emerald-400`, `bg-emerald-400/10`).

## Layout Structure
- **Main Container**: `max-w-7xl mx-auto p-6 md:p-8 space-y-6`.
- **Top Row**: 3-column CSS Grid (`grid-cols-1 md:grid-cols-3`).
- **Bottom Row**: 2-column CSS Grid, with the chart taking up roughly 2/3 of the space and the insights card taking 1/3 (`grid-cols-1 lg:grid-cols-3`, chart spans 2).

## Typography
- **Header**: `text-3xl font-bold text-white`.
- **Card Titles**: `text-xs font-mono text-slate-400 uppercase tracking-wider`.
- **Main Metric Values**: `text-3xl font-semibold text-white mt-2`.