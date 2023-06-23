import { Box, Flex } from '@mantine/core'

import SectionTitle from '../common/SectionTitle'
import Title from '../common/TitleH3'
import Text from '../common/Text'
import Subscriptions from './Subscriptions/Subscriptions'
import stripe from '/src/assets/svg/stripe.svg'

export default function Pricing() {
  return (
    <Box component="section" id="pricing" px={30} py={80} bg="#476c95">
      <Box mx="auto" maw={1280}>
        <SectionTitle> Pricing </SectionTitle>

        <Title mt={50} isCentered>
          Subscriptions to suit you
        </Title>

        <Text isDescription mt={25} ta="center">
          Pause or cancel any time. Prices exclude VAT.
        </Text>

        <Subscriptions />

        <Flex
          justify="center"
          gap="1rem"
          mt={50}
          mx="auto"
          p={10}
          maw={500}
          fs="italic"
          bg="#315b87"
          sx={{ borderRadius: '0.8rem' }}
        >
          <img src={stripe} width={40} />

          <Text styled isDescription>
            We will contribute 1% of your purchase to removing carbon from the
            atmosphere.
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}
