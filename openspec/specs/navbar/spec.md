## ADDED Requirements

### Requirement: Shared top navigation
The system MUST provide a reusable navbar that can be displayed across app pages as a shared top-level navigation surface.

#### Scenario: Navbar appears on app pages
- **WHEN** a page includes the shared app shell
- **THEN** the navbar is visible at the top of the layout

### Requirement: Primary navigation actions
The system MUST display a brand entry point and a set of primary navigation actions in the navbar.

#### Scenario: User sees primary actions
- **WHEN** the navbar is rendered on a wide screen
- **THEN** the brand entry point and primary navigation actions are visible at the same time

### Requirement: Mobile navigation toggle
The system MUST provide a mobile-friendly interaction for revealing and hiding navbar links on smaller screens.

#### Scenario: User opens mobile menu
- **WHEN** the viewport is below the desktop breakpoint
- **AND** the user activates the navbar menu toggle
- **THEN** the navigation actions become visible in a compact mobile layout
