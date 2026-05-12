import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

function GithubMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 shrink-0" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.54 2.87 8.39 6.84 9.75.5.1.66-.22.66-.5v-1.9c-2.78.62-3.37-1.23-3.37-1.23-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.89 1.57 2.33 1.12 2.9.85.09-.66.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.38-2.04 1.02-2.76-.1-.26-.44-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.21 2.47.11 2.73.64.72 1.02 1.64 1.02 2.76 0 3.94-2.33 4.8-4.56 5.05.36.32.68.95.68 1.92v2.85c0 .28.16.6.67.5A10.15 10.15 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function GoogleMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 shrink-0" fill="none">
      <path
        d="M21.35 11.1h-9.18v2.97h5.26c-.23 1.26-.95 2.32-2.02 3.03v2.52h3.26c1.9-1.75 2.99-4.33 2.99-7.42 0-.72-.06-1.26-.31-2.1Z"
        fill="#4285F4"
      />
      <path
        d="M12.17 22c2.7 0 4.96-.89 6.62-2.38l-3.26-2.52c-.9.6-2.05.96-3.36.96-2.58 0-4.77-1.74-5.55-4.08H3.26v2.57A10 10 0 0 0 12.17 22Z"
        fill="#34A853"
      />
      <path
        d="M6.62 13.98a5.98 5.98 0 0 1 0-3.96V7.45H3.26a10 10 0 0 0 0 8.1l3.36-2.57Z"
        fill="#FBBC05"
      />
      <path
        d="M12.17 5.1c1.47 0 2.78.51 3.82 1.5l2.87-2.87C17.12 2.15 14.86 1 12.17 1A10 10 0 0 0 3.26 7.45l3.36 2.57C7.4 6.84 9.59 5.1 12.17 5.1Z"
        fill="#EA4335"
      />
    </svg>
  )
}

function Login() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleMockLogin = () => {
    setLoading(true)
    localStorage.setItem('mock-auth', 'true')
    navigate('/dashboard', { replace: true })
  }

  return (
    <main className="flex min-h-[calc(100vh-4rem)] w-full items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/8 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl">
        <Card className="border-0 bg-transparent shadow-none">
          <CardHeader className="flex flex-col items-center gap-2 pb-4 text-center">
            <CardTitle className="text-2xl leading-tight text-white">
              Welcome to DevFlow
            </CardTitle>
            <CardDescription className="max-w-sm text-slate-400">
              Sign in to access your analytics dashboard and continue your workflow tracking.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            <Button
              type="button"
              className="w-full justify-center gap-3 bg-slate-800 text-white hover:bg-slate-700"
              onClick={handleMockLogin}
              disabled={loading}
            >
              <GithubMark />
              {loading ? 'Signing in...' : 'Continue with GitHub'}
            </Button>

            <Button
              type="button"
              className="w-full justify-center gap-3 bg-slate-800 text-white hover:bg-slate-700"
              onClick={handleMockLogin}
              disabled={loading}
            >
              <GoogleMark />
              {loading ? 'Signing in...' : 'Continue with Google'}
            </Button>
          </CardContent>

          <CardFooter className="block text-center text-xs leading-6 text-slate-500">
            <span>By continuing, you agree to our </span>
            <button type="button" className="text-[#B3C5FF] hover:underline">
              Terms of Service
            </button>
            <span> and </span>
            <button type="button" className="text-[#B3C5FF] hover:underline">
              Privacy Policy
            </button>
            <span>.</span>
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}

export { Login }
