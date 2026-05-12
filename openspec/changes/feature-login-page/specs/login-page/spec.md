## ADDED Requirements

### Requirement: Centered auth card
The system MUST render the `/login` page as a centered authentication card on the dark DevFlow background.

#### Scenario: Visitor opens the login page
- **WHEN** a visitor navigates to `/login`
- **THEN** the page shows a centered branded card with a title, supporting copy, and two sign-in actions

### Requirement: Provider sign-in actions
The system MUST render GitHub and Google sign-in buttons inside the login card and style them as dark, high-contrast actions.

#### Scenario: Visitor views the auth actions
- **WHEN** the login page renders
- **THEN** the GitHub and Google buttons appear stacked vertically with matching visual treatment

### Requirement: Mock sign-in redirect
The system MUST redirect the user to `/dashboard` when either provider button is activated.

#### Scenario: User chooses a sign-in provider
- **WHEN** the user clicks GitHub or Google sign-in
- **THEN** the system records the local mock auth state and navigates to `/dashboard`

### Requirement: Legal disclaimer
The system MUST display a disclaimer below the auth actions with inline links to the Terms of Service and Privacy Policy.

#### Scenario: Visitor reviews the card footer
- **WHEN** the auth card is visible
- **THEN** the disclaimer text appears and the legal links use the brand accent styling

### Requirement: Shared footer placement
The system MUST keep the shared footer visible at the bottom of the app layout so the login page inherits the same page chrome as the rest of the app.

#### Scenario: Visitor scrolls the login page
- **WHEN** the login page is rendered inside the app shell
- **THEN** the shared footer remains available at the bottom of the layout
