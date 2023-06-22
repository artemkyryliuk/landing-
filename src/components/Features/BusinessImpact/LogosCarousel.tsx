import { Container, Flex, Image } from '@mantine/core'

import nhs from '/src/assets/svg/nhs.svg'
import gfk from '/src/assets/svg/gfk.svg'
import gov from '/src/assets/svg/gov.svg'
import ab from '/src/assets/svg/ab.svg'
import visa from '/src/assets/svg/visa.svg'
import jil from '/src/assets/svg/jil.svg'
import gsk from '/src/assets/svg/gsk.svg'
import emvco from '/src/assets/svg/emvco.svg'
import ucsf from '/src/assets/svg/ucsf.svg'

export default function LogosCarousel() {
  const logosList = [nhs, gfk, gov, ab, visa, jil, gsk, emvco, ucsf].map(
    (logo) => (
      <Image
        key={logo}
        src={logo}
        width={60}
        styles={(theme) => ({
          imageWrapper: { [theme.fn.smallerThan('sm')]: { width: 40 } },
        })}
      />
    )
  )

  return (
    <Container
      pos="relative"
      p={0}
      w="100%"
      h="auto"
      sx={{
        overflow: 'hidden',
        '&:hover .track': {
          animationPlayState: 'paused',
        },
      }}
    >
      <Container
        p={0}
        pos="absolute"
        w="100%"
        h="100%"
        bg={`linear-gradient(264deg, #010415, rgba(1, 4, 21, 0) 25%),
        linear-gradient(88deg, #010415, rgba(1, 4,21 ,0) 31%)`}
        sx={{ zIndex: 2 }}
      />

      <Flex
        className="track"
        w="200vw"
        sx={{
          overflow: 'hidden',
          willChange: 'transform',
          animation: 'tracking 30s linear infinite',
          '@keyframes tracking': {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        }}
      >
        <Flex justify="space-around" align="center" w="100vw">
          {logosList}
        </Flex>

        <Flex justify="space-around" align="center" w="100vw">
          {logosList}
        </Flex>
      </Flex>
    </Container>
  )
}
