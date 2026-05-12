# Specification: Landing Page & Footer

## 1. Hero Section
- **Layout**: Centered flex column (`flex-col items-center text-center`), adequate top padding for fixed navbar.
- **Headline**: "Master Your AI-Assisted Workflow" (`text-4xl md:text-5xl font-bold text-white`).
- **Subheadline**: "Analytics for the modern engineer. Track code churn, context switching, and AI efficiency directly in VS Code. Stop guessing, start measuring."
- **Call to Action (CTA)**: 
  - Shadcn `Button` utilizing `#B3C5FF` background (`bg-[#B3C5FF] text-[#0E1322] hover:bg-[#B3C5FF]/80`).
  - Text: "Download for VS Code". Includes Lucide `Download` icon.
- **Sub-text**: Below the button, display "Requires VS Code 1.80+ • Free for individual use" using a monospace font, size small (`text-xs text-slate-500 font-mono`).

## 2. Metrics Cards Section
The system SHALL render a responsive 3-column grid. Each card uses Shadcn `Card` with a dark background.

### 2.1 Card 1: Code Churn
- **Icon Box**: Small square with dark blue background, containing a Lucide `Activity` icon.
- **Title**: "Code Churn"
- **Description**: "Visualize exactly how much generated code survives refactoring. Identify brittle prompt outputs instantly."

### 2.2 Card 2: Context Switching
- **Icon Box**: Small square with dark purple background, containing a Lucide `ArrowLeftRight` icon.
- **Title**: "Context Switching"
- **Description**: "Track the cost of tab-hopping between editor, browser, and AI chat windows."

### 2.3 Card 3: AI Efficiency
- **Icon Box**: Small square with dark green background, containing a Lucide `Zap` icon.
- **Title**: "AI Efficiency"
- **Description**: "Measure the true ROI of your Copilot usage. Compare typing speed against generation acceptance rates."

## 3. Footer Section
- **Layout**: Full-width, placed at the bottom of the page. Top border (`border-t border-white/10`) to separate from content. Padding on Y-axis.
- **Colors**: Background `#0E1322` (transparent to let main body show). Text elements SHALL use `text-slate-400` to ensure visibility without competing with main content. Hover states transition to `text-white`.
- **Elements**: Flex space-between on desktop, stacked on mobile.
  - **Left**: DevFlow Logo (local PNG) and "© 2026 DevFlow. All rights reserved."
  - **Right**: Standard links ("Privacy Policy", "Terms of Service") and social icons (Lucide `Github`, `Twitter`).