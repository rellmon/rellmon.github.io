import { Terminal } from 'lucide-react'
import { skillGroups } from '../../data/skills'
import CornerBracket from '../ui/CornerBracket'

type SkillsCardProps = {
  onSelect: () => void
  className?: string
}

export default function SkillsCard({ onSelect, className = '' }: SkillsCardProps) {
  // First four skills across all groups; reorder skills.ts to change this preview.
  const preview = skillGroups.flatMap((group) => group.items).slice(0, 4)

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`relative flex min-h-32 min-w-0 flex-col justify-between rounded-card bg-mint p-4 text-left transition-transform duration-200 hover:-translate-y-1 ${className}`}
    >
      <CornerBracket className="right-4 top-4" />
      <Terminal size={22} aria-hidden="true" />
      <span className="flex flex-col gap-2">
        <span className="font-display text-lg font-bold leading-tight">
          <span className="sr-only">View </span>Technical skills
        </span>
        <span className="flex flex-wrap gap-1.5">
          {preview.map((skill) => (
            <span key={skill} className="rounded-full bg-ink/10 px-2 py-0.5 text-xs">
              {skill}
            </span>
          ))}
        </span>
      </span>
    </button>
  )
}