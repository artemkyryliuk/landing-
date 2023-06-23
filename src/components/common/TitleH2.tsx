import { SystemProp, Title } from '@mantine/core'

export default function TitleH2({
  c = 'inherit',
  mt,
  ta = 'center',
  children,
}: {
  c?: string
  mt?: string | number
  ta?: SystemProp<React.CSSProperties['textAlign']>
  children: React.ReactNode
}) {
  return (
    <Title order={2} mt={mt} ta={ta} c={c} fz="2.6rem" fw={300}>
      {children}
    </Title>
  )
}
