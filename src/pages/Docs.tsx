import {
  Activity,
  BookOpen,
  Download,
  RefreshCw,
  TerminalSquare,
  PlayCircle,
  SquareStack,
} from 'lucide-react'
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

const sidebarLinks: SidebarLink[] = [
  { label: 'Installation & Setup', href: '#installation', icon: Download },
  { label: 'Running the Extension', href: '#running', icon: PlayCircle },
  { label: 'Testing Telemetry Events', href: '#events', icon: Activity },
  { label: 'Synchronization & Status', href: '#sync', icon: RefreshCw },
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
                  <SquareStack className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/40">
                    Contents
                  </p>
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
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/45">
              DevFlow Documentation
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Getting Started with DevFlow
            </h1>
            <p className="text-base leading-8 text-slate-300 sm:text-lg">
              DevFlow helps you understand how the extension behaves, how to install it in
              VS Code, and how to use the telemetry it captures to improve your workflow.
            </p>
          </header>

          <section className="space-y-5" id="installation">
            <SectionHeader
              icon={Download}
              title="Installation & Setup"
              description="Follow these steps to generate the extension and install all necessary dependencies before running it in your workspace."
            />
            <Card className="bg-[#161B2B] border-white/5">
              <CardContent className="space-y-4 pt-6">
                <div className="space-y-3">
                  <p className="text-sm font-semibold leading-7 text-white">
                    1. Install the Extension Generator
                  </p>
                  <CodeBlock>npm install -g yo generator-code</CodeBlock>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-semibold leading-7 text-white">
                    2. Generate the Extension
                  </p>
                  <CodeBlock>yo code</CodeBlock>
                  <p className="text-sm leading-7 text-slate-300">
                    (When prompted, select: New Extension - TypeScript)
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-semibold leading-7 text-white">
                    3. Install Dependencies
                  </p>
                  <CodeBlock>npm install axios</CodeBlock>
                  <CodeBlock>npm install</CodeBlock>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-semibold leading-7 text-white">
                    4. Compile and Lint
                  </p>
                  <p className="text-sm leading-7 text-slate-300">
                    Compile the TypeScript files from <code className="font-mono">src/</code> to{' '}
                    <code className="font-mono">out/</code> and run the linter to ensure there are
                    no errors:
                  </p>
                  <CodeBlock>npm run compile</CodeBlock>
                  <CodeBlock>npm run lint</CodeBlock>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-5" id="running">
            <SectionHeader
              icon={TerminalSquare}
              title="Running the Extension"
              description="Once compiled, you need to launch the extension in a localized development environment to observe its behavior."
            />
            <Card className="bg-[#161B2B] border-white/5">
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-3">
                  <p className="text-sm font-semibold leading-7 text-white">
                    1. Launch the Development Host
                  </p>
                  <p className="text-sm leading-7 text-slate-300">
                    Open the project in VS Code and press <code className="font-mono">F5</code>.
                    This will open a new window called the{' '}
                    <strong className="text-white">Extension Development Host</strong>. The
                    extension activates automatically via the{' '}
                    <code className="font-mono">onStartupFinished</code> event.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-semibold leading-7 text-white">
                    2. Verify Connection
                  </p>
                  <p className="text-sm leading-7 text-slate-300">
                    Check the bottom-right status bar. You should see an indicator reading:{' '}
                    <CodeInline>DevVital AI: 0 queued</CodeInline>.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-semibold leading-7 text-white">
                    3. View Internal Logs
                  </p>
                  <ol className="list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-300">
                    <li>Open the Command Palette (<code className="font-mono">Ctrl + Shift + P</code>).</li>
                    <li>Run <code className="font-mono">Output: Focus on Output View</code>.</li>
                    <li>Select the <code className="font-mono">DevVital AI</code> channel from the dropdown menu.</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-5" id="events">
            <SectionHeader
              icon={Activity}
              title="Testing Telemetry Events"
              description="With the Development Host running, perform the following actions to verify that DevFlow is capturing the correct workflow signals."
            />
            <Card className="bg-[#161B2B] border-white/5">
              <CardContent className="pt-6">
                <ul className="space-y-4 text-sm leading-7 text-slate-300">
                  <li>
                    <strong className="text-white">File Save</strong>: Modify any file and press{' '}
                    <code className="font-mono">Ctrl + S</code>. Triggers the{' '}
                    <code className="font-mono">file_save</code> event.
                  </li>
                  <li>
                    <strong className="text-white">Text Change</strong>: Type normally, or paste a
                    block of text containing more than 100 characters. Triggers the{' '}
                    <code className="font-mono">text_change</code> event. Pasting &gt;100
                    characters appends the <code className="font-mono">"is_large_paste": true</code>{' '}
                    payload.
                  </li>
                  <li>
                    <strong className="text-white">Editor Switch</strong>: Open multiple files and
                    rapidly switch between the tabs (more than 5 times within 60 seconds).
                    Triggers the <code className="font-mono">editor_switch</code> event with{' '}
                    <code className="font-mono">"is_rapid_context_switching": true</code>.
                  </li>
                  <li>
                    <strong className="text-white">Debug Session</strong>: Open the Run and Debug
                    panel and start any debug configuration. Triggers the{' '}
                    <code className="font-mono">debug_session_start</code> event.
                  </li>
                  <li>
                    <strong className="text-white">Terminal Open</strong>: Open a new integrated
                    terminal using <code className="font-mono">Ctrl + Shift + `</code>. Triggers
                    the <code className="font-mono">terminal_open</code> event.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-5" id="sync">
            <SectionHeader
              icon={RefreshCw}
              title="Synchronization & Status"
              description="DevFlow buffers your events locally and syncs them to your backend."
            />
            <Card className="bg-[#161B2B] border-white/5">
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">Auto-Sync Behavior</h3>
                  <p className="text-sm leading-7 text-slate-300">
                    The internal <code className="font-mono">SyncService</code> automatically
                    attempts to flush the event buffer every 60 seconds.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">Manual Flush</h3>
                  <p className="text-sm leading-7 text-slate-300">
                    Open the Command Palette and run{' '}
                    <code className="font-mono">DevVital AI: Flush Telemetry</code>. Sends queued
                    events via POST to{' '}
                    <code className="font-mono">http://localhost:3000/api/v1/telemetry</code>.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">Check Telemetry Status</h3>
                  <p className="text-sm leading-7 text-slate-300">
                    Run <code className="font-mono">DevVital AI: Show Telemetry Status</code> to
                    display a popup with your queued events and active minutes.
                  </p>
                </div>
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
