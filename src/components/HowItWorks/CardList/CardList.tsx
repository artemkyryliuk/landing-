import { Stack } from '@mantine/core'

import Card from './Card'
import { howItWorksData } from '../howItWorksData'

export default function CardList() {
  return (
    <Stack align="center" spacing={100} mt={75}>
      {howItWorksData.map((card) => (
        <Card key={card.title} card={card} />
      ))}
    </Stack>
  )
}
