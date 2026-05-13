# Tasks — Add Tab Titles

- [ ] Create hook `src/lib/useDocumentTitle.ts` (or `src/hooks/useDocumentTitle.ts`).
- [ ] Define default prefix `DevFlow |` and default title `DevFlow`.
- [ ] Add calls to `useDocumentTitle` in these pages:
  - `src/pages/Landing.tsx` → `DevFlow | Landing`
  - `src/pages/Docs.tsx` → `DevFlow | Docs`
  - `src/pages/Login.tsx` → `DevFlow | Login`
  - `src/pages/Register.tsx` → `DevFlow | Register`
  - `src/pages/PrivacyPolicy.tsx` → `DevFlow | Privacy Policy`
  - `src/pages/TermsOfService.tsx` → `DevFlow | Terms of Service`
  - `src/pages/Dashboard.tsx` → `DevFlow | Dashboard`
  - `src/pages/NotFound.tsx` → `DevFlow | Not Found`
- [ ] Sanity check: navigate each route in dev server and verify titles update.
- [ ] Add a simple unit test for the hook (optional).
- [ ] Run lint/format and create PR.

Owner: @TBD
Estimate: 0.5–1 day
