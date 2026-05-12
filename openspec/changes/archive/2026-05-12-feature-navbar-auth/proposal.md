# Proposal: Authenticated Navbar State

## Objective
Modify the global Navbar to respond to the user's authentication state, providing a cleaner focused view for the dashboard and a profile menu for account actions.

## Context
When a user logs in, the MVP should simulate a session. The Navbar must read this session and dynamically hide marketing links ("Home", "Docs"). The "Log in" button must be replaced by a user profile avatar that opens a dropdown menu to allow logging out and clearing the session.