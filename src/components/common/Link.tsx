import { Anchor } from '@mantine/core'

export default function Link({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Anchor href={href} target="_blank" c="#F5B041" fz="1.2rem" fw={500}>
      {children}
    </Anchor>
  )
}
