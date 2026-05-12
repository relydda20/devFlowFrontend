# Design System: Docs Page

## Colors & Theme
- **Main Background**: `#0E1322` (Deep Navy).
- **Sidebar Background**: Transparent or slightly lighter navy (e.g., `#0a0c14`).
- **Content Cards**: `#161B2B` (or `bg-slate-900/50`) with subtle borders (`border-white/5`), matching the reference design.
- **Code Blocks**: Pure black (`#000000`) or deep slate (`bg-slate-950`) with a subtle border and monospace text (`text-slate-300`).
- **Accent/Active Links**: `#B3C5FF` (Soft Blue) for active sidebar items and inline links.

## Typography & Layout
- **Layout**: 
  - Left Sidebar: Fixed width (e.g., `w-64`), sticky positioning, hidden on mobile.
  - Main Content: Flexible width, taking up the remaining space, constrained by a `max-w-4xl` wrapper for readability.
- **Headings**: `text-white` with tight tracking. Main page title is large (`text-4xl`). Section headers use icons (e.g., Lucide `Download`, `Terminal`, `Activity`).
- **Body Text**: `text-slate-400` for instructions and descriptions.