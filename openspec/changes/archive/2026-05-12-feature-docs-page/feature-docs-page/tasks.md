# Tasks: feature-docs-page

- [x] 1. Create `pages/Docs.tsx`.
- [x] 2. Update `App.tsx` (or your router) to include the `/docs` route pointing to `Docs.tsx`.
- [x] 3. Build the two-column layout in `Docs.tsx`: a sticky sidebar on the left and a scrollable content area on the right. Ensure the background is `bg-[#0E1322]`.
- [x] 4. Implement the Sidebar: Add "CONTENTS" heading and anchor links (`#installation`, `#running`, `#events`, `#sync`).
- [x] 5. Implement the Main Header: "Getting Started with DevFlow" and its subtitle.
- [x] 6. Build the "Installation & Setup" section. Use a Shadcn `<Card>` with `bg-[#161B2B] border-white/5` to enclose the text. Use custom code block components (dark background, monospace) for terminal commands.
- [x] 7. Build the "Running the Extension" section following the structure in `spec.md`.
- [x] 8. Build the "Testing Telemetry Events" section. Use bullet points or small nested cards for the different event types (File Save, Text Change, etc.).
- [x] 9. Build the "Synchronization & Status" section detailing manual flush, status checks, and auto-sync behavior.
- [x] 10. Ensure headings align with sidebar anchors and include respective Lucide icons next to section titles.
- [x] 11. Make the layout responsive: hide the sidebar on mobile (`hidden md:block`) and ensure the main content utilizes `w-full`.
