# Proposal: Email/Password Auth Flow

## Objective
Pivot authentication from mock OAuth to a classic JWT-based email and password flow. Implement a new Registration page and update the existing Login page to support standard user entry.

## Context
The application requires a smooth, industry-standard authentication flow. The glassmorphism card design from the Login page will be retained and reused for the Register page. The forms will mock a JWT login by setting local storage upon submission, routing the user directly to the dashboard.