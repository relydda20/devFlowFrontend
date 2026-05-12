## ADDED Requirements

### Requirement: Public legal routes
The system MUST provide public routes for a Privacy Policy page and a Terms of Service page, and the routes MUST be accessible without authentication.

#### Scenario: Visitor opens a legal page directly
- **GIVEN** a visitor is not signed in
- **WHEN** the visitor navigates directly to the Privacy Policy route or the Terms of Service route
- **THEN** the requested legal page is displayed successfully

### Requirement: Legal page structure
The system MUST render each legal page with a clear page title, an effective date, and sectioned content blocks.

#### Scenario: Visitor reads a legal page
- **GIVEN** a legal page is open
- **WHEN** the page content is rendered
- **THEN** the title, effective date, and multiple content sections are visible in the main document area

### Requirement: Footer legal navigation
The system MUST link to the Privacy Policy and Terms of Service routes from the shared footer using route-based navigation.

#### Scenario: Visitor uses footer links
- **GIVEN** the shared footer is visible
- **WHEN** the visitor activates the Privacy Policy or Terms of Service link
- **THEN** the app navigates to the corresponding legal route instead of jumping to an in-page fragment
