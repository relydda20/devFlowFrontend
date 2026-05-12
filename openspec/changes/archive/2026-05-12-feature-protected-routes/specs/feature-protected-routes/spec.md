# Specification: Route Protection Logic

## 1. Protected Route Component (`ProtectedRoute.tsx`)
- The system SHALL define a wrapper component that takes React `children`.
- It MUST check for the existence of `localStorage.getItem('devflow_user')`.
- If the session **does not exist**, it SHALL return a `<Navigate to="/login" replace />` component from `react-router-dom`.
- If the session **exists**, it SHALL render the passed `children`.

## 2. Public Route Component (`PublicRoute.tsx`)
- The system SHALL define a wrapper component for authentication pages.
- It MUST check for the existence of `localStorage.getItem('devflow_user')`.
- If the session **exists**, it SHALL return a `<Navigate to="/dashboard" replace />`.
- If the session **does not exist**, it SHALL render the passed `children`.

## 3. Router Integration (`App.tsx`)
- The `/dashboard` route MUST be wrapped inside the `<ProtectedRoute>`.
- The `/login` and `/register` routes MUST be wrapped inside the `<PublicRoute>`.