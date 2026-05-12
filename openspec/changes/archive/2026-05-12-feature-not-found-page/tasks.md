# Tasks: feature-not-found-page

- [ ] 1. Create `pages/NotFound.tsx`.
- [ ] 2. Implement the layout using `<div className="min-h-screen flex flex-col items-center justify-center bg-[#0E1322] px-4 text-center">`.
- [ ] 3. Add the typography: A "404" header (`text-6xl font-bold text-white tracking-tight mb-2`), a "Page not found" subheader (`text-2xl font-semibold text-slate-200 mb-4`), and descriptive text (`text-slate-400 mb-8`).
- [ ] 4. Add a `<Button>` that navigates to `/` when clicked. You can wrap it in a `<Link to="/">` or use the `useNavigate` hook.
- [ ] 5. Open `App.tsx` (or your main router file).
- [ ] 6. Import the `NotFound` component.
- [ ] 7. Add `<Route path="*" element={<NotFound />} />` as the absolute last route inside your `<Routes>` block.
