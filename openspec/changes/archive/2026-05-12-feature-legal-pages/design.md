## Context

The app shell already renders a shared navbar and footer around the current routes, but the footer's legal links point to `#privacy` and `#terms` anchors rather than actual pages. The app is a client-side React Router SPA, so the legal experience needs to work as normal public routes inside the existing shell.

## Goals / Non-Goals

**Goals:**
- Provide dedicated public Privacy Policy and Terms of Service pages.
- Make the footer links navigate to real routes instead of fragment anchors.
- Keep the legal pages visually consistent with the rest of the DevFlow site.
- Keep the implementation lightweight and fully client-side.

**Non-Goals:**
- Creating a backend-driven legal content management system.
- Adding user-specific or authenticated legal workflows.
- Replacing the app shell or redesigning unrelated pages.

## Decisions

- Use two explicit routes, `/privacy-policy` and `/terms-of-service`, instead of a single parameterized legal route.
  - Rationale: the footer needs direct, readable destinations and the app only needs two pages today.
  - Alternatives considered: a single `/legal/:slug` route would reduce route count, but it makes the footer and page titles less explicit.

- Build a shared legal page layout component and feed it page-specific content from local data.
  - Rationale: the pages will share the same structure, but keeping the content in one place makes maintenance easier and avoids duplication.
  - Alternatives considered: duplicating the markup in two page components would be simpler up front, but it would increase copy drift risk.

- Keep the legal pages inside the existing app shell rather than rendering them outside the navbar/footer.
  - Rationale: this preserves the current brand experience and keeps navigation consistent.
  - Alternatives considered: a separate shell could be useful for a legal microsite, but that would add unnecessary complexity for this change.

## Risks / Trade-offs

- Legal copy can drift from the intended policy language -> Mitigation: store the copy in a dedicated page module and keep the content easy to review in code.
- Route changes may break old links -> Mitigation: use stable, descriptive route paths and keep the footer updated in the same change.
- The pages may look too generic if content is sparse -> Mitigation: use a consistent sectioned layout with clear headings, metadata, and support contact placement.

## Migration Plan

1. Add the new legal page components and shared layout.
2. Register the new routes in the app router.
3. Update the footer links to use route navigation.
4. Verify direct navigation, refresh handling, and the shared shell on the new pages.
5. If needed, adjust copy or section ordering before the change is archived.

## Open Questions

- Should the legal copy include a cookie policy now, or wait for a separate change?
- Who owns final legal review of the text before release?
