import type { LegalPageContent } from './legalContent'

type LegalPageProps = {
  content: LegalPageContent
}

function LegalPage({ content }: LegalPageProps) {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl items-start px-4 py-16 sm:px-6 lg:px-8">
      <article className="w-full rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-10">
        <header className="space-y-4 border-b border-white/10 pb-8">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/50">
            Legal
          </p>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {content.title}
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              {content.description}
            </p>
          </div>
          <p className="text-sm text-slate-400">
            Effective date: <span className="text-white">{content.effectiveDate}</span>
          </p>
        </header>

        <div className="space-y-8 pt-8">
          {content.sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-white">
                {section.heading}
              </h2>
              <div className="space-y-3 text-sm leading-7 text-white/70 sm:text-base">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  )
}

export { LegalPage }
