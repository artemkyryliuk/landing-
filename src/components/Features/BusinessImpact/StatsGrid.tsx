import { SimpleGrid } from '@mantine/core'

import StatsCard from './StatsCard'
import { statsGrid } from './stats-grid'

export default function StatsGrid() {
  return (
    <SimpleGrid
      cols={4}
      spacing={75}
      breakpoints={[
        { maxWidth: 'lg', cols: 2 },
        { maxWidth: 'xs', cols: 1 },
      ]}
      my={100}
    >
      {statsGrid.map((statsCard) => (
        <StatsCard key={statsCard.source} statsCard={statsCard} />
      ))}
    </SimpleGrid>
  )
}
