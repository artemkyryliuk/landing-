import { Flex } from '@mantine/core'

import TitleH2 from '../../common/TitleH2'
import StyledText from '../../common/StyledText'
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
        <TitleH2 mt="-0.2rem">{stat}</TitleH2>
      </Flex>

      <StyledText> {text} </StyledText>

      <Link href={href}> {source} </Link>
    </Flex>
  )
}
