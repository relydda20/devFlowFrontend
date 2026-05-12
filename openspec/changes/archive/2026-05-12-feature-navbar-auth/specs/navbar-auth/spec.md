# Specification: Navbar Authentication Logic

## 1. Mock Authentication State
- The system SHALL use `localStorage` to mock an active session.
- When a user clicks either OAuth button on the Login page (`Login.tsx`), the system MUST set `localStorage.setItem('devflow_user', 'engineer@example.com')` immediately before routing to `/dashboard`.

## 2. Navbar Conditional Rendering (`Navbar.tsx`)
- The Navbar SHALL utilize a React `useEffect` or standard state initialization to check for the existence of `localStorage.getItem('devflow_user')`.
- If the item exists (`isAuthenticated === true`):
  - The center navigation links ("Home", "Docs") MUST NOT render.
  - The "Log in" button MUST NOT render.
  - A user profile Avatar MUST render on the far right.

## 3. Profile Avatar & Dropdown
- The system SHALL render a Shadcn `<DropdownMenu>`.
- The trigger SHALL be a Shadcn `<Avatar>`.
- The `<AvatarFallback>` SHALL display the first letter of the email (e.g., "E" for engineer@example.com) and utilize uppercase text.
- The dropdown content MUST contain a `<DropdownMenuItem>` labeled "Log out".

## 4. Logout Action
- Clicking "Log out" SHALL execute a function that:
  1. Removes the session (`localStorage.removeItem('devflow_user')`).
  2. Updates the local Navbar state to trigger a re-render.
  3. Navigates the user back to the landing page (`navigate('/')`).