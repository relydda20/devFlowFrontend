# Proposal: Protected and Public Route Wrappers

## Objective
Secure the `/dashboard` route so it is only accessible to authenticated users, and prevent authenticated users from accessing the `/login` and `/register` pages.

## Context
We are currently using a mock JWT approach via `localStorage` (`devflow_user`). We need standard React Router wrapper components that intercept navigation, check the `localStorage` state, and execute redirects using `<Navigate />` to enforce access control.