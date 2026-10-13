import { useEffect, useId, useRef, type ReactNode } from 'react'
import { X } from 'lucide-react'

type ModalProps = {
  open: boolean
  onClose: () => void
  title: string
  eyebrow?: ReactNode
  wide?: boolean
  children: ReactNode
}

export default function Modal({
  open,
  onClose,
  title,
  eyebrow,
  wide = false,
  children,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      aria-labelledby={titleId}
      className={`m-auto max-h-[90vh] no-scrollbar overscroll-contain overflow-y-auto rounded-shell bg-shell p-0 text-ink backdrop:bg-ink/60 open:rise-in backdrop:fade-in ${
        wide ? 'w-[min(92vw,52rem)]' : 'w-[min(92vw,44rem)]'
      }`}
    >
      {open && (
        <div className="p-6 sm:p-10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-3">
              {eyebrow}
              <h2 id={titleId} className="font-display text-3xl font-extrabold sm:text-5xl">
                {title}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label={`Close ${title}`}
              className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-white transition-colors hover:bg-graphite"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          {children}
        </div>
      )}
    </dialog>
  )
}