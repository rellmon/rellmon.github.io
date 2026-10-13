import type { ProjectStatus } from '../../types'

const config: Record<ProjectStatus, { label: string; dot: string }> = {
  completed: { label: 'Completed', dot: 'bg-ink' },
  'in-progress': { label: 'In development', dot: 'bg-sun' },
  planned: { label: 'Planned', dot: 'border border-ink' },
}

type StatusBadgeProps = {
  status: ProjectStatus
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const { label, dot } = config[status]

  return (
    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-ink ring-1 ring-ink/10">
      <span aria-hidden="true" className={`size-2 rounded-full ${dot}`} />
      {label}
    </span>
  )
}