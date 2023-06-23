import { Box, Container, Flex, Text as MText } from '@mantine/core'

import TitleH3 from '../../common/TitleH3'
import StyledText from '../../common/StyledText'
import CheckIcon from '../../common/CheckIcon'
import Text from '../../common/Text'
import DescriptionText from '../../common/DescriptionText'
import Button from '../../common/Button'

export default function SubscriptionBlock({
  subscription: { img, name, description, items, price },
}: {
  subscription: {
    img: string
    name: string
    description: string
    items: string[]
    price: number
  }
}) {
  return (
    <Container
      mt={50}
      mx="auto"
      p="1.5rem"
      maw={500}
      bg="#315b87"
      sx={{ borderRadius: '0.8rem' }}
    >
      <Box>
        <Flex justify="space-between" align="flex-start" h={64}>
          <img src={img} width={64} />

          {name === 'Pathfinder' && (
            <MText
              component="p"
              px={10}
              py={5}
              bg="#ffffff22"
              sx={{ borderRadius: 80 }}
            >
              Popular
            </MText>
          )}
        </Flex>
        <TitleH3 mt={10} ta="start">
          {name}
        </TitleH3>
      </Box>

      <Box>
        <StyledText mt={20} mb={30} mih={90}>
          {description}
        </StyledText>

        {[
          items.map((item) => (
            <Flex key={item} gap={20} align="baseline">
              <CheckIcon />
              <Text>{item}</Text>
            </Flex>
          )),
        ]}

        <Flex gap="0.5rem" mt={30} mb={30}>
          <DescriptionText> GBP </DescriptionText>

          <Text> {`£${price.toLocaleString('en-UK')} per week`} </Text>
        </Flex>

        <Button w="100%"> Subscribe </Button>
      </Box>
    </Container>
  )
}
