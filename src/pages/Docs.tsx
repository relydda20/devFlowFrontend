import { Download, PlayCircle } from 'lucide-react'
import type { ReactNode } from 'react'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type SidebarLink = {
  label: string
  href: string
  icon: typeof BookOpen
}

type SectionHeaderProps = {
  icon: typeof BookOpen
  title: string
  description: string
}

function SectionHeader({ icon: Icon, title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/8 text-[#B3C5FF]">
          <Icon className="size-5" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
          <p className="mt-1 text-sm leading-6 text-slate-400">{description}</p>
        </div>
      </div>
    </div>
  )
}

function CodeBlock({ children }: { children: ReactNode }) {
  return (
    <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0B1020] px-4 py-3 text-sm leading-7 text-slate-200">
      <code className="font-mono">{children}</code>
    </pre>
  )
}

const sidebarLinks = [
  { label: 'Installation', href: '#installation', icon: Download },
  { label: 'How to use', href: '#how-to-use', icon: PlayCircle },
]

function Docs() {
  useDocumentTitle('Docs')

  return (
    <main className="w-full bg-[#0E1322] text-slate-300">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:px-8">
        <aside className="sticky top-24 hidden h-[calc(100vh-7rem)] w-64 shrink-0 md:block">
          <Card className="h-full bg-[#11182A] border-white/5">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-2xl bg-white/8 text-[#B3C5FF]">
                  <Download className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/40">Contents</p>
                  <CardTitle className="mt-1 text-lg">Getting Started</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {sidebarLinks.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/6 hover:text-white"
                  >
                    <Icon className="size-4 text-[#B3C5FF]" />
                    <span>{item.label}</span>
                  </a>
                )
              })}
            </CardContent>
          </Card>
        </aside>

        <div className="w-full min-w-0 flex-1 space-y-10">
          <header className="max-w-3xl space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/45">DevFlow Documentation</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Getting Started with DevFlow</h1>
            <p className="text-base leading-8 text-slate-300 sm:text-lg">This page contains installation steps and a short "how to use" guide.</p>
          </header>

          <section className="space-y-5" id="installation">
            <SectionHeader icon={Download} title="Installation" description="Install the extension from a .vsix file (most common)." />
            <Card className="bg-[#161B2B] border-white/5">
              <CardContent className="space-y-4 pt-6">
                <p className="text-sm leading-7 text-slate-300">If you have an extension file named <code className="font-mono">extension-name.vsix</code>, install it via the VS Code UI:</p>
                <ol className="list-decimal pl-5 space-y-2 text-sm leading-7 text-slate-300">
                  <li>Open Visual Studio Code.</li>
                  <li>Go to the Extensions view (Ctrl+Shift+X).</li>
                  <li>Click the <strong>...</strong> menu in the top-right of the Extensions pane.</li>
                  <li>Select <strong>Install from VSIX...</strong>.</li>
                  <li>Choose the <code className="font-mono">.vsix</code> file and install.</li>
                  <li>Restart VS Code if prompted.</li>
                </ol>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-5" id="how-to-use">
            <SectionHeader icon={PlayCircle} title="How to use" description="Quick usage guide." />
            <Card className="bg-[#161B2B] border-white/5">
              <CardContent className="space-y-4 pt-6">
                <p className="text-sm leading-7 text-slate-300">Sign in to the app. Once logged in, the extension is ready to use.</p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </main>
  )
}

export { Docs }

function CodeInline({ children }: { children: ReactNode }) {
  return <code className="font-mono text-[#D7E2FF]">{children}</code>
}
