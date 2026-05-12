import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import {
  Bot,
  CheckCircle2,
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
import { Progress } from '@/components/ui/progress'

const vitalityData = [
  { time: '08:00', vitality: 42 },
  { time: '10:00', vitality: 48 },
  { time: '12:00', vitality: 39 },
  { time: '14:00', vitality: 58 },
  { time: '16:00', vitality: 52 },
  { time: '18:00', vitality: 66 },
  { time: '20:00', vitality: 61 },
  { time: '22:00', vitality: 70 },
]

function Dashboard() {
  return (
    <main className="min-h-screen bg-[#0E1322] pt-6 pb-12 text-slate-300">
      <div className="mx-auto max-w-7xl space-y-6 px-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-white">
            Dashboard
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            Real-time workflow analytics and agentic insights.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="bg-[#161B2B] border-white/5">
            <CardHeader className="items-start justify-between gap-3 pb-3">
              <CardTitle className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Code Churn
              </CardTitle>
              <div className="flex size-10 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
                <TriangleAlert className="size-5" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-semibold text-white">+34%</div>
            </CardContent>
            <CardFooter className="pb-6">
              <Badge className="border-orange-500/20 bg-orange-500/10 text-orange-400 hover:bg-orange-500/10">
                High instability detected
              </Badge>
            </CardFooter>
          </Card>

          <Card className="bg-[#161B2B] border-white/5">
            <CardHeader className="items-start justify-between gap-3 pb-3">
              <CardTitle className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Context Switching
              </CardTitle>
              <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                <CheckCircle2 className="size-5" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-end gap-2">
                <div className="text-3xl font-semibold text-white">8.4</div>
                <div className="pb-1 text-sm text-slate-400">files/10m</div>
              </div>
            </CardContent>
            <CardFooter className="pb-6">
              <Badge className="border-emerald-500/20 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/10">
                Healthy depth of focus
              </Badge>
            </CardFooter>
          </Card>

          <Card className="bg-[#161B2B] border-white/5">
            <CardHeader className="items-start justify-between gap-3 pb-3">
              <CardTitle className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Agentic Logs
              </CardTitle>
              <div className="flex size-10 items-center justify-center rounded-2xl bg-white/5 text-slate-300">
                <Bot className="size-5" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-end gap-2">
                <div className="text-3xl font-semibold text-white">72%</div>
                <div className="pb-1 text-sm text-slate-400">Copilot efficiency</div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-3 pb-6">
              <Progress value={72} className="h-2 bg-white/10" />
            </CardFooter>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2 bg-[#161B2B] border-white/5">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold text-white">
                Workflow Vitality
              </CardTitle>
              <p className="text-sm text-slate-400">Last 24 Hours</p>
            </CardHeader>
            <CardContent className="pb-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={vitalityData}>
                    <defs>
                      <linearGradient id="vitalityFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#B3C5FF" stopOpacity={0.45} />
                        <stop offset="100%" stopColor="#B3C5FF" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      stroke="rgba(255,255,255,0.05)"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="time"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'rgba(226,232,240,0.65)', fontSize: 12 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'rgba(226,232,240,0.35)', fontSize: 12 }}
                    />
                    <Area
                      type="monotone"
                      dataKey="vitality"
                      stroke="#B3C5FF"
                      strokeWidth={2}
                      fill="url(#vitalityFill)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-slate-400">*Data updated evey 5 minute</p>
            </CardFooter>
          </Card>

          <Card className="lg:col-span-1 bg-[#161B2B] border-white/5">
            <CardHeader className="items-center gap-3 pb-3">
              <div className="flex size-10 items-center justify-center rounded-2xl bg-white/5 text-[#B3C5FF]">
                <Sparkles className="size-5" />
              </div>
              <CardTitle className="text-lg font-semibold text-white">
                AI Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border border-white/5 bg-[#0E1322] p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
                    <TriangleAlert className="size-4" />
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-white">High code churn detected.</p>
                    <p className="text-sm leading-6 text-slate-300">
                      You have rewritten the same logic multiple times in the last hour.
                      Consider stepping away for a 5-minute break to reset your focus and maintain
                      long-term productivity.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 pb-6">
              <Button variant="accent" className="w-full bg-white/5 text-white hover:bg-white/10">
                View Activity
              </Button>
              <Button
                variant="outline"
                className="w-full border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300"
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

export { Dashboard }
