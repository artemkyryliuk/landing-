import { Box } from '@mantine/core'

import SectionTitle from '../common/SectionTitle'
import Title from '../common/TitleH3'
import CardList from './CardList/CardList'

export default function HowItWorks() {
  return (
    <Box component="section" id="howitworks" px={30} py={80} bg="#2c3051">
      <Box mx="auto" maw={1280}>
        <SectionTitle> How it works </SectionTitle>

        <Title mt={50} isCentered>
          This is the future
        </Title>

        <CardList />
      </Box>
    </Box>
  )
}
