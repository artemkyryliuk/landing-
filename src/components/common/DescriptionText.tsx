import { SystemProp, Text } from '@mantine/core'

export default function DescriptionText({
  mih,
  ta,
  children,
}: {
  mih?: string | number
  ta?: SystemProp<React.CSSProperties['textAlign']>
  children: React.ReactNode
}) {
  return (
    <Text component="p" mih={mih} ta={ta} c="#bbb" fz="1.2rem">
      {children}
    </Text>
  )
}
