# Tasks — Add Tab Titles

- [ ] Create hook `src/lib/useDocumentTitle.ts` (or `src/hooks/useDocumentTitle.ts`).
- [ ] Define default suffix ` — DevFlow` and default title `DevFlow`.
- [ ] Add calls to `useDocumentTitle` in these pages:
  - `src/pages/Landing.tsx` → `Landing — DevFlow`
  - `src/pages/Docs.tsx` → `Docs — DevFlow`
  - `src/pages/Login.tsx` → `Login — DevFlow`
  - `src/pages/Register.tsx` → `Register — DevFlow`
  - `src/pages/PrivacyPolicy.tsx` → `Privacy Policy — DevFlow`
  - `src/pages/TermsOfService.tsx` → `Terms of Service — DevFlow`
  - `src/pages/Dashboard.tsx` → `Dashboard — DevFlow`
  - `src/pages/NotFound.tsx` → `Not Found — DevFlow`
- [ ] Sanity check: navigate each route in dev server and verify titles update.
- [ ] Add a simple unit test for the hook (optional).
- [ ] Run lint/format and create PR.

Owner: @TBD
Estimate: 0.5–1 day
