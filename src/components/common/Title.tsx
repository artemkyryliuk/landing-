import { Title as MTitle } from '@mantine/core'

export default function Title({
  isSmall,
  c = '#fff',
  isCentered,
  mt,
  children,
}: {
  isSmall?: boolean
  c?: string
  isCentered?: boolean
  mt?: string | number
  children: React.ReactNode
}) {
  return (
    <MTitle
      order={isSmall ? 3 : 2}
      mt={mt}
      ta={isCentered ? 'center' : 'start'}
      c={c}
      fz={isSmall ? '1.8rem' : '2.6rem'}
      fw={isSmall ? 400 : 300}
    >
      {children}
    </MTitle>
  )
}
