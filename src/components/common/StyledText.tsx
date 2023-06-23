import { Text } from '@mantine/core'

export default function StyledText({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Text component="p" fz="1.5rem" fw={300}>
      {children}
    </Text>
  )
}
