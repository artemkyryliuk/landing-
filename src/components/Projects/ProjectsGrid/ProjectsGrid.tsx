import { Container, SimpleGrid } from '@mantine/core'

import ProjectLink from './ProjectLink'

export default function ProjectsGrid({
  bg,
  items,
}: {
  bg: string
  items: { img: string; href: string }[]
}) {
  return (
    <Container
      fluid
      px={50}
      py={100}
      bg={`url(${bg}) fixed center`}
      sx={(theme) => ({
        '@media (pointer: coarse)': {
          [theme.fn.smallerThan('lg')]: {
            backgroundAttachment: 'inherit',
          },
        },
      })}
    >
      <SimpleGrid
        cols={4}
        spacing={50}
        breakpoints={[
          { maxWidth: 'md', cols: 2 },
          { maxWidth: 'sm', cols: 1 },
        ]}
        mx="auto"
        maw={1280}
      >
        {items.map((item) => (
          <ProjectLink key={item.img} item={item} />
        ))}
      </SimpleGrid>
    </Container>
  )
}
