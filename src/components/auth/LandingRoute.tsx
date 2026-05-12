import { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '@/lib/auth-context'
import { AuthLoading } from './AuthLoading'

type LandingRouteProps = {
  children: ReactNode
}

function LandingRoute({ children }: LandingRouteProps) {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <AuthLoading />
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  return <>{children}</>
}

export { LandingRoute }
