import type { ReactNode } from 'react'
import { ArrowUpRight, Code, Download, Mail, Users } from 'lucide-react'
import type { Project, SectionId } from '../../types'
import { about, contactLinks, profile } from '../../data/profile'
import { projects } from '../../data/projects'
import { skillGroups } from '../../data/skills'
import { education, experience } from '../../data/background'
import Modal from '../ui/Modal'
import StatusBadge from '../ui/StatusBadge'

type SectionModalProps = {
  section: SectionId | null
  onClose: () => void
  onSelectProject: (project: Project) => void
}

const titles: Record<SectionId, string> = {
  projects: 'All projects',
  about: 'About me',
  skills: 'Technical skills',
  experience: 'Experience',
  education: 'Education',
  contact: 'Contact',
}

const subheading =
  'font-display text-sm font-bold uppercase tracking-wider text-graphite'

const linkButton =
  'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors'

type ExternalLinkProps = {
  href: string
  icon: ReactNode
  children: ReactNode
}

function ContactAnchor({ href, icon, children }: ExternalLinkProps) {
  const isWeb = href.startsWith('http')

  return (
    <a
      href={href}
      {...(isWeb ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${linkButton} bg-ink text-white hover:bg-graphite`}
    >
      {icon}
      {children}
    </a>
  )
}

export default function SectionModal({
  section,
  onClose,
  onSelectProject,
}: SectionModalProps) {
  return (
    <Modal
      open={section !== null}
      onClose={onClose}
      title={section ? titles[section] : ''}
    >
      {section === 'projects' && (
        <ul className="mt-6 space-y-3">
          {projects.map((project) => (
            <li key={project.id}>
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="flex w-full items-center justify-between gap-4 rounded-card bg-white p-4 text-left ring-1 ring-ink/10 transition-colors hover:bg-mint/40"
              >
                <span className="flex flex-col gap-2">
                  <StatusBadge status={project.status} />
                  <span className="font-display text-xl font-bold">
                    {project.name}
                  </span>
                  <span className="text-sm text-graphite">{project.tagline}</span>
                  <span className="text-xs text-graphite">
                    {project.stack.join(' · ')}
                  </span>
                </span>
                <ArrowUpRight size={20} className="shrink-0" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {section === 'about' &&
        about.map((paragraph) => (
          <p key={paragraph} className="mt-6 leading-relaxed">
            {paragraph}
          </p>
        ))}

      {section === 'skills' &&
        skillGroups.map((group) => (
          <div key={group.category} className="mt-6">
            <h3 className={subheading}>{group.category}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-lavender/20 px-3 py-1 text-sm font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

      {section === 'experience' && (
        <div className="mt-6">
          <p className="text-xl font-semibold">{experience.role}</p>
          <p className="text-graphite">
            {experience.organization} · {experience.period}
          </p>
          <p className="text-sm text-graphite">{experience.duration}</p>
          <p className="mt-4 leading-relaxed">{experience.summary}</p>

          <h3 className={`${subheading} mt-8`}>Responsibilities</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            {experience.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {section === 'education' && (
        <div className="mt-6">
          <p className="text-xl font-semibold">{education.degree}</p>
          <p className="text-graphite">{education.school}</p>
          <p className="text-sm text-graphite">{education.period}</p>
        </div>
      )}

      {section === 'contact' && (
        <div className="mt-6">
          <p className="leading-relaxed">
            Have a question or an opportunity to share? Email is the quickest
            way to reach me.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ContactAnchor
              href={`mailto:${profile.email}`}
              icon={<Mail size={16} aria-hidden="true" />}
            >
              {profile.email}
            </ContactAnchor>

            <ContactAnchor
              href={contactLinks.github}
              icon={<Code size={16} aria-hidden="true" />}
            >
              GitHub
            </ContactAnchor>

            <ContactAnchor
              href={contactLinks.linkedin}
              icon={<Users size={16} aria-hidden="true" />}
            >
              LinkedIn
            </ContactAnchor>
          </div>

          <h3 className={`${subheading} mt-8`}>Résumé</h3>
          <div className="mt-3">
            {contactLinks.resumeUrl ? (
              <a
                href={contactLinks.resumeUrl}
                download
                className={`${linkButton} bg-sun hover:brightness-95`}
              >
                <Download size={16} aria-hidden="true" />
                Download résumé (PDF)
              </a>
            ) : (
              <p className="text-sm text-graphite">Résumé coming soon.</p>
            )}
          </div>
        </div>
      )}
    </Modal>
  )
}