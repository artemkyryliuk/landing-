import { Box, Flex, SimpleGrid, Stack } from '@mantine/core'

import TitleH3 from '../../common/TitleH3'
import DescriptionText from '../../common/DescriptionText'
import CheckIcon from '../../common/CheckIcon'
import Text from '../../common/Text'

export default function Card({
  card: { img, title, text, items },
}: {
  card: {
    img: string
    title: string
    text: string
    items: string[]
  }
}) {
  return (
    <SimpleGrid
      cols={2}
      spacing={35}
      breakpoints={[{ maxWidth: 'md', cols: 1 }]}
      maw={960}
      sx={{ alignItems: 'center' }}
    >
      <img src={img} width="100%" style={{ borderRadius: '0.8rem' }} />

      <Stack maw={550}>
        <TitleH3 ta="start"> {title} </TitleH3>

        <DescriptionText>{text}</DescriptionText>

        <Box>
          {items.map((item) => (
            <Flex key={item} gap={20} align="baseline">
              <CheckIcon />
              <Text> {item} </Text>
            </Flex>
          ))}
        </Box>
      </Stack>
    </SimpleGrid>
  )
}
