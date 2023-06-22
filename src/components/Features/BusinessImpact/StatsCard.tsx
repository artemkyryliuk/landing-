import { Flex, Title } from '@mantine/core'

import Text from '../../common/Text'
import Link from '../../common/Link'

export default function StatsCard({
  statsCard: { stat, text, source, href },
}: {
  statsCard: {
    stat: string
    text: string
    source: string
    href: string
  }
}) {
  return (
    <Flex direction="column" align="center" gap={20} miw={250}>
      <Flex
        mb={20}
        justify="center"
        align="center"
        w="12rem"
        h="12rem"
        sx={{
          border: '3px solid #1B4F72',
          borderRadius: '50%',
          backgroundImage: 'linear-gradient(to top right,#002 , #ffffff11)',
          textShadow: '0px 0px 10px #ffffffcc',
        }}
      >
        <Title order={2} mt="-0.2rem" size="2.5rem" fw={300}>
          {stat}
        </Title>
      </Flex>

      <Text styled> {text} </Text>

      <Link href={href}> {source} </Link>
    </Flex>
  )
}
