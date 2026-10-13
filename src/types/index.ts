export type Photo = {
  src: string
  alt: string
}

export type Profile = {
  name: string
  headline: string
  intro: string
  email: string
  photo?: Photo
  altPhoto?: Photo
}

export type ProjectStatus = 'completed' | 'in-progress' | 'planned'

export type Project = {
  id: string
  name: string
  tagline: string
  status: ProjectStatus
  stack: string[]
  overview: string
  problem: string
  features: string[]
  contributions: string[]
  repoUrl: string
  demoUrl?: string
  cover?: string
  screenshots?: Photo[]
}

export type SectionId = 'projects' | 'about' | 'skills' | 'experience' | 'education' | 'contact'

export type SkillGroup = {
  category: string
  items: string[]
}

export type ExperienceEntry = {
  role: string
  organization: string
  period: string
  duration: string
  summary: string
  responsibilities: string[]
}

export type EducationEntry = {
  degree: string
  shortDegree: string
  school: string
  period: string
}