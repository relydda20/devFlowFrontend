import { type FormEvent } from 'react'
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
import { useDocumentTitle } from '@/lib/useDocumentTitle'

function Register() {
  useDocumentTitle('Register')
  const navigate = useNavigate()

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')

    if (typeof email === 'string' && email.trim()) {
      localStorage.setItem('devflow_user', email)
      navigate('/dashboard', { replace: true })
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
                  id="register-password"
                  name="password"
                  type="password"
                  required
                  className="border-white/10 bg-slate-900/50 text-slate-200 placeholder:text-slate-500 focus-visible:ring-[#B3C5FF]/50"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#B3C5FF] text-[#0E1322] hover:bg-[#B3C5FF]/80"
              >
                Sign Up
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
