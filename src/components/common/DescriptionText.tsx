import { SystemProp, Text } from '@mantine/core'

export default function DescriptionText({
  mt,
  mb,
  mih,
  ta,
  children,
}: {
  mt?: string | number
  mb?: string | number
  mih?: string | number
  ta?: SystemProp<React.CSSProperties['textAlign']>
  children: React.ReactNode
}) {
  return (
    <Text component="p" mt={mt} mb={mb} mih={mih} ta={ta} c="#bbb" fz="1.2rem">
      {children}
    </Text>
  )
}
