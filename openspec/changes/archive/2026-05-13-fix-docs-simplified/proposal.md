# Proposal: Simplify Docs Content & Navigation (fix-docs-simplified)

## What
Trim and reorganize the existing Docs page to present only high-value setup and usage guidance. Collapse deep sections, reduce redundant copy, and expose primary actions (install, run, test) up-front.

## Why
The current Docs page is lengthy and includes secondary details that distract new users. A simplified docs experience will reduce time-to-first-success and make the content easier to scan.

## Scope
- Reorganize `/src/pages/Docs.tsx` content into concise sections: Installation, Running, Testing, Troubleshooting.
- Reduce sidebar items to the most-used anchors and add clear CTAs for install/run.
- Update code examples to be minimal and copy-review where necessary.

## Impact
UI-only change; low risk. No API or build changes. May update copy that marketing/repo owners want to review.

## Rollout
Can be merged to `develop` and hot-fixed if copy adjustments requested.

## Estimate
2–4 hours (developer + quick review).
