## Why

The current login screen works, but its layout and hierarchy do not feel polished enough for a primary auth surface. We need the card centered more intentionally and the visual treatment to feel like part of the same glassy DevFlow system used elsewhere.

## What Changes

- Re-center the login card so it sits in the middle of the viewport more clearly.
- Apply a glassmorphism surface treatment to the login card.
- Simplify the card header so the "Welcome to DevFlow" title stands on its own.
- Place the supporting sign-in copy directly below the title.
- Center the icon and label inside each login button.

## Capabilities

### New Capabilities
- `login-page`: A refined login screen layout with centered glassmorphism styling, clearer header hierarchy, and centered button content.

### Modified Capabilities
- None.

## Impact

- Affects `src/pages/Login.tsx`.
- May require small adjustments to shared card or button class usage for alignment.
- No routing or auth-behavior changes are required.
