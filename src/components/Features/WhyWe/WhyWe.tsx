import { Flex, Image } from '@mantine/core'

import AccentTitle from '../../common/AccentTitle'
import FeatureItem from '../../common/FeatureItem'
import StarIcon from './StarIcon'
import bg from '/src/assets/images/feat.jpg'
import { whyWe } from './why-we'

export default function WhyWe() {
  return (
    <Flex
      py={50}
      sx={(theme) => ({
        [theme.fn.smallerThan('md')]: { flexDirection: 'column-reverse' },
      })}
    >
      <Flex
        direction="column"
        gap={25}
        maw="45%"
        sx={(theme) => ({ [theme.fn.smallerThan('md')]: { maxWidth: '100%' } })}
      >
        <AccentTitle mb={50}>
          We'll take care of the UX so you can grow faster.
        </AccentTitle>

        {whyWe.map((item) => (
          <FeatureItem key={item} styled icon={<StarIcon />} text={item} />
        ))}
      </Flex>

      <Image
        src={bg}
        sx={(theme) => ({ [theme.fn.smallerThan('md')]: { width: '60%' } })}
      />
    </Flex>
  )
}
