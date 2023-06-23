import { Container } from '@mantine/core'

import Title from '../../common/TitleH3'
import StatsGrid from './StatsGrid'
import LogosCarousel from './LogosCarousel'

export default function BusinessImpact() {
  return (
    <Container p={0} py={50} fluid ta="center">
      <Title isCentered>
        Experience the benefits of UX design without all the risk and costs.
      </Title>

      <StatsGrid />

      <LogosCarousel />
    </Container>
  )
}
