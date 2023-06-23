import { SystemProp, Title as MTitle } from '@mantine/core'

export default function TitleH2({
  c = 'inherit',
  mt,
  ta,
  children,
}: {
  c?: string
  mt?: string | number
  ta?: SystemProp<React.CSSProperties['textAlign']>
  children: React.ReactNode
}) {
  return (
    <MTitle order={2} mt={mt} ta={ta} c={c} fz="2.6rem" fw={300}>
      {children}
    </MTitle>
  )
}
