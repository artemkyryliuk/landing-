import { Container } from '@mantine/core'

import TitleH2 from '../../common/TitleH2'
import StatsGrid from './StatsGrid'
import LogosCarousel from './LogosCarousel'

export default function BusinessImpact() {
  return (
    <Container p={0} py={50} fluid ta="center">
      <TitleH2>
        Experience the benefits of UX design without all the risk and costs.
      </TitleH2>

      <StatsGrid />

      <LogosCarousel />
    </Container>
  )
}
