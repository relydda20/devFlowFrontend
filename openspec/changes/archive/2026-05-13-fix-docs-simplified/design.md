# Design — Docs Simplified

Goals
- Make the Docs page scannable: surface install, run, and testing steps first.
- Reduce sidebar entries to core anchors; hide advanced topics behind a "More" section.
- Keep visual style consistent with existing Cards and CodeBlock components.

Approach
1. Reorder `Docs.tsx` so the hero/header briefly explains purpose and next steps.
2. Keep one compact sidebar with 4–6 top anchors (Installation, Running, Testing, Troubleshooting, Changelog).
3. Shorten code blocks to single-line commands where possible and link to extended examples in repo.
4. Add a horizontal CTA area near the top with `Download` / `Get started` actions.

Accessibility
- Ensure anchor links have clear aria labels.
- Maintain semantic headings and readable font sizes.

Acceptance
- Docs page loads and shows reduced sidebar items.
- Installation/run/test steps visible without scrolling on a typical laptop viewport.
