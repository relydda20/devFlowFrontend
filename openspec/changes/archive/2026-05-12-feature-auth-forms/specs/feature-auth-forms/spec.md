# Specification: Register & Login Flow

## 1. Login Page Updates (`Login.tsx`)
- **Remove**: Both GitHub and Google OAuth buttons.
- **Form Fields**: 
  - Email: `<Label>` and `<Input type="email" placeholder="name@example.com" required />`.
  - Password: `<Label>` and `<Input type="password" required />`.
- **Submit Action**: A main `<Button type="submit">Sign In</Button>`.
- **Logic**: Use an `onSubmit` handler on the `<form>`. Prevent default, extract the email, set `localStorage.setItem('devflow_user', email)`, and `navigate('/dashboard')`.
- **Footer**: Update text below the button: "Don't have an account? Sign up" where "Sign up" links to `/register`.

## 2. Register Page (`Register.tsx`)
- **Layout**: Replicate the exact centered, glassmorphism `Card` layout from the Login page (`min-h-screen flex items-center... bg-[#161B2B]/60 backdrop-blur-xl`).
- **Header**: 
  - Title: "Create an account"
  - Subtitle: "Enter your email below to create your account and start tracking."
- **Form Fields**:
  - Email (`type="email"`).
  - Password (`type="password"`).
- **Submit Action**: A main `<Button type="submit">Sign Up</Button>`.
- **Logic**: Same mock JWT logic as Login (`setItem` and `navigate`).
- **Footer**: Text reading "Already have an account? Sign in" where "Sign in" links to `/login`.
- **Terms**: Include the standard "By clicking continue, you agree to our Terms of Service and Privacy Policy" disclaimer below the form.