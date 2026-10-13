import { useEffect, useState } from 'react'
import CornerBracket from './CornerBracket'

type StretchedHeadingProps = {
  text: string
  className?: string
}

type Box = { x: number; y: number; width: number; height: number }

const FONT_SIZE = 100
// Must match the CSS: font-display (Syne Variable) at font-extrabold (800)
const FONT = `800 ${FONT_SIZE}px "Syne Variable"`

// Used only if measuring is impossible, so the heading still appears
const FALLBACK: Box = { x: 0, y: -75, width: 800, height: 75 }

function measure(text: string): Box | null {
  const ctx = document.createElement('canvas').getContext('2d')
  if (!ctx) return null

  ctx.font = FONT
  const m = ctx.measureText(text)

  return {
    x: -m.actualBoundingBoxLeft,
    y: -m.actualBoundingBoxAscent,
    width: m.actualBoundingBoxLeft + m.actualBoundingBoxRight,
    height: m.actualBoundingBoxAscent + m.actualBoundingBoxDescent,
  }
}

export default function StretchedHeading({ text, className = '' }: StretchedHeadingProps) {
  const [box, setBox] = useState<Box | null>(null)

  useEffect(() => {
    let cancelled = false

    // Wait for the font so we measure the real glyphs, not a fallback font
    document.fonts
      .load(FONT, text)
      .catch(() => undefined)
      .then(() => {
        if (!cancelled) setBox(measure(text) ?? FALLBACK)
      })

    return () => {
      cancelled = true
    }
  }, [text])

  const { x, y, width, height } = box ?? FALLBACK

  return (
    <h1 className={`relative ${className}`}>
      {/* Real text for screen readers; the SVG below is only the visual */}
      <span className="sr-only">{text}</span>

      <svg
        viewBox={`${x} ${y} ${width} ${height}`}
        aria-hidden="true"
        className={`block h-auto w-full overflow-visible transition-opacity duration-200 ${
          box ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <text
          x="0"
          y="0"
          fontSize={FONT_SIZE}
          className="fill-ink font-display font-extrabold"
        >
          {text}
        </text>
      </svg>

      <CornerBracket className="right-0 top-0" />
    </h1>
  )
}