import { Box } from '@mantine/core'

import Title from '../common/Title'
import SectionTitle from '../common/SectionTitle'
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

        <Title isCentered mt={25}>
          Leave your contacts for feedback
        </Title>

        <ContactForm />
      </Box>
    </Box>
  )
}
