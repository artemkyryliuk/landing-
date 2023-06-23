import { Anchor, Container, Stack, Title } from '@mantine/core'

import StyledText from '../../common/StyledText'
import DescriptionText from '../../common/DescriptionText'

export default function Slide({
  slide: { img, label, text, href, source },
}: {
  slide: {
    img: string
    label: string
    text: string
    href: string
    source: string
  }
}) {
  return (
    <Container p={0} sx={{ borderRadius: '1rem', overflow: 'hidden' }}>
      <img src={img} width="100%" />

      <Title
        order={3}
        pos="absolute"
        top={0}
        p={10}
        c="#000"
        bg="#fff"
        fz="1.5rem"
        fw={400}
        sx={{
          borderTopLeftRadius: '1rem',
          borderBottomRightRadius: '1rem',
          fontStyle: 'italic',
          boxShadow: '0px 0px 10px #000000cc',
        }}
      >
        {label}
      </Title>

      <Stack p={20} align="flex-start" bg="#000" fz="1.2rem">
        <StyledText> {text} </StyledText>

        {href ? (
          <Anchor href={href} target="_blank" c="#F5B041">
            {source}
          </Anchor>
        ) : (
          <DescriptionText> {source} </DescriptionText>
        )}
      </Stack>
    </Container>
  )
}
