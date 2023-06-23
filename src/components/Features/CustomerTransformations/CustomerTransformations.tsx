import { Container } from '@mantine/core'

import Title from '../../common/TitleH3'
import Text from '../../common/Text'
import StyledCarousel from './Carousel'

export default function CustomerTransformations() {
  return (
    <Container fluid p={0} py={50}>
      <Title isCentered> Customer transformations </Title>

      <Text isDescription mt={25} ta="center">
        Innovate. Optimise. Grow.
      </Text>

      <StyledCarousel />
    </Container>
  )
}
