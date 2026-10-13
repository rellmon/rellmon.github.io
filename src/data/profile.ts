import type { Profile } from '../types'

export const profile: Profile = {
  name: 'Rexzell Abad',
  headline: 'IT Graduate | Aspiring Web Developer',
  intro:
    'BS Information Technology graduate who enjoys building web applications with Laravel and React.',
  email: 'rexzellmontezor@gmail.com',
  photo: { src: '/images/profile.webp', alt: 'PFP' },
  altPhoto: { src: '/images/profile-2.webp', alt: 'Cat PFP' },
}

export const about: string[] = [
  'I’m a BS Information Technology graduate looking for an entry-level software/ web development role.',
  'I enjoy building web applications that solve real-world problems while also creating fun and interactive experiences for users.',
]

export const contactLinks = {
  github: 'https://github.com/rellmon',
  linkedin: 'https://www.linkedin.com/in/rexzellabad/',
  resumeUrl: '/resume/RESUME.pdf',
}