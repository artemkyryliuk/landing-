import { Title } from '@mantine/core'

export default function AccentTitle({
  mt,
  mb,
  children,
}: {
  mt?: string | number
  mb?: string | number
  children: React.ReactNode
}) {
  return (
    <Title order={2} mt={mt} mb={mb} fz="2rem" ff="Oswald">
      {children}
    </Title>
  )
}
