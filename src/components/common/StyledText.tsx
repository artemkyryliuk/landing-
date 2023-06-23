import { SystemProp, Text } from '@mantine/core'

export default function StyledText({
  mt,
  mb,
  maw,
  mih,
  ta,
  children,
}: {
  mt?: string | number
  mb?: string | number
  maw?: string | number
  mih?: string | number
  ta?: SystemProp<React.CSSProperties['textAlign']>
  children: React.ReactNode
}) {
  return (
    <Text
      component="p"
      mt={mt}
      mb={mb}
      maw={maw}
      mih={mih}
      ta={ta}
      fz="1.5rem"
      fw={300}
    >
      {children}
    </Text>
  )
}
