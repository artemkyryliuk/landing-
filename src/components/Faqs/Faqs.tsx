import { Box } from '@mantine/core'

import SectionTitle from '../common/SectionTitle'
import Title from '../common/Title'
import Accordion from './Accordion/Accordion'

export default function Faqs() {
  return (
    <Box
      component="section"
      id="faqs"
      px={30}
      py={80}
      bg="linear-gradient(#4e87b3, #97bce5)"
    >
      <Box mx="auto" maw={1280}>
        <SectionTitle> FAQs </SectionTitle>

        <Title mt={50} isCentered>
          Frequently Asked Questions
        </Title>

        <Accordion />
      </Box>
    </Box>
  )
}
