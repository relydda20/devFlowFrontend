## Why

DevFlow already hints at privacy and terms content in the footer, but the links currently point to hash anchors instead of real pages. We need dedicated legal pages so visitors can review the app's terms and privacy commitments without dead ends.

## What Changes

- Add standalone Privacy Policy and Terms of Service pages.
- Replace footer hash links with real route-based navigation.
- Add a shared legal page layout so the pages look consistent and are easy to maintain.
- Include effective date and support/contact details in the legal pages.

## Capabilities

### New Capabilities
- `legal-pages`: Public privacy and terms pages with shared layout, route access, and footer navigation.

### Modified Capabilities
None.

## Impact

- `src/App.tsx` will gain new public routes for the legal pages.
- `src/components/layout/Footer.tsx` will point to the new routes instead of fragment anchors.
- New legal page components and shared content/data files will be added under `src/pages/` or a nearby feature folder.
- No backend API or external dependency changes are required.
