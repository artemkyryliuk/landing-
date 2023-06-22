import { Tabs } from '@mantine/core'

import WhyWe from './WhyWe/WhyWe'
import BusinessImpact from './BusinessImpact/BusinessImpact'
import CustomerTransformations from './CustomerTransformations/CustomerTransformations'

export default function TabsSection() {
  const accentColor = '#2c3051'

  return (
    <Tabs
      defaultValue="whywe"
      mt={50}
      styles={{
        tab: {
          fontSize: '1.2rem',
          transition: '0.3s',
          '&:hover': { backgroundColor: '#ffffff22' },
          '&[data-active]': {
            borderColor: accentColor,
            backgroundColor: accentColor,
            letterSpacing: '0.3rem',
            fontWeight: 700,
          },
          '&:hover[data-active]': { borderColor: accentColor },
        },
      }}
    >
      <Tabs.List grow>
        <Tabs.Tab value="whywe"> Why we? </Tabs.Tab>
        <Tabs.Tab value="businessimpact"> Business impact </Tabs.Tab>
        <Tabs.Tab value="customertransformations">
          Customer transformations
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="whywe">
        <WhyWe />
      </Tabs.Panel>

      <Tabs.Panel value="businessimpact">
        <BusinessImpact />
      </Tabs.Panel>

      <Tabs.Panel value="customertransformations">
        <CustomerTransformations />
      </Tabs.Panel>
    </Tabs>
  )
}
