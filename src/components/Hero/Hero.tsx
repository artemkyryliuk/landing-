import { Box, Flex, Container, SimpleGrid, Stack } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import Text from '../common/Text'
import Title from '../common/Title'
import Button from '../common/Button'
import heroBg from '../../assets/images/hero-bg.jpg'
import logo from '/src/assets/svg/logo.svg'
import { heroData } from './heroData'

export default function Hero() {
  const matchesMobile = useMediaQuery('(max-width: 74.95rem)')

  return (
    <Box
      component="section"
      id="hero"
      bg={`url(${heroBg}) fixed center`}
      sx={(theme) => ({
        [theme.fn.smallerThan('lg')]: { backgroundSize: '200%' },
        [theme.fn.smallerThan('md')]: { backgroundSize: '300%' },
        [theme.fn.smallerThan('sm')]: { backgroundSize: '400%' },
      })}
    >
      <Box />
      <Flex
        justify="space-between"
        align="center"
        mx="auto"
        px={30}
        maw={1280}
        h={780}
        sx={(theme) => ({
          [theme.fn.smallerThan('lg')]: {
            flexDirection: 'column',
            justifyContent: 'center',
          },
        })}
      >
        <Container
          p={0}
          pr={matchesMobile ? 150 : 0}
          pb={matchesMobile ? 50 : 0}
          sx={(theme) => ({
            [theme.fn.smallerThan('lg')]: { display: 'none' },
          })}
        >
          <img src={logo} width={300} />

          <SimpleGrid cols={3} spacing={25} mt={50} w={500}>
            {heroData.map(({ src, text }) => (
              <Stack key={text}>
                <img src={src} width={32} />
                <Text> {text} </Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Container>

        <Container p={0} maw={450}>
          <Title>
            The only product design subscription to level up your UX + UI.
          </Title>

          <Text isDescription mt="1.2rem" mb="3.6rem">
            For B2B, enterprise software and SaaS companies. Plus a bunch of
            goodies you won't find anywhere else.
          </Text>

          <Button href="#features"> Why we? </Button>
        </Container>
      </Flex>
    </Box>
  )
}
