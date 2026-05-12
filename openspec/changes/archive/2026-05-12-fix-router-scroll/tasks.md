# Tasks: fix-router-scroll

- [x] 1. Create a new utility component at `components/utils/ScrollToTop.tsx`.
- [x] 2. Implement the component to listen to `useLocation().pathname` and fire `window.scrollTo(0, 0)` on change. The component should return `null`.
- [x] 3. Open `App.tsx` (or your main router file).
- [x] 4. Import `ScrollToTop` and mount it directly inside the `BrowserRouter`, right above your `Routes` definition.
