## ADDED Requirements

### Requirement: Readable login hover state
The system MUST render the navbar login CTA with a hover state that remains clearly distinguishable against the dark header background.

#### Scenario: Desktop hover is visible
- **WHEN** a user hovers the navbar login button on desktop
- **THEN** the button hover appearance is visually distinct from its resting state
- **AND** the label remains readable against the navbar background

### Requirement: Consistent CTA feedback
The system MUST apply equivalent hover feedback to the navbar login CTA in desktop and mobile navbar surfaces.

#### Scenario: Mobile CTA matches desktop intent
- **WHEN** the user opens the mobile navbar menu and hovers or taps the login CTA
- **THEN** the CTA uses the same visual treatment family as the desktop login CTA

