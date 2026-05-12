# Tasks: feature-auth-forms

- [x] 1. Open `pages/Login.tsx`.
- [x] 2. Remove the existing OAuth buttons and the `<CardContent>` flex layout holding them.
- [x] 3. Import `Input` and `Label` from the components library.
- [x] 4. Inside `<CardContent>`, create a `<form onSubmit={handleLogin}>` containing a vertical stack (`space-y-4`) for the Email input, Password input, and the "Sign In" button.
- [x] 5. Implement `handleLogin`: `e.preventDefault()`, grab the email value, call `localStorage.setItem('devflow_user', email)`, and `navigate('/dashboard')`.
- [x] 6. Update the footer link below the form to route users to `/register`.
- [x] 7. Create `pages/Register.tsx`.
- [x] 8. Copy the structural layout (viewport centering, glassmorphism card) from `Login.tsx` to `Register.tsx`.
- [x] 9. Implement the Registration form (Email, Password, "Sign Up" button) and its `onSubmit` handler following the same mock auth logic.
- [x] 10. Add the footer link routing back to `/login`, and the Terms/Privacy disclaimer.
- [x] 11. Open `App.tsx` (or your main router) and add the `/register` route pointing to the new `Register` component.
