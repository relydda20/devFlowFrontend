import { useEffect, useRef, useState } from 'react'

import { ApiError } from './api'
import { useAuth } from './auth-context'

export type MetricState<T> = {
  data: T | null
  isLoading: boolean
  error: ApiError | null
  refetch: () => void
}

const REFETCH_DEBOUNCE_MS = 1000

/**
 * Generic data-fetching hook for dashboard metrics.
 *
 * Behavior:
 * - Fires `fetcher` on mount and whenever the document becomes visible (after a 1s debounce).
 * - On 401, calls `auth.logout()` so `ProtectedRoute` redirects to /login.
 * - On other errors, stores the error in state for the caller to render.
 *
 * Caller contract: `fetcher` MUST be stable across renders (wrap in `useCallback` or
 * define module-level). The hook does NOT track changes to `fetcher` identity.
 */
export function useMetric<T>(fetcher: () => Promise<T>): MetricState<T> {
  const auth = useAuth()
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<ApiError | null>(null)
  const fetcherRef = useRef(fetcher)
  const lastFetchStartedAt = useRef(0)
  const triggerRef = useRef(0)
  const [trigger, setTrigger] = useState(0)

  // Keep the latest fetcher reachable without making it a hook dep.
  useEffect(() => {
    fetcherRef.current = fetcher
  }, [fetcher])

  useEffect(() => {
    let cancelled = false
    lastFetchStartedAt.current = Date.now()
    // Synchronizing UI loading state with the new request.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true)
    setError(null)

    fetcherRef
      .current()
      .then((result) => {
        if (cancelled) return
        setData(result)
        setLoading(false)
      })
      .catch((err: unknown) => {
        if (cancelled) return
        if (err instanceof ApiError && err.status === 401) {
          void auth.logout()
          return
        }
        if (err instanceof ApiError) {
          setError(err)
        } else {
          setError(new ApiError(0, err instanceof Error ? err.message : String(err)))
        }
        setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [auth, trigger])

  // Refetch on tab return, debounced.
  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.visibilityState !== 'visible') return
      if (Date.now() - lastFetchStartedAt.current < REFETCH_DEBOUNCE_MS) return
      triggerRef.current += 1
      setTrigger(triggerRef.current)
    }
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => document.removeEventListener('visibilitychange', onVisibilityChange)
  }, [])

  const refetch = () => {
    triggerRef.current += 1
    setTrigger(triggerRef.current)
  }

  return { data, isLoading, error, refetch }
}
