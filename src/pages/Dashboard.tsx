import { useCallback, useState } from 'react'
import {
  Bot,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  TriangleAlert,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getChurn, getContextSwitching } from '@/lib/metrics'
import { useDocumentTitle } from '@/lib/useDocumentTitle'
import { useMetric } from '@/lib/useMetric'

// Tuning thresholds — adjust once we have real usage data.
const HIGH_CHURN_RATIO = 0.5
const LOW_SWITCH_PER_DAY = 5
const HIGH_SWITCH_PER_DAY = 20

type DateRange = {
  weekFrom: string
  weekTo: string
  todayFrom: string
  todayTo: string
}

function computeRange(): DateRange {
  const now = new Date()
  const to = now.toISOString().slice(0, 10)
  const sevenAgo = new Date(now.getTime() - 6 * 24 * 60 * 60 * 1000)
  const from = sevenAgo.toISOString().slice(0, 10)
  return { weekFrom: from, weekTo: to, todayFrom: to, todayTo: to }
}

function formatRatio(ratio: number | null): string {
  if (ratio === null) return '—'
  return `${Math.round(ratio * 100)}%`
}

function Dashboard() {
  useDocumentTitle('Dashboard')

  // Compute range ONCE per mount so date math doesn't churn renders or refetches.
  const [range] = useState<DateRange>(() => computeRange())

  const fetchWeekChurn = useCallback(
    () => getChurn({ from: range.weekFrom, to: range.weekTo, grain: 'daily' }),
    [range.weekFrom, range.weekTo],
  )
  const fetchWeekSwitching = useCallback(
    () =>
      getContextSwitching({
        from: range.weekFrom,
        to: range.weekTo,
        grain: 'daily',
        topN: 5,
      }),
    [range.weekFrom, range.weekTo],
  )
  const fetchTodaySwitching = useCallback(
    () =>
      getContextSwitching({
        from: range.todayFrom,
        to: range.todayTo,
        grain: 'daily',
        topN: 5,
      }),
    [range.todayFrom, range.todayTo],
  )
  const fetchTodayChurn = useCallback(
    () => getChurn({ from: range.todayFrom, to: range.todayTo, grain: 'daily' }),
    [range.todayFrom, range.todayTo],
  )

  const weekChurn = useMetric(fetchWeekChurn)
  const weekSwitching = useMetric(fetchWeekSwitching)
  const todaySwitching = useMetric(fetchTodaySwitching)
  const todayChurn = useMetric(fetchTodayChurn)

  return (
    <main className="min-h-screen bg-[#0E1322] pt-6 pb-12 text-slate-300">
      <div className="mx-auto max-w-7xl space-y-6 px-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            Real-time workflow analytics and agentic insights. Last 7 days.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Code Churn — weekly */}
          <Card className="bg-[#161B2B] border-white/5">
            <CardHeader className="items-start justify-between gap-3 pb-3">
              <CardTitle className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Code Churn
              </CardTitle>
              <div className="flex size-10 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
                <TriangleAlert className="size-5" />
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {weekChurn.isLoading ? (
                <div className="h-9 w-24 animate-pulse rounded-md bg-white/5" />
              ) : weekChurn.error ? (
                <ErrorState message="Couldn't load churn" onRetry={weekChurn.refetch} />
              ) : weekChurn.data && weekChurn.data.ratio === null ? (
                <EmptyState value="—" caption="No writing activity in this range." />
              ) : weekChurn.data ? (
                <>
                  <div className="text-3xl font-semibold text-white">
                    {formatRatio(weekChurn.data.ratio)}
                  </div>
                  <p className="text-xs text-slate-400">
                    {weekChurn.data.total_lines_added} lines written ·{' '}
                    {weekChurn.data.total_lines_deleted} deleted
                  </p>
                </>
              ) : null}
            </CardContent>
            <CardFooter className="pb-6">
              {weekChurn.data && weekChurn.data.ratio !== null && weekChurn.data.ratio > HIGH_CHURN_RATIO ? (
                <Badge className="border-orange-500/20 bg-orange-500/10 text-orange-400 hover:bg-orange-500/10">
                  High instability detected
                </Badge>
              ) : weekChurn.data && weekChurn.data.ratio !== null ? (
                <Badge className="border-emerald-500/20 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/10">
                  Stable rewrite rate
                </Badge>
              ) : null}
            </CardFooter>
          </Card>

          {/* Context Switching — weekly */}
          <Card className="bg-[#161B2B] border-white/5">
            <CardHeader className="items-start justify-between gap-3 pb-3">
              <CardTitle className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Context Switching
              </CardTitle>
              <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                <CheckCircle2 className="size-5" />
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {weekSwitching.isLoading ? (
                <div className="h-9 w-24 animate-pulse rounded-md bg-white/5" />
              ) : weekSwitching.error ? (
                <ErrorState
                  message="Couldn't load context switching"
                  onRetry={weekSwitching.refetch}
                />
              ) : weekSwitching.data && weekSwitching.data.switch_count === 0 ? (
                <EmptyState value="0" caption="No file switches in this range." />
              ) : weekSwitching.data ? (
                <>
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-semibold text-white">
                      {weekSwitching.data.switch_count}
                    </div>
                    <div className="pb-1 text-sm text-slate-400">switches / 7d</div>
                  </div>
                  {weekSwitching.data.top_files.length > 0 && (
                    <ul className="mt-3 space-y-1 text-xs text-slate-400">
                      {weekSwitching.data.top_files.slice(0, 5).map((f) => (
                        <li key={f.path} className="flex justify-between gap-2">
                          <span className="truncate">{f.path}</span>
                          <span className="shrink-0 tabular-nums text-slate-500">{f.count}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : null}
            </CardContent>
            <CardFooter className="pb-6">
              {weekSwitching.data && weekSwitching.data.switch_count > 0 ? (
                <Badge
                  className={
                    weekSwitching.data.switch_count / 7 > HIGH_SWITCH_PER_DAY
                      ? 'border-orange-500/20 bg-orange-500/10 text-orange-400 hover:bg-orange-500/10'
                      : weekSwitching.data.switch_count / 7 < LOW_SWITCH_PER_DAY
                      ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/10'
                      : 'border-slate-400/20 bg-slate-400/10 text-slate-300 hover:bg-slate-400/10'
                  }
                >
                  {weekSwitching.data.switch_count / 7 > HIGH_SWITCH_PER_DAY
                    ? 'High switching'
                    : weekSwitching.data.switch_count / 7 < LOW_SWITCH_PER_DAY
                    ? 'Healthy depth of focus'
                    : 'Moderate switching'}
                </Badge>
              ) : null}
            </CardFooter>
          </Card>

          {/* Today — daily metrics */}
          <Card className="bg-[#161B2B] border-white/5">
            <CardHeader className="items-start justify-between gap-3 pb-3">
              <CardTitle className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Today
              </CardTitle>
              <div className="flex size-10 items-center justify-center rounded-2xl bg-white/5 text-slate-300">
                <Bot className="size-5" />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {todaySwitching.isLoading || todayChurn.isLoading ? (
                <div className="h-9 w-24 animate-pulse rounded-md bg-white/5" />
              ) : todaySwitching.error || todayChurn.error ? (
                <ErrorState
                  message="Couldn't load today's metrics"
                  onRetry={() => {
                    todaySwitching.refetch()
                    todayChurn.refetch()
                  }}
                />
              ) : todaySwitching.data && todayChurn.data ? (
                todaySwitching.data.switch_count === 0 && todayChurn.data.total_lines_added === 0 ? (
                  <EmptyState value="—" caption="No activity today yet." />
                ) : (
                  <>
                    <div className="text-3xl font-semibold text-white">
                      {todaySwitching.data.switch_count}{' '}
                      <span className="text-sm font-normal text-slate-400">switches</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      {todayChurn.data.total_lines_added} written ·{' '}
                      {todayChurn.data.total_lines_deleted} deleted
                    </p>
                  </>
                )
              ) : null}
            </CardContent>
            <CardFooter className="pb-6" />
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Activity overview (replaces the fake Workflow Vitality chart) */}
          <Card className="lg:col-span-2 bg-[#161B2B] border-white/5">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold text-white">
                Activity overview
              </CardTitle>
              <p className="text-sm text-slate-400">Last 7 days</p>
            </CardHeader>
            <CardContent className="pb-6">
              {weekSwitching.isLoading || weekChurn.isLoading ? (
                <div className="h-40 w-full animate-pulse rounded-md bg-white/5" />
              ) : weekSwitching.data && weekChurn.data ? (
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                  <Stat label="Switches" value={weekSwitching.data.switch_count.toString()} />
                  <Stat
                    label="Rapid switches"
                    value={weekSwitching.data.rapid_switch_count.toString()}
                  />
                  <Stat
                    label="Lines written"
                    value={weekChurn.data.total_lines_added.toString()}
                  />
                  <Stat
                    label="Lines deleted"
                    value={weekChurn.data.total_lines_deleted.toString()}
                  />
                </div>
              ) : (
                <p className="text-sm text-slate-400">
                  We couldn&apos;t load this overview. The metric cards above have details.
                </p>
              )}
            </CardContent>
            <CardFooter>
              <p className="text-xs text-slate-500">
                Aggregated from telemetry events; refreshes every ~5 minutes server-side.
              </p>
            </CardFooter>
          </Card>

          {/* AI Insights — Preview (kept per user request, marked as not-yet-wired) */}
          <Card className="lg:col-span-1 bg-[#161B2B] border-white/5">
            <CardHeader className="items-center gap-3 pb-3">
              <div className="flex size-10 items-center justify-center rounded-2xl bg-white/5 text-[#B3C5FF]">
                <Sparkles className="size-5" />
              </div>
              <CardTitle className="text-lg font-semibold text-white">
                AI Insights
              </CardTitle>
              <Badge className="border-[#B3C5FF]/20 bg-[#B3C5FF]/10 text-[#B3C5FF] hover:bg-[#B3C5FF]/10">
                Preview
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border border-white/5 bg-[#0E1322] p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
                    <TriangleAlert className="size-4" />
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-white">Example insight (placeholder)</p>
                    <p className="text-sm leading-6 text-slate-300">
                      When wired up, this card will surface AI suggestions based on your
                      churn and context-switching patterns. Coming soon.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 pb-6">
              <Button
                variant="accent"
                className="w-full bg-white/5 text-white hover:bg-white/10"
                disabled
              >
                View Activity
              </Button>
              <Button
                variant="outline"
                className="w-full border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300"
                disabled
              >
                Take a Break
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}

type EmptyStateProps = { value: string; caption: string }
function EmptyState({ value, caption }: EmptyStateProps) {
  return (
    <>
      <div className="text-3xl font-semibold text-slate-500">{value}</div>
      <p className="text-xs text-slate-500">{caption}</p>
    </>
  )
}

type ErrorStateProps = { message: string; onRetry: () => void }
function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="space-y-2">
      <p className="text-sm text-rose-300">{message}</p>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={onRetry}
        className="h-8 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
      >
        <RefreshCw className="mr-2 size-3" />
        Retry
      </Button>
    </div>
  )
}

type StatProps = { label: string; value: string }
function Stat({ label, value }: StatProps) {
  return (
    <div className="space-y-1">
      <p className="text-xs font-mono uppercase tracking-wider text-slate-400">{label}</p>
      <p className="text-2xl font-semibold text-white tabular-nums">{value}</p>
    </div>
  )
}

export { Dashboard }
