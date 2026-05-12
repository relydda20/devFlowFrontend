# Spec — Add Tab Titles

## Title mapping
- `/` → `Landing — DevFlow`
- `/docs` → `Docs — DevFlow`
- `/login` → `Login — DevFlow`
- `/register` → `Register — DevFlow`
- `/privacy-policy` → `Privacy Policy — DevFlow`
- `/terms-of-service` → `Terms of Service — DevFlow`
- `/dashboard` → `Dashboard — DevFlow`
- `*` → `Not Found — DevFlow`

## Hook behavior
- API: `useDocumentTitle(title?: string, options?: { suffix?: string })`
- If `title` is falsy, use default `DevFlow` (or `options.defaultTitle` if provided).
- When called, runs a `useEffect` to set `document.title` (client-only).
- Should be a no-op on server (guard `typeof document !== 'undefined'`).

## Tests
- Hook unit test: calling hook sets `document.title` accordingly.
- Integration: navigate to each route, assert `document.title`.

## Notes
- Keep minimal and dependency-free. If project later needs meta tags, consider `react-helmet-async`.
