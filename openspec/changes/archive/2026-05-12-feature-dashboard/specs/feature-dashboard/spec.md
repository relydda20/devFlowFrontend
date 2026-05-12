# Specification: Dashboard Components

## 1. Top Row: Metric Cards
The system SHALL render three Shadcn `Card` components.

### 1.1 Code Churn Card
- **Header**: "CODE CHURN" (left) and a Lucide `TriangleAlert` icon (right, orange).
- **Value**: "+34%"
- **Footer/Badge**: A Shadcn `Badge` (or styled div) with `bg-orange-500/10 text-orange-400 border-orange-500/20` reading "High instability detected".

### 1.2 Context Switching Card
- **Header**: "CONTEXT SWITCHING" (left) and a Lucide `CheckCircle2` icon (right, green).
- **Value**: "8.4" with smaller inline text "files/10m".
- **Footer/Badge**: A Shadcn `Badge` with `bg-emerald-500/10 text-emerald-400 border-emerald-500/20` reading "Healthy depth of focus".

### 1.3 Agentic Logs Card
- **Header**: "AGENTIC LOGS" (left) and a Lucide `Bot` icon (right, slate).
- **Value**: "72%" with smaller inline text "Copilot efficiency".
- **Footer**: A Shadcn `Progress` component set to `value={72}`.

## 2. Bottom Row Left: Time Series Chart
- **Container**: A Shadcn `Card` spanning 2 columns on large screens (`lg:col-span-2`).
- **Header**: "Workflow Vitality" (left) and "Last 24 Hours" (right, muted text).
- **Chart**: Utilize `recharts` to render an `AreaChart` or `LineChart`.
  - Provide a dummy array of data points (e.g., `{ time: '10:00', value: 40 }`).
  - The line/area MUST use a smooth curve (`type="monotone"` or `type="basis"`).
  - Stroke color: `#B3C5FF`. Fill: `<linearGradient>` fading from `#B3C5FF` to transparent.
  - Hide X and Y axes lines, but retain subtle horizontal grid lines (`stroke="rgba(255,255,255,0.05)"`).

## 3. Bottom Row Right: AI Insights
- **Container**: A Shadcn `Card` spanning 1 column (`lg:col-span-1`).
- **Header**: Lucide `Sparkles` icon next to "AI Insights".
- **Inner Content Box**: A nested `<div className="bg-[#0E1322] rounded-md p-4 border border-white/5">`.
- **Content**: 
  - **Warning**: "High code churn detected." (with orange alert icon).
  - **Recommendation**: "You have rewritten the same logic multiple times in the last hour. Consider stepping away for a 5-minute break to reset your focus and maintain long-term productivity."
- **Action Buttons**: Two buttons at the bottom.
  - "View Activity" (Ghost/Dark variant).
  - "Take a Break" (Outline variant with emerald text/border).