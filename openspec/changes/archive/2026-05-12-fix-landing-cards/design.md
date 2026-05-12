## Context

The landing page already has a three-card feature grid, but the cards read a bit flat against the dark background. This change is a visual refinement only, focused on depth, spacing, and alignment inside the existing card structure.

## Goals / Non-Goals

**Goals:**
- Make the card section feel more polished and intentional.
- Improve depth and separation using subtle surface treatment.
- Tighten spacing so the icon, title, description, and footer feel balanced.

**Non-Goals:**
- Changing the landing page content.
- Altering the number of cards or the card copy.
- Reworking the landing page layout outside the feature grid.

## Decisions

- Keep the three-card grid and existing content intact.
  - Why: the current information architecture already works, so this is a polish pass rather than a redesign.
  - Alternatives considered: adding new cards or rearranging sections. That would expand scope beyond the requested fix.

- Increase the card surface contrast with subtle translucency and borders.
  - Why: the dark background needs a clearer separation to make the cards feel like product components.
  - Alternatives considered: stronger shadows or bright backgrounds. Those would feel heavier and less aligned with the rest of the app.

- Fine-tune internal spacing rather than changing the card layout structure.
  - Why: the current card hierarchy is correct; it just needs more breathing room and a cleaner visual rhythm.
  - Alternatives considered: restructuring the header/footer areas. That risks changing the meaning of the cards instead of their presentation.

## Risks / Trade-offs

- [Risk] Adding too much contrast could make the cards feel disconnected from the page. -> Mitigation: keep the improvements subtle and consistent with the existing dark theme.
- [Risk] Spacing tweaks might affect responsive balance. -> Mitigation: keep the card structure unchanged and verify the layout on desktop and mobile.

## Open Questions

- Should the card background remain translucent, or should we standardize a shared card surface token later?
- Do we want to apply the same polish to any other landing page callout sections in a later pass?
