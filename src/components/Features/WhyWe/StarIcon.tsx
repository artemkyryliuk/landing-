import { Box } from '@mantine/core'

export default function StarIcon() {
  return (
    <Box
      component="figure"
      miw={25}
      mih={25}
      bg="#fff"
      sx={{
        clipPath:
          'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
      }}
    />
  )
}
