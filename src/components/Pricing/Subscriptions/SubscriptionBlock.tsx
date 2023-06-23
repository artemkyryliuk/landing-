import { Box, Container, Flex, Text as MText } from '@mantine/core'

import Title from '../../common/TitleH3'
import FeatureItem from '../../common/FeatureItem'
import CheckIcon from '../../common/CheckIcon'
import Text from '../../common/Text'
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
        <Title isSmall mt={10}>
          {name}
        </Title>
      </Box>

      <Box>
        <Text isDescription mt={20} mb={30} mih={90}>
          {description}
        </Text>

        {[
          items.map((item) => (
            <FeatureItem key={item} icon={<CheckIcon />} text={item} />
          )),
        ]}

        <Flex gap="0.5rem" mt={30} mb={30}>
          <Text isDescription> GBP </Text>

          <Text> {`£${price.toLocaleString('en-UK')} per week`} </Text>
        </Flex>

        <Button fullWidth> Subscribe </Button>
      </Box>
    </Container>
  )
}
