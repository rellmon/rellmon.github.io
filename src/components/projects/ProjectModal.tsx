import type { ReactNode } from 'react'
import { Code, ExternalLink, Image as ImageIcon } from 'lucide-react'
import type { Project } from '../../types'
import Modal from '../ui/Modal'
import StatusBadge from '../ui/StatusBadge'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

type SectionProps = {
  title: string
  children: ReactNode
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="mt-8">
      <h3 className="font-display text-sm font-bold uppercase tracking-wider text-graphite">
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </section>
  )
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Modal
      open={project !== null}
      onClose={onClose}
      title={project?.name ?? ''}
      eyebrow={project && <StatusBadge status={project.status} />}
      wide
    >
      {project && (
        <>
          <p className="mt-3 text-graphite">{project.tagline}</p>

          <Section title="Overview">
            <p className="leading-relaxed">{project.overview}</p>
          </Section>

          <Section title="Problem">
            <p className="leading-relaxed">{project.problem}</p>
          </Section>

          <Section title="Key features">
            <ul className="list-disc space-y-1 pl-5">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </Section>

          <Section title="Technologies">
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-lavender/20 px-3 py-1 text-sm font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="My contributions">
            <ul className="list-disc space-y-1 pl-5">
              {project.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Screenshots">
            {project.screenshots?.length ? (
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.screenshots.map((shot) => (
                    <li key={shot.src}>
                    <img
                        src={shot.src}
                        alt={shot.alt}
                        loading="lazy"
                        decoding="async"
                        className="aspect-video w-full rounded-card bg-ink/10 object-cover"
                    />
                    </li>
                ))}
                </ul>
            ) : (
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[1, 2, 3].map((n) => (
                    <li
                    key={n}
                    className="flex aspect-video flex-col items-center justify-center gap-1 rounded-card bg-ink/10 text-xs text-neutral-600"
                    >
                    <ImageIcon size={28} strokeWidth={1.25} aria-hidden="true" />
                    Screenshot placeholder {n}
                    </li>
                ))}
                </ul>
            )}
          </Section>

          <Section title="Links">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-graphite"
              >
                <Code size={16} aria-hidden="true" />
                GitHub repository
              </a>

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-sun px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Live demo
                </a>
              ) : (
                <span className="text-sm text-graphite">
                  Live demo not available yet
                </span>
              )}
            </div>
          </Section>
        </>
      )}
    </Modal>
  )
}