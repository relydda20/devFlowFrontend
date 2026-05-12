## Context

The app already has a `/login` route and a mock auth flow. This change turns that entry point into a polished auth screen that matches the dark product theme, uses the shared UI primitives, and keeps the redirect behavior simple.

## Goals / Non-Goals

**Goals:**
- Present a centered, branded login card.
- Offer two clear provider-style sign-in actions.
- Keep the current client-side redirect flow.
- Preserve responsive behavior and visual consistency with the rest of the app.

**Non-Goals:**
- Real OAuth integration.
- Backend authentication or account management.
- Changing the navbar routing model.

## Decisions

- Use a compact centered card with a strong surface contrast.
  - Why: it keeps the auth path focused and easy to scan.
  - Alternatives considered: a split marketing/auth layout or a full-page form. Those add complexity without improving the MVP flow.

- Use GitHub and Google as the visible sign-in actions.
  - Why: these are familiar provider patterns and match the lightweight mock-auth strategy.
  - Alternatives considered: email/password fields or more providers. Those would imply a different auth strategy and more UI surface.

- Keep the mock auth redirect local to the client.
  - Why: this lets the login page work without backend dependencies.
  - Alternatives considered: API-based auth or external identity providers. Those are out of scope for the current feature.

- Mount the shared footer at the app shell level so it appears on all pages.
  - Why: it keeps page chrome consistent and avoids duplicating the footer in each route.
  - Alternatives considered: page-specific footer mounting. That would make layout behavior harder to keep consistent.

## Risks / Trade-offs

- [Risk] Provider buttons can look like real OAuth integration even though the behavior is mocked. -> Mitigation: keep the UI labels clear and preserve the simple redirect behavior only for the MVP.
- [Risk] A global footer changes page height on routes that already assume page-local footer placement. -> Mitigation: keep route content spacing flexible and remove duplicate footer mounts from route pages.
- [Risk] The login card could feel too sparse. -> Mitigation: include concise helper copy and a legal disclaimer for context.

## Open Questions

- Should the next iteration replace mock redirects with real OAuth?
- Do we want any extra helper links like "Forgot password?" or "Create account" in a later version?
