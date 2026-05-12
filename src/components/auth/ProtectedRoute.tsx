import { type ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { useAuth } from '@/lib/auth-context'
import { AuthLoading } from './AuthLoading'

type ProtectedRouteProps = {
  children: ReactNode
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return <AuthLoading />
  }

  if (!isAuthenticated) {
    const redirect = `${location.pathname}${location.search}`
    const target = redirect && redirect !== '/' ? `/login?redirect=${encodeURIComponent(redirect)}` : '/login'
    return <Navigate to={target} replace />
  }

  return <>{children}</>
}

export { ProtectedRoute }
