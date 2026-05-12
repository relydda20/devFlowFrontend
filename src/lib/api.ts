const FALLBACK_API_URL = 'http://localhost:3000'

function resolveApiBaseUrl(): string {
  const configured = import.meta.env.VITE_API_URL
  if (typeof configured === 'string' && configured.length > 0) {
    return configured.replace(/\/$/, '')
  }

  if (typeof window !== 'undefined') {
    const host = window.location.hostname
    if (host !== 'localhost' && host !== '127.0.0.1') {
      console.warn(
        '[devflow] VITE_API_URL is not set; falling back to http://localhost:3000. ' +
          'API requests will likely fail outside local development.',
      )
    }
  }

  return FALLBACK_API_URL
}

export const API_BASE_URL = resolveApiBaseUrl()

export type AuthProvider = 'password' | 'google' | 'github'

export type User = {
  id: string
  username: string
  email: string | null
  provider: AuthProvider
}

export class ApiError extends Error {
  readonly status: number
  constructor(status: number, message: string) {
    super(message)
    this.status = status
    this.name = 'ApiError'
  }
}

type RequestBody = Record<string, unknown> | undefined

async function request<T>(method: string, path: string, body?: RequestBody): Promise<T> {
  const init: RequestInit = {
    method,
    credentials: 'include',
    headers: body !== undefined ? { 'Content-Type': 'application/json' } : undefined,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  }

  let response: Response
  try {
    response = await fetch(`${API_BASE_URL}/api/v1${path}`, init)
  } catch {
    throw new ApiError(
      0,
      'Could not reach the server. Check your connection and try again.',
    )
  }

  if (response.status === 204) {
    return undefined as T
  }

  const text = await response.text()
  const parsed = text ? (JSON.parse(text) as unknown) : undefined

  if (!response.ok) {
    const message =
      (parsed && typeof parsed === 'object' && 'error' in parsed && typeof (parsed as { error: unknown }).error === 'string'
        ? (parsed as { error: string }).error
        : null) || `Request failed with status ${response.status}`
    throw new ApiError(response.status, message)
  }

  return parsed as T
}

export type LoginRequest = { email: string; password: string }
export type RegisterRequest = { email: string; password: string; username?: string }
export type AuthResponse = { user: User; token: string }

export async function login(body: LoginRequest): Promise<AuthResponse> {
  return request<AuthResponse>('POST', '/auth/login', body)
}

export async function register(body: RegisterRequest): Promise<AuthResponse> {
  return request<AuthResponse>('POST', '/auth/register', body)
}

/**
 * Returns the current user if authenticated, or null on 401.
 * Other errors (network, 5xx) re-throw so the caller can decide.
 */
export async function me(): Promise<User | null> {
  try {
    return await request<User>('GET', '/auth/me')
  } catch (err) {
    if (err instanceof ApiError && err.status === 401) {
      return null
    }
    throw err
  }
}

export async function logout(): Promise<void> {
  await request<void>('POST', '/auth/logout')
}
