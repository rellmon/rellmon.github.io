import type { SectionId } from '../../types'

type SideNavProps = {
  onOpen: (section: SectionId) => void
}

const items: { label: string; section: SectionId }[] = [
  { label: 'Projects', section: 'projects' },
  { label: 'About', section: 'about' },
  { label: 'Skills', section: 'skills' },
  { label: 'Experience', section: 'experience' },
  { label: 'Education', section: 'education' },
  { label: 'Contact', section: 'contact' },
]

const itemClasses =
  'rounded-full px-3 py-1.5 text-sm font-medium ring-1 ring-ink/15 transition-colors hover:bg-ink hover:text-white ' +
  'lg:rounded-none lg:bg-transparent lg:px-0 lg:py-0 lg:ring-0 lg:hover:bg-transparent lg:hover:text-ink lg:hover:opacity-60 ' +
  'lg:[writing-mode:vertical-rl] lg:rotate-180'

export default function SideNav({ onOpen }: SideNavProps) {
  return (
    <nav
      aria-label="Portfolio sections"
      className="flex flex-wrap gap-2 lg:flex-col lg:flex-nowrap lg:items-center lg:justify-center lg:gap-8"
    >
      {items.map(({ label, section }) => (
        <button
          key={section}
          type="button"
          onClick={() => onOpen(section)}
          className={itemClasses}
        >
          {label}
        </button>
      ))}
    </nav>
  )
}