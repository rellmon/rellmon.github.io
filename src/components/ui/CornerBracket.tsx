type CornerBracketProps = {
  className?: string
}

export default function CornerBracket({ className = '' }: CornerBracketProps) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute size-3 border-t-2 border-r-2 border-current ${className}`}
    />
  )
}