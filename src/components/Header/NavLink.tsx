import { Anchor } from '@mantine/core'

export default function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Anchor
      href={href}
      px="1.2rem"
      py="0.4rem"
      c="#fff"
      bg="transparent"
      fw={400}
      sx={{
        borderRadius: '80px',
        transition:
          'all .2s cubic-bezier(.55,.085,.68,.53),background-color .2s cubic-bezier(.55,.085,.68,.53)',
        '&:hover': {
          color: '#141727',
          backgroundColor: 'rgba(255,255,255,.9)',
          textDecoration: 'none',
        },
      }}
    >
      {children}
    </Anchor>
  )
}
