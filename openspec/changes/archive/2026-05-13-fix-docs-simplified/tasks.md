# Tasks: fix-docs-simplified

- [ ] 1. Open `pages/Docs.tsx`.
- [ ] 2. Locate the sidebar navigation menu. Remove the old anchor links and replace them strictly with "Installation" (`href="#installation"`) and "How to Use" (`href="#how-to-use"`).
- [ ] 3. Delete the following main content sections completely: "Running the Extension", "Testing Telemetry Events", and "Synchronization & Status".
- [ ] 4. Rewrite the "Installation & Setup" section to match the text and ordered list defined in `spec.md`, maintaining the dark Shadcn `<Card>` layout. Use a code block component for `extension-name.vsix`.
- [ ] 5. Add a new section below Installation titled "How to Use" matching the content in `spec.md`.
- [ ] 6. Ensure no routing, global layout elements, or Navbar logic is broken by this change.
