# Specification: 404 Route Integration

## 1. Not Found Component (`NotFound.tsx`)
- The system SHALL render a full-screen, centered container.
- **Content**:
  - A prominent "404" heading (e.g., `text-6xl font-bold`).
  - A subtitle: "Page not found".
  - A brief description: "The page you are looking for doesn't exist or has been moved."
  - A Shadcn `<Button>` reading "Return Home".
- **Action**: Clicking the button SHALL use `react-router-dom` to navigate back to the root route (`/`).

## 2. Router Integration (`App.tsx`)
- The system SHALL define a catch-all route in the main router setup.
- This route MUST use the path `*` and be placed at the very bottom of the `<Routes>` list.
- It SHALL map to the `<NotFound />` component.