import { Container } from '@mantine/core'

import TitleH2 from '../../common/TitleH2'
import DescriptionText from '../../common/DescriptionText'
import StyledCarousel from './Carousel'

export default function CustomerTransformations() {
  return (
    <Container fluid p={0} py={50}>
      <TitleH2> Customer transformations </TitleH2>

      <DescriptionText mt={25} ta="center">
        Innovate. Optimise. Grow.
      </DescriptionText>

      <StyledCarousel />
    </Container>
  )
}
