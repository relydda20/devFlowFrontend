import { useCallback, useState } from 'react'
import { ChevronDown, ChevronRight, RefreshCw, Sparkles } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ApiError } from '@/lib/api'
import {
  getRecent,
  postAction,
  type Recommendation,
  type RecommendationStateType,
  type UserAction,
} from '@/lib/recommendations'
import { useMetric } from '@/lib/useMetric'

function stateBadgeClass(state: RecommendationStateType): string {
  switch (state) {
    case 'stuck_loop':
      return 'border-orange-500/20 bg-orange-500/10 text-orange-400 hover:bg-orange-500/10'
    case 'lost_in_codebase':
      return 'border-amber-500/20 bg-amber-500/10 text-amber-400 hover:bg-amber-500/10'
    case 'ai_dependency_trap':
      return 'border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-300 hover:bg-fuchsia-500/10'
    case 'integration_hell':
      return 'border-rose-500/20 bg-rose-500/10 text-rose-300 hover:bg-rose-500/10'
    case 'analysis_paralysis':
      return 'border-sky-500/20 bg-sky-500/10 text-sky-300 hover:bg-sky-500/10'
    case 'normal':
    default:
      return 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/10'
  }
}

function actionLabel(action: UserAction): string | null {
  if (action === null) return null
  if (action === 'accepted') return 'Accepted'
  if (action === 'dismissed') return 'Dismissed'
  if (action === 'snoozed') return 'Snoozed'
  return 'Expired'
}

function timeAgo(iso: string): string {
  const seconds = Math.max(0, Math.floor((Date.now() - new Date(iso).getTime()) / 1000))
  if (seconds < 60) return 'just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

type RowProps = {
  rec: Recommendation
  onAction: (id: number, action: 'accepted' | 'dismissed' | 'snoozed') => Promise<void>
}

function RecommendationRow({ rec, onAction }: RowProps) {
  const [expanded, setExpanded] = useState(false)
  const [busy, setBusy] = useState(false)
  const [actionError, setActionError] = useState<string | null>(null)
  const [localAction, setLocalAction] = useState<UserAction>(rec.user_action)

  const handleClick = async (action: 'accepted' | 'dismissed' | 'snoozed') => {
    setBusy(true)
    setActionError(null)
    try {
      await onAction(rec.id, action)
      setLocalAction(action)
    } catch (err) {
      setActionError(err instanceof ApiError ? err.message : 'Failed to record action')
    } finally {
      setBusy(false)
    }
  }

  const label = actionLabel(localAction)

  return (
    <li className="rounded-md border border-white/5 bg-[#0E1322] p-3">
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className={stateBadgeClass(rec.state_type)}>
              {rec.state_type.replace(/_/g, ' ')}
            </Badge>
            <span className="text-xs text-slate-500">{timeAgo(rec.created_at)}</span>
            {label && (
              <span className="text-xs font-medium text-slate-300">{label}</span>
            )}
          </div>
          <p className="text-sm leading-6 text-slate-200">{rec.recommendation_text}</p>

          {rec.reasoning && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200"
            >
              {expanded ? <ChevronDown className="size-3" /> : <ChevronRight className="size-3" />}
              {expanded ? 'Hide reasoning' : 'Why this?'}
            </button>
          )}

          {expanded && rec.reasoning && (
            <p className="rounded-md border border-white/5 bg-white/5 p-3 text-xs leading-5 text-slate-300">
              {rec.reasoning}
            </p>
          )}

          {localAction === null && (
            <div className="flex flex-wrap items-center gap-2">
              <Button
                type="button"
                size="sm"
                variant="accent"
                disabled={busy}
                onClick={() => handleClick('accepted')}
                className="h-8 bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25"
              >
                Accept
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                disabled={busy}
                onClick={() => handleClick('snoozed')}
                className="h-8 border-slate-400/20 text-slate-300 hover:bg-slate-400/10"
              >
                Snooze
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                disabled={busy}
                onClick={() => handleClick('dismissed')}
                className="h-8 border-white/10 text-slate-400 hover:bg-white/5"
              >
                Dismiss
              </Button>
              {actionError && (
                <span className="text-xs text-rose-300">{actionError}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

function RecommendationsPanel() {
  const fetcher = useCallback(() => getRecent({ limit: 10 }), [])
  const { data, isLoading, error, refetch } = useMetric(fetcher)
  const [overrides, setOverrides] = useState<Record<number, UserAction>>({})

  const handleAction = async (id: number, action: 'accepted' | 'dismissed' | 'snoozed') => {
    await postAction(id, action)
    setOverrides((prev) => ({ ...prev, [id]: action }))
  }

  const recommendations: Recommendation[] = (data?.recommendations ?? []).map((rec) => {
    const override = overrides[rec.id]
    return override !== undefined ? { ...rec, user_action: override } : rec
  })

  return (
    <Card className="lg:col-span-1 bg-[#161B2B] border-white/5">
      <CardHeader className="items-center gap-3 pb-3">
        <div className="flex size-10 items-center justify-center rounded-2xl bg-white/5 text-[#B3C5FF]">
          <Sparkles className="size-5" />
        </div>
        <CardTitle className="text-lg font-semibold text-white">AI Insights</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {isLoading ? (
          <div className="space-y-3">
            {[0, 1].map((i) => (
              <div key={i} className="h-20 w-full animate-pulse rounded-md bg-white/5" />
            ))}
          </div>
        ) : error ? (
          <div className="space-y-2">
            <p className="text-sm text-rose-300">Couldn&apos;t load recommendations</p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={refetch}
              className="h-8 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <RefreshCw className="mr-2 size-3" />
              Retry
            </Button>
          </div>
        ) : recommendations.length === 0 ? (
          <p className="text-sm leading-6 text-slate-400">
            No insights yet. They&apos;ll appear here when we spot something worth surfacing.
          </p>
        ) : (
          <ul className="space-y-3">
            {recommendations.map((rec) => (
              <RecommendationRow key={rec.id} rec={rec} onAction={handleAction} />
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

export { RecommendationsPanel }
