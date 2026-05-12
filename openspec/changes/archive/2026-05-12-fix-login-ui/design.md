## Context

The login page already exists, but the current composition feels slightly off: the card does not read as firmly centered, the glass effect is missing, and the header hierarchy competes with itself. This is a visual refinement pass rather than a functional auth change.

## Goals / Non-Goals

**Goals:**
- Center the login card in the viewport.
- Give the card a glassmorphism surface with better depth.
- Make the title and supporting copy read as one clear stack.
- Center the button contents so the icon and label feel balanced.

**Non-Goals:**
- Changing the login route or auth flow.
- Adding new fields or extra auth options.
- Introducing backend authentication.

## Decisions

- Use a single centered card with backdrop blur and a translucent border.
  - Why: that creates the glassmorphism effect without changing the overall layout model.
  - Alternatives considered: a split layout or a full-page panel. Those would be larger changes than the user asked for.

- Keep the header text minimal.
  - Why: removing the separate "LOGIN" label reduces visual noise and makes the main title feel like the primary entry point.
  - Alternatives considered: keeping the label as a badge or eyebrow. That would make the header busier than desired.

- Center button content with consistent icon/text alignment.
  - Why: the buttons should feel deliberate and balanced, especially with provider-style actions.
  - Alternatives considered: left-aligned icon+text. That feels more like a generic action list than a polished login surface.

## Risks / Trade-offs

- [Risk] Stronger glass effects can hurt readability if the border/background balance is too subtle. -> Mitigation: use a visible translucent fill, a crisp border, and a shadow for separation.
- [Risk] Centering the card more aggressively may reduce breathing room on small screens. -> Mitigation: keep responsive padding and a max-width cap.

## Open Questions

- Should the login buttons keep their provider labels, or should they be simplified further in a later pass?
- Do we want the footer to remain on the page shell only, or should the login route eventually get a route-specific variant?
