function AuthLoading() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] w-full items-center justify-center px-4">
      <div
        role="status"
        aria-label="Loading"
        className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-[#B3C5FF]"
      />
    </main>
  )
}

export { AuthLoading }
