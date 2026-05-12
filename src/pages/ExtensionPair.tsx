import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ApiError, approvePairing } from '@/lib/api'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

type Status = 'idle' | 'approving' | 'approved' | 'error'

const USER_CODE_RE = /^[BCDFGHJKMNPQRSTVWXZ23456789]{4}-[BCDFGHJKMNPQRSTVWXZ23456789]{4}$/

function ExtensionPair() {
  useDocumentTitle('Approve VSCode Extension')
  const [searchParams] = useSearchParams()
  const code = (searchParams.get('code') || '').toUpperCase()
  const codeValid = USER_CODE_RE.test(code)

  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleApprove = async () => {
    if (!codeValid) return
    setStatus('approving')
    setErrorMessage(null)
    try {
      await approvePairing(code)
      setStatus('approved')
    } catch (err) {
      if (err instanceof ApiError && (err.status === 404 || err.status === 410)) {
        setErrorMessage('This pairing code is no longer valid. Please start a new sign-in from VSCode.')
      } else if (err instanceof ApiError && err.status === 409) {
        setErrorMessage('This code has already been used. Please start a new sign-in from VSCode.')
      } else if (err instanceof ApiError) {
        setErrorMessage(err.message)
      } else {
        setErrorMessage('Something went wrong. Please try again.')
      }
      setStatus('error')
    }
  }

  return (
    <main className="flex min-h-[calc(100vh-4rem)] w-full items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/8 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl">
        <Card className="border-0 bg-transparent shadow-none">
          <CardHeader className="flex flex-col items-center gap-2 pb-4 text-center">
            <CardTitle className="text-2xl leading-tight text-white">
              Approve VSCode Extension
            </CardTitle>
            <CardDescription className="max-w-sm text-slate-400">
              Confirm this code matches what your VSCode extension is showing, then click Approve to link this device.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {!codeValid && (
              <p
                role="alert"
                className="rounded-md border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-200"
              >
                No valid pairing code in the URL. Please run <strong>DevVital AI: Sign In</strong> from VSCode again.
              </p>
            )}

            {codeValid && (
              <div className="flex justify-center">
                <code className="rounded-md border border-white/10 bg-slate-900/60 px-6 py-4 font-mono text-3xl tracking-[0.4em] text-white">
                  {code}
                </code>
              </div>
            )}

            {status === 'approved' && (
              <div
                role="status"
                className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200"
              >
                Extension approved — you can return to VSCode.
              </div>
            )}

            {status === 'error' && errorMessage && (
              <p
                role="alert"
                className="rounded-md border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-200"
              >
                {errorMessage}
              </p>
            )}

            {status !== 'approved' && (
              <Button
                type="button"
                onClick={handleApprove}
                disabled={!codeValid || status === 'approving'}
                className="w-full bg-[#B3C5FF] text-[#0E1322] hover:bg-[#B3C5FF]/80"
              >
                {status === 'approving' ? 'Approving…' : 'Approve'}
              </Button>
            )}

            {status === 'approved' && (
              <Link
                to="/dashboard"
                className="block w-full rounded-md border border-white/10 bg-slate-900/40 px-4 py-2 text-center text-sm text-slate-200 hover:bg-slate-900/60"
              >
                Back to dashboard
              </Link>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export { ExtensionPair }
