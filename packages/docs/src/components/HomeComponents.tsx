export function Divider({ space }: { space: string }) {
  return <div style={{ padding: space }} />
}

export function Image({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} />
}
