import { API_BASE_URL, ApiError } from './api'

export type Grain = 'daily' | 'session'

export type ChurnSeriesPoint = {
  date: string
  lines_added: number
  lines_deleted: number
  ratio: number | null
}

export type ChurnResponse = {
  ratio: number | null
  total_lines_added: number
  total_lines_deleted: number
  series?: ChurnSeriesPoint[]
  definition: string
  from: string
  to: string
  grain: Grain
}

export type TopFile = {
  path: string
  count: number
}

export type ContextSwitchingSeriesPoint = {
  date: string
  switch_count: number
  rapid_switch_count: number
}

export type ContextSwitchingResponse = {
  switch_count: number
  rapid_switch_count: number
  top_files: TopFile[]
  series?: ContextSwitchingSeriesPoint[]
  definition: string
  from: string
  to: string
  grain: Grain
}

async function getJson<T>(path: string, params: Record<string, string | number>): Promise<T> {
  const query = new URLSearchParams(
    Object.entries(params).map(([k, v]) => [k, String(v)]),
  ).toString()

  let response: Response
  try {
    response = await fetch(`${API_BASE_URL}/api/v1${path}?${query}`, {
      method: 'GET',
      credentials: 'include',
    })
  } catch {
    throw new ApiError(
      0,
      'Could not reach the server. Check your connection and try again.',
    )
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

type ChurnParams = { from: string; to: string; grain?: Grain }
type ContextSwitchingParams = { from: string; to: string; grain?: Grain; topN?: number }

export async function getChurn({ from, to, grain = 'daily' }: ChurnParams): Promise<ChurnResponse> {
  return getJson<ChurnResponse>('/metrics/churn', { from, to, grain })
}

export async function getContextSwitching({
  from,
  to,
  grain = 'daily',
  topN = 10,
}: ContextSwitchingParams): Promise<ContextSwitchingResponse> {
  return getJson<ContextSwitchingResponse>('/metrics/context-switching', {
    from,
    to,
    grain,
    top_n: topN,
  })
}
