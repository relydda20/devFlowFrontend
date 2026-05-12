# Tasks: feature-navbar

- [ ] 1. Ensure `react-router-dom` is installed and the app is wrapped in `BrowserRouter`.
- [ ] 2. Setup `react-router-dom` links for "Features" (`/`), "Docs" (`/docs`), and "Login" (`/login`). Ensure there is NO Dashboard route or button.
- [ ] 3. Create placeholder components for the routes (`pages/Landing.tsx`, `pages/Docs.tsx`, `pages/Login.tsx`).
- [ ] 4. Build the Navbar shell with a dynamic class based on the `isScrolled` state (`useScroll` hook or `useEffect`).
- [ ] 5. Apply glassmorphism logic: 
    - `transparent` when at top.
    - `bg-[#0a0c14]/80 backdrop-blur-md border-b border-white/10` when scrolled.
- [ ] 6. Style the Navigation links ("Features", "Docs") using `text-[#B3C5FF] hover:text-white`.
- [ ] 7. Implement the Login button using Shadcn and Lucide `LogIn` icon. Set the button background to `bg-[#B3C5FF]`.
- [ ] 8. Ensure the navbar is responsive (hide links on mobile, keep logo and login button visible).