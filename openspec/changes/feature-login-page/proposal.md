## Why

DevFlow needs a focused login experience that matches the product's dark visual system and gives users a clear path into the dashboard. The current mock login entry point is functional but not polished enough for a primary auth screen.

## What Changes

- Introduce a branded login page for the `/login` route.
- Replace the placeholder auth entry with a centered login card.
- Add provider-style sign-in actions for GitHub and Google.
- Keep the sign-in behavior lightweight and client-side for the MVP.
- Ensure the shared footer remains visible at the bottom of the layout.

## Capabilities

### New Capabilities
- `login-page`: A dedicated login experience with a branded auth card, provider buttons, legal disclaimer, and responsive layout.

### Modified Capabilities
- None.

## Impact

- Affects `src/pages/Login.tsx` and the app shell layout.
- Reuses the shared `Footer` component for consistent page chrome.
- Continues to use the local mock auth flow to redirect into the dashboard.
