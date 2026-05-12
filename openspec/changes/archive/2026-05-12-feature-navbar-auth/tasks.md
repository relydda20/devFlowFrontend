# Tasks: feature-navbar-auth

- [x] 1. Open `pages/Login.tsx`. Update the mock authentication functions on both the GitHub and Google buttons to execute `localStorage.setItem('devflow_user', 'engineer@example.com')` right before calling `navigate('/dashboard')`.
- [x] 2. Open `components/layout/Navbar.tsx`.
- [x] 3. Import `useNavigate`, `useLocation` from `react-router-dom`, and the Shadcn `Avatar`, `AvatarFallback`, `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, and `DropdownMenuItem` components.
- [x] 4. Create local state in `Navbar.tsx` (e.g., `const [userEmail, setUserEmail] = useState<string | null>(null)`).
- [x] 5. Implement a `useEffect` that listens to `useLocation().pathname`. Inside the effect, read `localStorage.getItem('devflow_user')` and update the `userEmail` state. This ensures the navbar updates instantly when routing from `/login` to `/dashboard`.
- [x] 6. Wrap the center navigation links (`<div className="hidden gap-6 md:flex">...</div>`) in a conditional block: `{!userEmail && ( ... )}` so they disappear when logged in.
- [x] 7. Replace the "Log in" button area with a conditional block. If `!userEmail`, show the "Log in" button. If `userEmail`, show the Profile Dropdown.
- [x] 8. Implement the Profile Dropdown using Shadcn components. The `AvatarFallback` should display `userEmail.charAt(0).toUpperCase()` with classes `bg-slate-800 text-[#B3C5FF]`.
- [x] 9. Implement the "Log out" `DropdownMenuItem`. Give it an `onClick` handler that calls `localStorage.removeItem('devflow_user')`, sets `userEmail` to `null`, and calls `navigate('/')`.
