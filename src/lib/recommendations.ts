import { API_BASE_URL, ApiError } from './api'

export type RecommendationStateType =
  | 'stuck_loop'
  | 'lost_in_codebase'
  | 'ai_dependency_trap'
  | 'integration_hell'
  | 'analysis_paralysis'
  | 'normal'

export type RecommendationType =
  | 'change_approach'
  | 'map_system'
  | 'stop_using_ai'
  | 'simplify_problem'
  | 'execute'

export type UserAction = 'accepted' | 'dismissed' | 'snoozed' | 'expired' | null

export type Recommendation = {
  id: number
  state_type: RecommendationStateType
  confidence_score: number
  recommendation_type: RecommendationType
  recommendation_text: string
  reasoning: string | null
  user_action: UserAction
  created_at: string
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let response: Response
  try {
    response = await fetch(`${API_BASE_URL}/api/v1${path}`, {
      credentials: 'include',
      ...init,
    })
  } catch {
    throw new ApiError(0, 'Could not reach the server. Check your connection and try again.')
  }

  const text = await response.text()
  const parsed = text ? (JSON.parse(text) as unknown) : undefined

  if (!response.ok) {
    const message =
      parsed && typeof parsed === 'object' && 'error' in parsed && typeof (parsed as { error: unknown }).error === 'string'
        ? (parsed as { error: string }).error
        : `Request failed with status ${response.status}`
    throw new ApiError(response.status, message)
  }

  return parsed as T
}

export async function getRecent({ limit = 10 }: { limit?: number } = {}): Promise<{ recommendations: Recommendation[] }> {
  return request(`/recommendations?limit=${limit}`)
}

export type ActionRequest = { action: 'accepted' | 'dismissed' | 'snoozed' }

export async function postAction(
  id: number,
  action: ActionRequest['action'],
): Promise<{ id: number; user_action: string }> {
  return request(`/recommendations/${id}/action`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action }),
  })
}
