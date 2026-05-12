import { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

type ProtectedRouteProps = {
  children: ReactNode
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  if (!localStorage.getItem('devflow_user')) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

export { ProtectedRoute }
