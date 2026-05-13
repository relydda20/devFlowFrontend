# Spec — Add Tab Titles

## Title mapping
- `/` → `DevFlow | Landing`
- `/docs` → `DevFlow | Docs`
- `/login` → `DevFlow | Login`
- `/register` → `DevFlow | Register`
- `/privacy-policy` → `DevFlow | Privacy Policy`
- `/terms-of-service` → `DevFlow | Terms of Service`
- `/dashboard` → `DevFlow | Dashboard`
- `*` → `DevFlow | Not Found`

## Hook behavior
- API: `useDocumentTitle(title?: string, options?: { prefix?: string, separator?: string })`
- If `title` is falsy, use default `DevFlow` (or `options.defaultTitle` if provided).
- When called, runs a `useEffect` to set `document.title` (client-only).
- Should be a no-op on server (guard `typeof document !== 'undefined'`).

## Tests
- Hook unit test: calling hook sets `document.title` accordingly.
- Integration: navigate to each route, assert `document.title`.

## Notes
- Keep minimal and dependency-free. If project later needs meta tags, consider `react-helmet-async`.
