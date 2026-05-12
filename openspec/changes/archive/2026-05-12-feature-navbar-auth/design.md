# Design System: Authenticated Navbar

## Layout & Visibility
- **Unauthenticated (Logged Out)**: Show Logo, "Home", "Docs", and "Log in" button.
- **Authenticated (Logged In)**: Show Logo and Profile Avatar ONLY. Hide the center navigation links to maintain focus on the dashboard.

## Colors & Components
- **Avatar**: Shadcn `Avatar` component. 
- **Avatar Fallback**: Deep slate background (`bg-slate-800`) with the Soft Blue accent text (`text-[#B3C5FF]`) to match the primary CTA color.
- **Dropdown Menu**: Dark theme (`bg-[#161B2B] border-white/10`).
- **Logout Text**: Standard `text-slate-300`, transitioning to red or highlighted on hover.