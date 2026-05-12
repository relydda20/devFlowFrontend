function Landing() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="max-w-3xl space-y-6">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/50">
          Shared app shell
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          A navbar that stays readable, responsive, and ready for routing.
        </h1>
        <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          The app now uses a shared navigation bar with a scrolled glass effect, mobile menu,
          and route-aware links for the main product surfaces.
        </p>
      </section>
    </main>
  )
}

export { Landing }
