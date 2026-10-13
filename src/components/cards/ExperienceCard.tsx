import { Briefcase } from 'lucide-react'
import { experience } from '../../data/background'
import CornerBracket from '../ui/CornerBracket'

type ExperienceCardProps = {
  onSelect: () => void
  className?: string
}

export default function ExperienceCard({ onSelect, className = '' }: ExperienceCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`relative flex min-h-32 min-w-0 flex-col justify-between rounded-card bg-sun p-4 text-left transition-transform duration-200 hover:-translate-y-1 ${className}`}
    >
      <CornerBracket className="right-4 top-4" />
      <Briefcase size={24} aria-hidden="true" />
      <span className="flex flex-col">
        <span className="font-display text-lg font-bold leading-tight">
          <span className="sr-only">View experience: </span>
          {experience.role}
        </span>
        <span className="text-sm">{experience.duration}</span>
      </span>
    </button>
  )
}