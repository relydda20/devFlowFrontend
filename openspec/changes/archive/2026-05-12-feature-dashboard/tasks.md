# Tasks: feature-dashboard

- [x] 1. Open `pages/Dashboard.tsx` (create if it does not exist).
- [x] 2. Update the main router in `App.tsx` to ensure `/dashboard` routes to this component.
- [x] 3. Ensure `recharts` is imported in `Dashboard.tsx`. Set up a dummy data array for the chart (e.g., 7-10 data points with a `time` and `vitality` score).
- [x] 4. Build the page wrapper: `min-h-screen bg-[#0E1322] pt-24 pb-12` (accounting for navbar), with an inner `<div className="max-w-7xl mx-auto px-6 space-y-6">`.
- [x] 5. Add the Page Header: "Dashboard" and subtitle "Real-time workflow analytics and agentic insights."
- [x] 6. Build the Top Metrics Grid: `<div className="grid grid-cols-1 md:grid-cols-3 gap-4">`.
- [x] 7. Implement the "Code Churn", "Context Switching", and "Agentic Logs" cards exactly as specified in `spec.md`, utilizing proper Shadcn `Card` sub-components, flex layouts, and custom Badge styling.
- [x] 8. Build the Bottom Grid: `<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">`.
- [x] 9. Implement the Chart Card (`lg:col-span-2`). Use Recharts `<ResponsiveContainer height={300}>` wrapping an `<AreaChart>`. Define a `<defs>` linear gradient for the fill, and map it to the area.
- [x] 10. Implement the AI Insights Card (`lg:col-span-1`). Build the nested dark box containing the specific text recommending a rest break based on high churn. Add the two action buttons at the bottom of the card.
