## Context

The navbar uses a dark glass header, and the login CTA sits on top of that surface in both desktop and mobile layouts. The current hover treatment is not strong enough to reliably signal interactivity, especially when the button is rendered against the dark header background.

## Goals / Non-Goals

**Goals:**
- Make the navbar login hover state clearly visible on the dark header.
- Keep desktop and mobile CTA treatment visually consistent.
- Preserve the existing route behavior and navbar layout.

**Non-Goals:**
- Redesigning the full navbar.
- Changing authentication flow or route structure.
- Introducing a new button system or dependency.

## Decisions

- Use a shared button style adjustment rather than a navbar-only hover hack.
  - Rationale: the login CTA appears in more than one navbar surface, and a shared style keeps behavior aligned.
  - Alternatives considered: adding ad hoc hover classes directly in the navbar, which would be faster but more brittle.

- Preserve the current dark-on-light login CTA contrast model.
  - Rationale: the CTA already stands out as the primary action; the fix only needs to improve the hover feedback, not invert the visual hierarchy.
  - Alternatives considered: switching to a ghost-style hover, which would reduce emphasis on the primary action.

- Keep hover and focus behavior visually close.
  - Rationale: users who rely on keyboard or pointer interactions should see a similar feedback pattern.
  - Alternatives considered: separate hover and focus treatments, which can introduce inconsistent affordance.

## Risks / Trade-offs

- [Risk] A stronger hover style may feel visually heavier than the rest of the navbar. -> Mitigation: keep the change limited to the CTA and preserve existing spacing/shape.
- [Risk] Adjusting shared button styles could affect other buttons using the same variant. -> Mitigation: scope the change to the login CTA variant or introduce a dedicated navbar CTA treatment.
- [Risk] The issue may also depend on the dark header background and not only the button color. -> Mitigation: validate the button against both the transparent and scrolled header states.

## Migration Plan

1. Update the login CTA hover styling in the shared navbar/button layer.
2. Verify the desktop navbar and mobile menu CTA both retain clear hover feedback.
3. If another button variant is impacted, narrow the change to the navbar login CTA only.

## Open Questions

- Should the hover change apply only to the navbar login CTA or to every button that uses the same primary style?
- Do we want the hover state to be a color shift, elevation shift, or both?
