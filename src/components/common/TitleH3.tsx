import { SystemProp, Title as MTitle } from '@mantine/core'

export default function TitleH3({
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
    <MTitle order={3} mt={mt} ta={ta} c={c} fz={'1.8rem'} fw={400}>
      {children}
    </MTitle>
  )
}
