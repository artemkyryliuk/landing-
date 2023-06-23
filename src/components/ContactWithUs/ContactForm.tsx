import {
  Box,
  Button,
  Flex,
  NativeSelect,
  Rating,
  Textarea,
  TextInput,
} from '@mantine/core'

import TitleH3 from '../common/TitleH3'

export default function ContactForm() {
  const commonProps = {
    required: true,
    withAsterisk: true,
  }

  return (
    <Box
      mt={50}
      mx="auto"
      maw={700}
      bg="#ffffff88"
      sx={{ borderRadius: 10, overflow: 'hidden' }}
    >
      <Box h={10} bg="#5072a5" />

      <TitleH3 mt={50} c="#5072a5">
        Contact form
      </TitleH3>

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
                input: { fontSize: '1rem' },
                label: { fontSize: '1rem' },
              }}
              {...commonProps}
            />

            <TextInput
              type="email"
              label="Your email"
              styles={{
                input: { fontSize: '1rem' },
                label: { fontSize: '1rem' },
              }}
              {...commonProps}
            />

            <NativeSelect
              label="Category"
              data={['Question', 'Subscription', 'Proposal', 'Review']}
              styles={{
                input: {
                  fontSize: '1rem',
                  option: {
                    color: '#000',
                    fontSize: '1rem',
                    fontWeight: 400,
                  },
                },
                label: { fontSize: '1rem' },
                rightSection: { path: { fill: '#5072a5' } },
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
                input: { fontSize: '1rem' },
                label: { fontSize: '1rem' },
              }}
              {...commonProps}
            />

            <Rating size="lg" color="blue" />

            <Button type="submit" color="blue" fz="1rem">
              Submit
            </Button>
          </Flex>
        </Flex>
      </form>

      <Box mt={25} h={10} bg="#5072a5" />
    </Box>
  )
}
