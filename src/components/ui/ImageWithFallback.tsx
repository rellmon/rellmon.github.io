import { useState, type ReactNode } from 'react'

type ImageWithFallbackProps = {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  fallback: ReactNode
}

export default function ImageWithFallback({
  src,
  alt,
  className,
  width,
  height,
  fallback,
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false)

  if (failed) return <>{fallback}</>

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      decoding="async"
      className={className}
      onError={() => setFailed(true)}
    />
  )
}