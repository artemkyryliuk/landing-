import { Box } from '@mantine/core'

import NavLink from './NavLink'
import { navigation } from '../common/navLinksData'

export default function NavigationBar() {
  return (
    <Box
      component="nav"
      display="flex"
      p="0.4rem"
      bg="rgba(1,4,21,.4)"
      sx={(theme) => ({
        gap: '10px',
        borderRadius: 80,
        [theme.fn.smallerThan('md')]: {
          display: 'none',
        },
      })}
    >
      {navigation.map(({ href, text }) => (
        <NavLink key={text} href={href}>
          {text}
        </NavLink>
      ))}
    </Box>
  )
}
