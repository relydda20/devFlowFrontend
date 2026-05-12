import type { SVGProps } from "react"

function GithubMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.649.5.5 5.672.5 12.051c0 5.1 3.289 9.42 7.857 10.944.575.108.785-.252.785-.563v-2.196c-3.197.707-3.869-1.55-3.869-1.55-.523-1.355-1.278-1.716-1.278-1.716-1.046-.73.08-.716.08-.716 1.155.083 1.763 1.196 1.763 1.196 1.026 1.77 2.694 1.259 3.352.963.104-.754.402-1.258.732-1.548-2.556-.295-5.244-1.314-5.244-5.845 0-1.291.457-2.346 1.207-3.173-.121-.297-.523-1.499.117-3.125 0 0 .983-.318 3.221 1.212a11.15 11.15 0 0 1 5.861 0c2.237-1.53 3.22-1.212 3.22-1.212.642 1.626.24 2.828.118 3.125.751.827 1.206 1.882 1.206 3.173 0 4.543-2.694 5.546-5.257 5.836.413.364.781 1.08.781 2.18v3.232c0 .314.208.677.792.562C20.712 21.47 24 17.15 24 12.051 24 5.672 18.851.5 12 .5Z" />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/Logo.svg" alt="DevFlow logo" className="w-25 h-8" />
          <p className="text-sm text-slate-400">&copy; 2026 DevFlow. All rights reserved.</p>
        </div>

        { /* TODO: Add ToC and Privacy Polocy */ }
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex items-center gap-4 text-sm">
            <a className="text-slate-400 transition-colors hover:text-white" href="#privacy">
              Privacy Policy
            </a>
            <a className="text-slate-400 transition-colors hover:text-white" href="#terms">
              Terms of Service
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              className="text-slate-400 transition-colors hover:text-white"
              href="https://github.com/relydda20/devFlowExtension"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubMark className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
