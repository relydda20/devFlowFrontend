# navbar-auth Specification

## Purpose
Provide the canonical spec for the DevFlow navbar authentication logic, including mock session handling, conditional navbar actions, and logout behavior.

## Requirements

### Requirement: Mock authentication state
The system MUST use `localStorage` to represent the current mock auth session for the app shell.

#### Scenario: User signs in through the login page
- **WHEN** the user clicks either OAuth button on the login page
- **THEN** the system MUST store `localStorage.setItem('devflow_user', 'engineer@example.com')` immediately before routing to `/dashboard`

### Requirement: Navbar conditional rendering
The system MUST render navbar actions based on whether `localStorage.getItem('devflow_user')` exists.

#### Scenario: User is signed out
- **WHEN** the navbar renders and no mock auth session is present
- **THEN** the center navigation links MUST render
- **AND** the "Log in" button MUST render
- **AND** the profile avatar MUST NOT render

#### Scenario: User is signed in
- **WHEN** the navbar renders and a mock auth session is present
- **THEN** the center navigation links MUST NOT render
- **AND** the "Log in" button MUST NOT render
- **AND** the profile avatar MUST render on the right side of the navbar

### Requirement: Profile avatar and dropdown
The system MUST render a Shadcn `DropdownMenu` for signed-in users, with the trigger implemented as a Shadcn `Avatar`.

#### Scenario: Signed-in user views the navbar
- **WHEN** the navbar renders in an authenticated state
- **THEN** the `AvatarFallback` MUST display the first letter of the email in uppercase
- **AND** the dropdown content MUST include a `DropdownMenuItem` labeled "Log out"

### Requirement: Mobile auth controls
The system MUST expose the same auth action in the mobile navbar menu that is shown on desktop.

#### Scenario: User opens the mobile menu
- **WHEN** the viewport is below the desktop breakpoint and the navbar menu is expanded
- **THEN** the mobile menu MUST show the same login or logout control as the desktop navbar

### Requirement: Logout action
The system MUST remove the mock auth session and navigate the user back to the landing page when they sign out.

#### Scenario: Signed-in user logs out
- **WHEN** the user activates the "Log out" action
- **THEN** the system MUST remove `localStorage.removeItem('devflow_user')`
- **AND** the navbar state MUST update to reflect a signed-out session
- **AND** the system MUST navigate the user to `/`
