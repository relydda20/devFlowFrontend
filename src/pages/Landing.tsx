import { ArrowRight, Activity, ArrowLeftRight, Download, Zap } from 'lucide-react'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const features = [
  {
    title: 'Code Churn',
    description:
      'Visualize exactly how much generated code survives refactoring. Identify brittle prompt outputs instantly.',
    icon: Activity,
    iconClassName: 'bg-blue-500/15 text-blue-300',
  },
  {
    title: 'Context Switching',
    description:
      'Track the cost of tab-hopping between editor, browser, and AI chat windows.',
    icon: ArrowLeftRight,
    iconClassName: 'bg-violet-500/15 text-violet-300',
  },
  {
    title: 'AI Efficiency',
    description:
      'Measure the true ROI of your Copilot usage. Compare typing speed against generation acceptance rates.',
    icon: Zap,
    iconClassName: 'bg-emerald-500/15 text-emerald-300',
  },
]

function Landing() {
  useDocumentTitle('Landing')
  return (
    <>
      <main className="min-h-[calc(100vh-4rem)] w-full bg-[#0E1322] text-slate-300">
        <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-20 pt-20 text-center sm:px-6 lg:px-8 lg:pt-24">
          <div className="max-w-4xl space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/50">
              DevFlow for modern engineers
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Master Your AI-Assisted Workflow
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
              Analytics for the modern engineer. Track code churn, context switching, and AI efficiency directly in VS Code. Stop guessing, start measuring.
            </p>

            <div className="flex flex-col items-center gap-3 pt-2">
            <Button asChild className="bg-[#B3C5FF] text-[#0E1322] hover:bg-[#B3C5FF]/80" variant="accent">
                <a href="#download">
                  <Download className="mr-2 size-4" />
                  Download for VS Code
                </a>
              </Button>
              <p className="text-xs font-mono text-slate-500">
                Requires VS Code 1.80+ &bull; Free for individual use
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <Card key={feature.title} className="bg-white/5">
                  <CardHeader>
                    <div
                      className={`flex size-11 shrink-0 items-center justify-center rounded-2xl ${feature.iconClassName}`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section id="download" className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/50">
                Ready to start
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Install DevFlow and measure your workflow with clarity.
              </h2>
            </div>
            <Button asChild className="bg-[#B3C5FF] text-[#0E1322] hover:bg-[#B3C5FF]/80" variant="accent">
              <a href="/login"> { /* Change to actual link later */ }
                <ArrowRight className="mr-2 size-4" />
                Get started
              </a>
            </Button>
          </div>
        </section>
      </main>

    </>
  )
}

export { Landing }
