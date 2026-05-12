## ADDED Requirements

### Requirement: Hero section
The landing page MUST render a centered hero section with the exact headline "Master Your AI-Assisted Workflow" and the matching subheadline text.

#### Scenario: Landing page loads hero content
- **GIVEN** a visitor opens the landing page
- **WHEN** the page renders
- **THEN** the hero is centered and the headline, subheadline, CTA, and sub-text are visible above the fold

### Requirement: Metrics cards
The landing page MUST render three dark metric cards for Code Churn, Context Switching, and AI Efficiency.

#### Scenario: Visitor views the metrics grid
- **GIVEN** the landing page is open on a desktop viewport
- **WHEN** the content renders
- **THEN** the three cards appear in a responsive grid with the correct titles, descriptions, and icon treatments

### Requirement: Footer section
The landing page MUST include a full-width footer with a top border, DevFlow branding, legal links, and social icons.

#### Scenario: Footer appears at the bottom of the page
- **GIVEN** the landing page has rendered
- **WHEN** the user scrolls to the bottom
- **THEN** the footer is visible with muted link styling and hover states that transition to white
