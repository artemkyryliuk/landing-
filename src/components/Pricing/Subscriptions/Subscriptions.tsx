import { SimpleGrid } from '@mantine/core'

import SubscriptionBlock from './SubscriptionBlock'
import { subscriptionsData } from './subscriptionsData'

export default function Subscriptions() {
  return (
    <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'lg', cols: 1 }]}>
      {subscriptionsData.map((subscription) => (
        <SubscriptionBlock
          key={subscription.name}
          subscription={subscription}
        />
      ))}
    </SimpleGrid>
  )
}
