## ADDED Requirements

### Requirement: Centered glass card
The system MUST render the login card in the visual center of the viewport using a glassmorphism surface treatment.

#### Scenario: Visitor opens the login page
- **WHEN** a visitor navigates to `/login`
- **THEN** the login card appears centered with a translucent background, visible border, and depth separation from the page background

### Requirement: Clear title hierarchy
The system MUST display the "Welcome to DevFlow" title with the supporting sign-in sentence placed directly below it.

#### Scenario: Visitor views the card header
- **WHEN** the login page renders
- **THEN** the card header shows only the main title and the supporting description beneath it without an extra LOGIN label beside the title

### Requirement: Centered button content
The system MUST center the icon and label within each login button so the action reads as a balanced, single-unit control.

#### Scenario: Visitor views the provider actions
- **WHEN** the login buttons are visible
- **THEN** each button centers its icon and text horizontally within the button surface

### Requirement: Preserve login behavior
The system MUST preserve the existing mock sign-in redirect behavior after the UI refinement.

#### Scenario: User clicks a login button
- **WHEN** the user activates either login button
- **THEN** the system stores the mock auth state and redirects to `/dashboard`
