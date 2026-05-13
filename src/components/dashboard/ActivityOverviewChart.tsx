import { useMemo } from 'react'
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import type {
  ChurnSeriesPoint,
  ContextSwitchingSeriesPoint,
} from '@/lib/metrics'

type Props = {
  churnSeries: ChurnSeriesPoint[]
  switchingSeries: ContextSwitchingSeriesPoint[]
}

type CombinedPoint = {
  date: string
  label: string
  lines_added: number
  lines_deleted: number
  switch_count: number
}

function shortLabel(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`)
  return d.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric' })
}

function mergeSeries(
  churn: ChurnSeriesPoint[],
  switching: ContextSwitchingSeriesPoint[],
): CombinedPoint[] {
  const byDate = new Map<string, CombinedPoint>()
  for (const p of churn) {
    byDate.set(p.date, {
      date: p.date,
      label: shortLabel(p.date),
      lines_added: p.lines_added,
      lines_deleted: p.lines_deleted,
      switch_count: 0,
    })
  }
  for (const p of switching) {
    const existing = byDate.get(p.date)
    if (existing) {
      existing.switch_count = p.switch_count
    } else {
      byDate.set(p.date, {
        date: p.date,
        label: shortLabel(p.date),
        lines_added: 0,
        lines_deleted: 0,
        switch_count: p.switch_count,
      })
    }
  }
  return Array.from(byDate.values()).sort((a, b) => a.date.localeCompare(b.date))
}

export function ActivityOverviewChart({ churnSeries, switchingSeries }: Props) {
  const data = useMemo(
    () => mergeSeries(churnSeries, switchingSeries),
    [churnSeries, switchingSeries],
  )

  const totalActivity = data.reduce(
    (sum, p) => sum + p.lines_added + p.lines_deleted + p.switch_count,
    0,
  )
  if (totalActivity === 0) {
    return (
      <div className="flex h-48 items-center justify-center text-sm text-slate-500">
        No activity in the last 7 days yet.
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={260}>
      <ComposedChart
        data={data}
        margin={{ top: 8, right: 12, left: 0, bottom: 4 }}
        barCategoryGap="22%"
      >
        <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
        <XAxis
          dataKey="label"
          tick={{ fill: '#94a3b8', fontSize: 11 }}
          axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
          tickLine={false}
        />
        <YAxis
          yAxisId="lines"
          tick={{ fill: '#94a3b8', fontSize: 11 }}
          axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
          tickLine={false}
          width={36}
        />
        <YAxis
          yAxisId="switches"
          orientation="right"
          tick={{ fill: '#94a3b8', fontSize: 11 }}
          axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
          tickLine={false}
          width={32}
        />
        <Tooltip
          cursor={{ fill: 'rgba(255,255,255,0.04)' }}
          contentStyle={{
            backgroundColor: '#0E1322',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 8,
            fontSize: 12,
          }}
          labelStyle={{ color: '#e2e8f0' }}
          itemStyle={{ color: '#cbd5e1' }}
        />
        <Legend
          wrapperStyle={{ fontSize: 12, color: '#94a3b8' }}
          iconType="circle"
        />
        <Bar
          yAxisId="lines"
          dataKey="lines_added"
          name="Lines added"
          stackId="lines"
          fill="#34d399"
          radius={[3, 3, 0, 0]}
        />
        <Bar
          yAxisId="lines"
          dataKey="lines_deleted"
          name="Lines deleted"
          stackId="lines"
          fill="#f87171"
          radius={[3, 3, 0, 0]}
        />
        <Line
          yAxisId="switches"
          type="monotone"
          dataKey="switch_count"
          name="Switches"
          stroke="#60a5fa"
          strokeWidth={2}
          dot={{ r: 3, fill: '#60a5fa', strokeWidth: 0 }}
          activeDot={{ r: 5 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  )
}
