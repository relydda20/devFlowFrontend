## Why

The navbar login CTA currently uses a hover treatment that is too subtle against the dark glass header, which makes the interaction feel inconsistent and harder to perceive. Fixing it now improves visual clarity and keeps the primary auth action readable across the navbar's default, hover, and mobile states.

## What Changes

- Adjust the navbar login button hover styling so it remains clearly visible on the dark header background.
- Keep the hover treatment consistent between desktop and mobile navbar presentations.
- Preserve the existing navigation structure and route behavior while refining only the CTA interaction.

## Capabilities

### New Capabilities
- `navbar-login-hover`: Defines the readable hover treatment for the navbar login CTA across desktop and mobile layouts.

### Modified Capabilities

- None

## Impact

- Navbar component styling in the React frontend.
- Shared button treatment used by the login CTA.
- Visual contrast and interaction clarity for the primary sign-in action.
