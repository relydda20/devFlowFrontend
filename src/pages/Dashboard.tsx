import { Navigate } from 'react-router-dom'

function Dashboard() {
  const isAuthed = localStorage.getItem('mock-auth') === 'true'

  if (!isAuthed) {
    return <Navigate to="/login" replace />
  }

  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-start px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/50">
          Dashboard
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
          Protected mock dashboard.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
          This page verifies the navbar login flow by requiring the mock auth flag before
          rendering content.
        </p>
      </section>
    </main>
  )
}

export { Dashboard }
