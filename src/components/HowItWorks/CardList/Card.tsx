import { Container, SimpleGrid } from '@mantine/core'

import Title from '../../common/TitleH3'
import Text from '../../common/Text'
import FeatureItem from '../../common/FeatureItem'
import CheckIcon from '../../common/CheckIcon'

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
    >
      <img src={img} style={{ borderRadius: '0.8rem' }} />

      <Container p={0} maw={550}>
        <Title isSmall> {title} </Title>

        <Text isDescription mt={25} mb={25}>
          {text}
        </Text>

        {items.map((item) => (
          <FeatureItem key={item} icon={<CheckIcon />} text={item} />
        ))}
      </Container>
    </SimpleGrid>
  )
}
