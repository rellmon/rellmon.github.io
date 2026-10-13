import { GraduationCap } from 'lucide-react'
import { education } from '../../data/background'
import CornerBracket from '../ui/CornerBracket'

type EducationCardProps = {
  onSelect: () => void
  className?: string
}

export default function EducationCard({ onSelect, className = '' }: EducationCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`relative flex min-h-32 min-w-0 flex-col justify-between rounded-card bg-ink p-4 text-left text-white transition-transform duration-200 hover:-translate-y-1 ${className}`}
    >
      <CornerBracket className="right-4 top-4" />
      <GraduationCap size={24} aria-hidden="true" />
      <span className="flex flex-col">
        <span className="font-display text-xl font-bold">{education.shortDegree}</span>
        <span className="text-sm text-white/80">
          <span className="sr-only">View </span>Education
        </span>
      </span>
    </button>
  )
}