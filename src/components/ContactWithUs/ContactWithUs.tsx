import { Box } from '@mantine/core'

import SectionTitle from '../common/SectionTitle'
import TitleH2 from '../common/TitleH2'
import ContactForm from './ContactForm'
import contactBg from '/src/assets/images/contact-bg.jpg'

export default function ContactWithUs() {
  return (
    <Box
      component="section"
      id="contactwithus"
      px={30}
      py={100}
      mih="100vh"
      bg={`url(${contactBg}) fixed`}
      bgsz="cover"
      sx={(theme) => ({
        [theme.fn.smallerThan('lg')]: { backgroundAttachment: 'inherit' },
      })}
    >
      <Box mx="auto" maw={1280}>
        <SectionTitle> Contact with us </SectionTitle>

        <TitleH2 mt={25}>Leave your contacts for feedback</TitleH2>

        <ContactForm />
      </Box>
    </Box>
  )
}
