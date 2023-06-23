import { Anchor, Box, Drawer, Group, Image, Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import StyledText from '../common/StyledText'
import Button from '../common/Button'
import menuIcon from '/src/assets/images/menu.png'
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
            background: 'linear-gradient( #161727, #020516, #2d3051)',
          },
        }}
      >
        <Anchor href="#" pos="relative" top={-25} left={30}>
          <img src={logo} />
        </Anchor>

        <Stack spacing={30} p={30}>
          {navigation.map(({ href, text }) => (
            <Group key={text} spacing="2rem">
              <Box
                w={15}
                h={15}
                bg="#bbb"
                sx={{ clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }}
              />
              <Anchor href={href} c="#fff" underline={false} onClick={close}>
                <StyledText> {text}</StyledText>
              </Anchor>
            </Group>
          ))}

          <Box my={15} h={1} bg="#fff" />

          <Button href="#contactwithus" onClick={close}>
            Contact with us
          </Button>
        </Stack>
      </Drawer>
    </>
  )
}
