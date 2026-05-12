import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'

import * as api from './api'
import type { User } from './api'
import { AuthContext, type AuthContextValue } from './auth-context'

type AuthProviderProps = { children: ReactNode }

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setLoading] = useState(true)

  const refresh = useCallback(async () => {
    try {
      const result = await api.me()
      setUser(result)
    } catch (err) {
      console.warn('[devflow] auth refresh failed', err)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    // Auth bootstrap on mount: resolve current session from /auth/me.
    // setState within this effect is intentional — it IS the synchronization with the server.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void refresh()
  }, [refresh])

  const login = useCallback(
    async (email: string, password: string) => {
      await api.login({ email, password })
      await refresh()
    },
    [refresh],
  )

  const register = useCallback(
    async (email: string, password: string, username?: string) => {
      await api.register({ email, password, username })
      await refresh()
    },
    [refresh],
  )

  const logout = useCallback(async () => {
    try {
      await api.logout()
    } catch (err) {
      console.warn('[devflow] logout request failed; clearing local state anyway', err)
    }
    setUser(null)
    setLoading(false)
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: user !== null,
      isLoading,
      login,
      register,
      logout,
      refresh,
    }),
    [user, isLoading, login, register, logout, refresh],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthProvider }
