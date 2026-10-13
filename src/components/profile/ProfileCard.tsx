import { useState } from 'react'
import { ArrowUpRight, Flower2, Mail, Smile, User } from 'lucide-react'
import type { Profile } from '../../types'
import CircularBadge from '../ui/CircularBadge'
import ImageWithFallback from '../ui/ImageWithFallback'

type ProfileCardProps = {
  profile: Profile
  onOpenAbout: () => void
}

export default function ProfileCard({ profile, onOpenAbout }: ProfileCardProps) {
  const [swapped, setSwapped] = useState(false)

  // Which photo is showing right now
  const photo = swapped ? profile.altPhoto : profile.photo

  const placeholder = swapped ? (
    <Smile className="size-1/3" strokeWidth={1.25} aria-hidden="true" />
  ) : (
    <User className="size-1/3" strokeWidth={1.25} aria-hidden="true" />
  )

  return (
    <aside
      aria-label="About me"
      className="rise-in relative flex min-h-[34rem] flex-col rounded-card bg-lavender p-6 text-white [--focus-ring:white]"
    >
      <button
        type="button"
        onClick={onOpenAbout}
        className="flex w-fit items-center gap-2 rounded-full text-sm font-medium transition-opacity hover:opacity-60"
      >
        <Flower2 size={16} aria-hidden="true" />
        About Me
        <ArrowUpRight size={14} aria-hidden="true" />
      </button>

      {/* Photo circle + "Click me" bubble */}
      <div className="relative mx-auto mt-4 aspect-square w-64 shrink-0 sm:w-72 lg:w-[min(100%,clamp(16rem,calc(100dvh-33rem),34rem))]">
        <button
          type="button"
          onClick={() => setSwapped((current) => !current)}
          aria-label="Swap profile photo"
          aria-pressed={swapped}
          className="size-full rounded-full border-4 border-white p-3 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] lg:p-4"
        >
          <span
            className={`grid size-full place-items-center overflow-hidden rounded-full transition-colors duration-300 ${
              swapped ? 'bg-mint text-ink' : 'bg-blush text-ink'
            }`}
          >
            {photo ? (
              <ImageWithFallback
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={512}
                height={512}
                className="size-full object-cover"
                fallback={placeholder}
              />
            ) : (
              placeholder
            )}
          </span>
        </button>

        {/* Decorative: the button above already has an accessible name */}
        <span
          aria-hidden="true"
          className="bob pointer-events-none absolute right-0 top-2 rounded-2xl bg-white px-3 py-1.5 text-sm font-semibold text-ink shadow-md sm:-right-2"
        >
          Click me
          <span className="absolute -bottom-1 left-4 size-3 rotate-45 bg-white" />
        </span>
      </div>

      <div className="mt-auto pt-6">
        <h2 className="font-display leading-[1.05]">
          <span className="block text-3xl font-normal">I’m,</span>
          <span className="block text-4xl font-bold sm:text-5xl">
            {profile.name}
          </span>
        </h2>

        <p className="mt-3 text-sm font-medium">{profile.headline}</p>

        <div className="pr-24">
          <p className="mt-2 text-sm leading-relaxed text-white">
            {profile.intro}
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-flex items-center gap-2 border-b border-dashed border-white/70 pb-1 text-sm"
          >
            <Mail size={14} aria-hidden="true" />
            {profile.email}
          </a>
        </div>
      </div>

      <CircularBadge className="absolute bottom-6 right-6" />
    </aside>
  )
}