import { Box } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import SectionTitle from '../common/SectionTitle'
import TabsSection from './TabsSection'
import WhyWe from './WhyWe/WhyWe'
import BusinessImpact from './BusinessImpact/BusinessImpact'
import CustomerTransformations from './CustomerTransformations/CustomerTransformations'

export default function Features() {
  const matchesMobile = useMediaQuery('(max-width: 64rem)')

  return (
    <Box component="section" id="features" px={30} py={80} bg="#010415">
      <Box mx="auto" maw={1280}>
        <SectionTitle> Features </SectionTitle>

        {matchesMobile ? (
          <>
            <WhyWe />
            <BusinessImpact />
            <CustomerTransformations />
          </>
        ) : (
          <TabsSection />
        )}
      </Box>
    </Box>
  )
}
