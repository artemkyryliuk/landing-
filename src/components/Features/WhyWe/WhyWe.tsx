import { Flex, Image, Stack } from '@mantine/core'

import StarIcon from './StarIcon'
import bg from '/src/assets/images/feat.jpg'
import TitleH2 from '../../common/TitleH2'
import StyledText from '../../common/StyledText'
import { whyWe } from './why-we'

export default function WhyWe() {
  return (
    <Flex
      py={50}
      sx={(theme) => ({
        [theme.fn.smallerThan('md')]: { flexDirection: 'column-reverse' },
      })}
    >
      <Stack
        spacing={50}
        maw="45%"
        sx={(theme) => ({ [theme.fn.smallerThan('md')]: { maxWidth: '100%' } })}
      >
        <TitleH2> We'll take care of the UX so you can grow faster. </TitleH2>

        {whyWe.map((item) => (
          <Flex key={item} gap={20} align="baseline">
            <StarIcon />
            <StyledText> {item} </StyledText>
          </Flex>
        ))}
      </Stack>

      <Image
        src={bg}
        sx={(theme) => ({ [theme.fn.smallerThan('md')]: { width: '60%' } })}
      />
    </Flex>
  )
}
