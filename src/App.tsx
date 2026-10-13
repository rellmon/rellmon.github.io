import { useState } from 'react'
import PageShell from './components/layout/PageShell'
import SideNav from './components/layout/SideNav'
import ProfileCard from './components/profile/ProfileCard'
import ProjectCard from './components/cards/ProjectCard'
import SkillsCard from './components/cards/SkillsCard'
import EducationCard from './components/cards/EducationCard'
import ExperienceCard from './components/cards/ExperienceCard'
import ProjectModal from './components/projects/ProjectModal'
import SectionModal from './components/sections/SectionModal'
import StretchedHeading from './components/ui/StretchedHeading'
import { profile } from './data/profile'
import { projects } from './data/projects'
import type { Project, SectionId } from './types'

export default function App() {
  // The first three projects in projects.ts fill the bento grid.
  // Every project (including a 4th, 5th...) appears under "Projects" in the nav.
  const [featured, second, third] = projects
  const [selected, setSelected] = useState<Project | null>(null)
  const [section, setSection] = useState<SectionId | null>(null)

  const handleSelect = (project: Project) => setSelected(project)

  const handleSelectFromList = (project: Project) => {
    setSection(null)
    setSelected(project)
  }

  return (
    <PageShell>
      <div className="grid gap-4 sm:gap-6 lg:h-full lg:grid-cols-[auto_0.69fr_1fr]">
        {/* NAV RAIL */}
        <SideNav onOpen={setSection} />

        {/* LEFT: profile card */}
        <ProfileCard profile={profile} onOpenAbout={() => setSection('about')} />

        {/* RIGHT: bento section */}
        <div className="grid min-h-0 grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-12 lg:grid-rows-[auto_5fr_3fr]">
          <StretchedHeading
            text="Portfolio"
            className="rise-in col-span-2 [--rise-delay:80ms] lg:col-span-12"
          />

          {/* Featured project */}
          <ProjectCard
            project={featured}
            variant="featured"
            onSelect={handleSelect}
            className="rise-in col-span-2 aspect-[16/10] [--rise-delay:160ms] lg:col-span-8 lg:aspect-auto"
          />

          {/* Stack of two small cards */}
          <div className="col-span-2 grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-4 lg:grid-cols-1 lg:grid-rows-2">
            <ProjectCard
              project={second}
              variant="compact"
              tone="mint"
              onSelect={handleSelect}
              className="rise-in [--rise-delay:240ms]"
            />
            <ProjectCard
              project={third}
              variant="compact"
              tone="grape"
              onSelect={handleSelect}
              className="rise-in [--rise-delay:300ms]"
            />
          </div>

          {/* Skills */}
          <SkillsCard
            onSelect={() => setSection('skills')}
            className="rise-in col-span-2 [--rise-delay:360ms] lg:col-span-4"
          />

          {/* Education */}
          <EducationCard
            onSelect={() => setSection('education')}
            className="rise-in col-span-2 [--rise-delay:420ms] sm:col-span-1 lg:col-span-3"
          />

          {/* Experience */}
          <ExperienceCard
            onSelect={() => setSection('experience')}
            className="rise-in col-span-2 [--rise-delay:480ms] sm:col-span-1 lg:col-span-5"
          />
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
      <SectionModal
        section={section}
        onClose={() => setSection(null)}
        onSelectProject={handleSelectFromList}
      />
    </PageShell>
  )
}