import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ApiError } from '@/lib/api'
import { useAuth } from '@/lib/auth-context'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

function Register() {
  useDocumentTitle('Register')
  const navigate = useNavigate()
  const auth = useAuth()
  const passwordRef = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    localStorage.removeItem('devflow_user')
  }, [])

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)

    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') ?? '').trim()
    const password = String(formData.get('password') ?? '')

    if (!email || !password) return

    setLoading(true)
    try {
      await auth.register(email, password)
      navigate('/dashboard', { replace: true })
    } catch (err) {
      const message =
        err instanceof ApiError
          ? err.message
          : 'Something went wrong. Please try again.'
      setError(message)
      if (passwordRef.current) passwordRef.current.value = ''
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-[calc(100vh-4rem)] w-full items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/8 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl">
        <Card className="border-0 bg-transparent shadow-none">
          <CardHeader className="flex flex-col items-center gap-2 pb-4 text-center">
            <CardTitle className="text-2xl leading-tight text-white">
              Create an account
            </CardTitle>
            <CardDescription className="max-w-sm text-slate-400">
              Enter your email below to create your account and start tracking.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="register-email" className="text-slate-300">
                  Email
                </Label>
                <Input
                  id="register-email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  className="border-white/10 bg-slate-900/50 text-slate-200 placeholder:text-slate-500 focus-visible:ring-[#B3C5FF]/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-password" className="text-slate-300">
                  Password
                </Label>
                <Input
                  ref={passwordRef}
                  id="register-password"
                  name="password"
                  type="password"
                  required
                  className="border-white/10 bg-slate-900/50 text-slate-200 placeholder:text-slate-500 focus-visible:ring-[#B3C5FF]/50"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-md border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-200"
                >
                  {error}
                </p>
              )}

              <Button
                type="submit"
                className="w-full bg-[#B3C5FF] text-[#0E1322] hover:bg-[#B3C5FF]/80"
                disabled={loading}
              >
                {loading ? 'Creating account…' : 'Sign Up'}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="block space-y-2 text-center text-xs leading-6 text-slate-500">
            <p>
              By clicking continue, you agree to our{' '}
              <Link to="/terms-of-service" className="text-[#B3C5FF] hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy-policy" className="text-[#B3C5FF] hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
            <p>
              Already have an account?{' '}
              <Link to="/login" className="text-[#B3C5FF] hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}

export { Register }
