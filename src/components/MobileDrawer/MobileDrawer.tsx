import { Anchor, Box, Drawer, Image, Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import Text from '../common/Text'
import menuIcon from '/src/assets/images/menu.png'
import Button from '../common/Button'
import logo from '/src/assets/svg/logo.svg'
import { navigation } from '../common/navLinksData'

export default function MobileDrawer() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Image
        src={menuIcon}
        width={36}
        sx={(theme) => ({
          display: 'none',
          cursor: 'pointer',
          [theme.fn.smallerThan('md')]: { display: 'block' },
        })}
        onClick={open}
      />

      <Drawer
        opened={opened}
        onClose={close}
        styles={{
          header: { backgroundColor: 'transparent' },
          close: {
            top: 15,
            right: 15,
            transform: 'scale(2)',
            '&:hover': { backgroundColor: 'transparent' },
            '&:active': { transform: 'scale(2)' },
            '&:focus': { outline: 'none' },
          },
          content: {
            background: 'linear-gradient(#161727, #020516)',
          },
        }}
      >
        <Anchor href="#" pos="relative" top={-25} left={30}>
          <img src={logo} />
        </Anchor>

        <Stack spacing={30} p={30}>
          {navigation.map(({ href, text }) => (
            <Anchor
              key={text}
              href={href}
              c="#fff"
              underline={false}
              onClick={close}
            >
              <Text styled> {text}</Text>
            </Anchor>
          ))}

          <Box my={15} h={1} bg="#fff" />

          <Button href="#contactwithus" onClick={close}>
            {' '}
            Contact with us
          </Button>
        </Stack>
      </Drawer>
    </>
  )
}
