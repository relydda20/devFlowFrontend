function DashboardPage() {
  return (
    <section id="dashboard" className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
        <p className="text-sm font-medium text-muted-foreground">Dashboard entry point</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
          Navigation is ready for dashboard-specific actions.
        </h2>
      </div>
    </section>
  )
}

export { DashboardPage }
