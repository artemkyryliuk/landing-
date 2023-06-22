import { SystemProp, Text as MText } from '@mantine/core'

export default function Text({
  styled,
  isDescription,
  mt,
  mb,
  mih,
  ta,
  children,
}: {
  styled?: boolean
  isDescription?: boolean
  mt?: string | number
  mb?: string | number
  mih?: string | number
  ta?: SystemProp<React.CSSProperties['textAlign']>
  children: React.ReactNode
}) {
  return (
    <MText
      component="p"
      mt={mt}
      mb={mb}
      mih={mih}
      ta={ta}
      opacity={isDescription ? 0.75 : 1}
      fz={styled ? '1.5rem' : '1.2rem'}
      fw={styled ? 300 : 500}
    >
      {children}
    </MText>
  )
}
