# Tasks: feature-protected-routes

- [x] 1. Create a new directory: `components/auth`.
- [x] 2. Create `components/auth/ProtectedRoute.tsx`. Import `Navigate` from `react-router-dom`. Implement the logic: if `!localStorage.getItem('devflow_user')`, return `<Navigate to="/login" replace />`, otherwise return `<>{children}</>`.
- [x] 3. Create `components/auth/PublicRoute.tsx`. Import `Navigate` from `react-router-dom`. Implement the logic: if `localStorage.getItem('devflow_user')`, return `<Navigate to="/dashboard" replace />`, otherwise return `<>{children}</>`.
- [x] 4. Open `App.tsx` (or your main router configuration file).
- [x] 5. Import `ProtectedRoute` and `PublicRoute`.
- [x] 6. Wrap the `<Dashboard />` component element inside `<ProtectedRoute>`. Example: `<Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />`.
- [x] 7. Wrap the `<Login />` and `<Register />` component elements inside `<PublicRoute>`.
