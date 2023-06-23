import { SystemProp, Text as MText } from '@mantine/core'

export default function Text({
  mt,
  mb,
  mih,
  ta,
  children,
}: {
  isDescription?: boolean
  mt?: string | number
  mb?: string | number
  mih?: string | number
  ta?: SystemProp<React.CSSProperties['textAlign']>
  children: React.ReactNode
}) {
  return (
    <MText component="p" mt={mt} mb={mb} mih={mih} ta={ta} fz="1.2rem">
      {children}
    </MText>
  )
}
