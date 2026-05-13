# Proposal: Add Tab Titles

## What
Add descriptive browser tab titles (document.title) for every top-level page in the SPA. Titles should follow the pattern `DevFlow | <Page title>` with a sensible default.

## Why
Right now routes may show a non-descriptive tab title (or the default bundle name). Adding clear tab titles improves usability, discoverability, and accessibility for users with many open tabs.

## Scope
- Introduce a small shared hook `useDocumentTitle` (or optional route meta solution) to set `document.title` from components.
- Update all top-level page components to call the hook with a page-specific title.
- Provide a default prefix `DevFlow |` and a default title for unknown routes.

## Impact
Low risk, small UI-only change. No backend changes. Minimal bundle impact (no external deps required).

## Rollout
Can be deployed immediately. Titles take effect on navigation; no migration required.

## Estimate
Half to one engineering day to implement and update pages, plus brief QA.
