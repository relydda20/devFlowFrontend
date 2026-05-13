# Design — Add Tab Titles

## Approach
1. Add a small hook `useDocumentTitle(title?: string, options?: {suffix?: string})` in `src/lib` or `src/hooks`.
   - Behavior: on mount/update set `document.title = title ? `${title}${suffix}` : defaultTitle`.
   - Default suffix: ` — DevFlow` (configurable per call).
2. Update each top-level page component (Landing, Docs, Login, Register, PrivacyPolicy, TermsOfService, Dashboard, NotFound, etc.) to call `useDocumentTitle('Page Title')` near the top of the component.
3. For components that already manage side effects on mount, calling the hook is safe (pure DOM effect).

## Alternatives considered
- Use `react-helmet-async` for advanced meta handling (not necessary for title-only change).
- Use route metadata and a single router-level effect to read `route.meta.title` — more work to wire route definitions.

## Accessibility
- Titles are useful for screen reader users switching tabs and for keyboard users navigating multiple tabs.

## Acceptance
- Each page shows the correct tab label when navigated to.
- Unknown routes use `Not Found — DevFlow`.
- No runtime errors from missing `document` (hook guards for SSR if needed).
