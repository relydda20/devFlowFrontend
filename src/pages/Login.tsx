import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'

function Login() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleMockLogin = () => {
    setLoading(true)
    localStorage.setItem('mock-auth', 'true')
    navigate('/dashboard', { replace: true })
  }

  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/50">Login</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
          Mock auth entry point
        </h2>
        <p className="mt-4 text-sm leading-7 text-white/70">
          This button simulates sign-in by storing a mock auth flag and sending you to the
          dashboard.
        </p>
        <Button
          type="button"
          className="mt-6 w-full bg-white text-[#0a0c14] hover:bg-white/90"
          onClick={handleMockLogin}
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Continue to dashboard'}
        </Button>
      </section>
    </main>
  )
}

export { Login }
