import { ArrowUpRight, Image as ImageIcon } from 'lucide-react'
import type { Project } from '../../types'
import CornerBracket from '../ui/CornerBracket'
import ImageWithFallback from '../ui/ImageWithFallback'
import StatusBadge from '../ui/StatusBadge'

type Tone = 'mint' | 'grape'

type ProjectCardProps = {
  project: Project
  variant: 'featured' | 'compact'
  tone?: Tone
  onSelect: (project: Project) => void
  className?: string
}

const toneClasses: Record<Tone, string> = {
  mint: 'bg-mint text-ink',
  grape: 'bg-grape text-white',
}

export default function ProjectCard({
  project,
  variant,
  tone = 'mint',
  onSelect,
  className = '',
}: ProjectCardProps) {
  const coverPlaceholder = (
    <span className="absolute inset-0 grid place-items-center text-ink/40">
      <ImageIcon size={56} strokeWidth={1} aria-hidden="true" />
    </span>
  )

  if (variant === 'featured') {
    return (
      <button
        type="button"
        onClick={() => onSelect(project)}
        className={`group relative min-h-0 min-w-0 overflow-hidden rounded-card bg-ink/10 text-left transition-transform duration-200 hover:-translate-y-1 ${className}`}
      >
        {project.cover ? (
          <ImageWithFallback
            src={project.cover}
            alt=""
            className="absolute inset-0 size-full object-cover"
            fallback={coverPlaceholder}
          />
        ) : (
          coverPlaceholder
        )}

        <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-ink text-white transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
          <ArrowUpRight size={18} aria-hidden="true" />
        </span>

        <span className="absolute inset-x-4 bottom-4 flex flex-col gap-2 rounded-2xl bg-white/90 p-4">
          <StatusBadge status={project.status} />
          <span className="font-display text-xl font-bold sm:text-2xl">
            <span className="sr-only">View details for </span>
            {project.name}
          </span>
          <span className="text-sm text-graphite">
            {project.stack.join(' · ')}
          </span>
        </span>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className={`relative flex min-h-32 min-w-0 flex-col justify-between rounded-card p-4 text-left transition-transform duration-200 hover:-translate-y-1 ${toneClasses[tone]} ${className}`}
    >
      <CornerBracket className="right-4 top-4" />

      {/* pr-6 keeps the badge clear of the corner bracket */}
      <span className="block pr-6">
        <StatusBadge status={project.status} />
      </span>

      <span className="flex flex-col">
        <span className="font-display text-lg font-bold leading-tight">
          <span className="sr-only">View details for </span>
          {project.name}
        </span>
        <span className="mt-1 text-xs">{project.stack.join(' · ')}</span>
      </span>
    </button>
  )
}