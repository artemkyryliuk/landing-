import {
  Box,
  Button,
  Flex,
  NativeSelect,
  Rating,
  Textarea,
  TextInput,
} from '@mantine/core'

import Title from '../common/TitleH3'

export default function ContactForm() {
  const commonProps = {
    required: true,
    withAsterisk: true,
  }

  const accentColor = '#5072a5'
  const backgroundColor = '#eee'
  const fontSize = '1rem'

  return (
    <Box
      mt={50}
      mx="auto"
      maw={700}
      bg="#fff"
      sx={{ borderRadius: 10, overflow: 'hidden' }}
    >
      <Box h={10} bg={accentColor} />

      <Title isSmall isCentered mt={50} c={accentColor}>
        Contact form
      </Title>

      <form onSubmit={(e) => e.preventDefault()}>
        <Flex
          gap={50}
          p={50}
          sx={(theme) => ({
            [theme.fn.smallerThan('sm')]: { flexDirection: 'column' },
          })}
        >
          <Flex
            direction="column"
            justify="space-between"
            w={220}
            h={240}
            sx={(theme) => ({
              [theme.fn.smallerThan('sm')]: { width: '100%' },
            })}
          >
            <TextInput
              name="name"
              type="text"
              label="Your name"
              styles={{
                input: { backgroundColor, fontSize },
                label: { fontSize },
              }}
              {...commonProps}
            />

            <TextInput
              type="email"
              label="Your email"
              styles={{
                input: { backgroundColor, fontSize },
                label: { fontSize },
              }}
              {...commonProps}
            />

            <NativeSelect
              label="Category"
              data={['Question', 'Subscription', 'Proposal', 'Review']}
              styles={{
                input: {
                  backgroundColor,
                  fontSize,
                  option: {
                    color: '#000',
                    fontSize: '1rem',
                    fontWeight: 400,
                  },
                },
                label: { fontSize },
                rightSection: { path: { fill: accentColor } },
              }}
              {...commonProps}
            />
          </Flex>

          <Flex
            direction="column"
            justify="space-between"
            h={240}
            sx={(theme) => ({
              flexGrow: 1,
              [theme.fn.smallerThan('xs')]: { width: '100%' },
            })}
          >
            <Textarea
              label="Your message"
              minRows={4}
              styles={{
                input: { backgroundColor, fontSize },
                label: { fontSize },
              }}
              {...commonProps}
            />

            <Rating size="lg" color="blue" />

            <Button type="submit" color="gray" fz="1rem">
              Submit
            </Button>
          </Flex>
        </Flex>
      </form>

      <Box mt={25} h={10} bg="#5072a5" />
    </Box>
  )
}
