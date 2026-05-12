import { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

type PublicRouteProps = {
  children: ReactNode
}

function PublicRoute({ children }: PublicRouteProps) {
  if (localStorage.getItem('devflow_user')) {
    return <Navigate to="/dashboard" replace />
  }

  return <>{children}</>
}

export { PublicRoute }
