import { Box, Title } from '@mantine/core'

export default function SectionTitle({
  children,
}: {
  children: React.ReactNode
}) {
  const shadow = '0px 0px 10px #ffffff88'

  return (
    <>
      <Title
        order={2}
        fz="2rem"
        fw={400}
        lts={10}
        sx={(theme) => ({
          textShadow: shadow,
          [theme.fn.smallerThan('xs')]: { fontSize: '1.8rem' },
        })}
      >
        {children}
      </Title>

      <Box mt={10} w={100} h={5} bg="#fff" sx={{ boxShadow: shadow }} />
    </>
  )
}
