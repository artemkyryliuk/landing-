import { SystemProp, Text } from '@mantine/core'

export default function DescriptionText({
  mt,
  mih,
  ta,
  children,
}: {
  mt?: string | number
  mih?: string | number
  ta?: SystemProp<React.CSSProperties['textAlign']>
  children: React.ReactNode
}) {
  return (
    <Text component="p" mt={mt} mih={mih} ta={ta} c="#bbb" fz="1.2rem">
      {children}
    </Text>
  )
}
