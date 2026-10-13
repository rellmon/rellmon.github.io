type CircularBadgeProps = {
  className?: string
}

export default function CircularBadge({ className = '' }: CircularBadgeProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={`size-24 ${className}`}
    >
      <circle cx="50" cy="50" r="48" className="fill-mint" />
      <defs>
        <path
          id="badge-circle"
          d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
        />
      </defs>
      <text className="fill-ink text-[8px] font-semibold uppercase">
        <textPath
          href="#badge-circle"
          textLength="217"
          lengthAdjust="spacing"
        >
          BSIT graduate · Portfolio ·
        </textPath>
      </text>
      <circle cx="50" cy="50" r="9" className="fill-ink" />
      <circle cx="50" cy="50" r="3.5" className="fill-mint" />
    </svg>
  )
}