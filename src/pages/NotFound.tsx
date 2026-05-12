import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

function NotFound() {
  const headingRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    if (headingRef.current) headingRef.current.focus()
  }, [])

  useDocumentTitle('Not Found')

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0E1322] px-4 text-center">
      <div className="max-w-2xl">
        <h1
          ref={headingRef}
          tabIndex={-1}
          className="text-6xl font-bold text-white tracking-tight mb-2"
        >
          404
        </h1>
        <h2 className="text-2xl font-semibold text-slate-200 mb-4">Page not found</h2>
        <p className="text-slate-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Button asChild variant="accent" className="bg-[#B3C5FF] text-[#0E1322] hover:bg-[#B3C5FF]/80">
            <Link to="/">Go to home</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

export { NotFound }
