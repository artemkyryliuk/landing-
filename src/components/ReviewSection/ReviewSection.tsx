import { Box, Flex, Stack, Title } from '@mantine/core'

import Text from '../common/Text'

export default function ReviewSection({
  review: { bg, logo, text, photo, author, career },
}: {
  review: {
    bg: string
    logo: string
    text: string
    photo: string
    author: string
    career: string
  }
}) {
  return (
    <Stack align="center" px={30} py={50} bg={bg}>
      <img src={logo} width={70} height={70} />

      <Title order={3} mt={25} maw={500} ta="center" fz="1.5rem" fw={400}>
        {text}
      </Title>

      <Flex
        pos="relative"
        align="center"
        gap={30}
        mt={25}
        sx={(theme) => ({
          [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
            textAlign: 'center',
          },
        })}
      >
        <img src={photo} width={160} height={160} />

        <Box fs="italic">
          <Text> {author} </Text>

          <Text isDescription> {career} </Text>
        </Box>
      </Flex>
    </Stack>
  )
}
