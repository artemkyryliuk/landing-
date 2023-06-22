import { Anchor, Box, Flex } from '@mantine/core'

import ScrollProgress from './ScrollProgress'
import Button from '../common/Button'
import logo from '/src/assets/svg/logo.svg'
import NavigationBar from './NavigationBar'
import MobileDrawer from '../MobileDrawer/MobileDrawer'

export default function Header() {
  return (
    <Box
      component="header"
      pos="fixed"
      left={0}
      right={0}
      px={30}
      bg="linear-gradient(#010415,transparent 90%)"
      sx={{ zIndex: 2 }}
    >
      <ScrollProgress />

      <Flex
        maw={1280}
        mih={94}
        mx="auto"
        py="1.3rem"
        justify="space-between"
        align="center"
      >
        <MobileDrawer />

        <Anchor href="#">
          <img src={logo} />
        </Anchor>

        <NavigationBar />

        <Button href="#contactwithus" hideOnMobile>
          Contact with us
        </Button>
      </Flex>
    </Box>
  )
}
