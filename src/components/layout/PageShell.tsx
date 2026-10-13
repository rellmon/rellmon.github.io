import type { ReactNode } from 'react'

type PageShellProps = {
  children: ReactNode
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="grid min-h-dvh place-items-center bg-ink p-3 sm:p-6">
      <main className="w-full max-w-[120rem] rounded-shell bg-shell p-4 sm:p-6 lg:h-[calc(100dvh-3rem)] lg:min-h-[42rem] lg:p-10">
        {children}
      </main>
    </div>
  )
}