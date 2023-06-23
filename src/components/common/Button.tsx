import { Anchor, Button as MButton } from '@mantine/core'

export default function Button({
  href,
  type,
  hideOnMobile,
  mt,
  w,
  onClick,
  children,
}: {
  href?: string
  type?: 'submit' | 'button' | 'reset'
  hideOnMobile?: boolean
  mt?: string
  w?: string | number
  onClick?: () => void
  children: React.ReactNode
}) {
  return (
    <Anchor href={href}>
      <MButton
        type={type}
        mt={mt}
        px="0.8rem"
        py="0.4rem"
        w={w}
        c="#fff"
        variant="gradient"
        gradient={{ from: '#3158d2', to: '#21618C', deg: 60 }}
        sx={(theme) => ({
          borderRadius: '0.8rem',
          boxShadow:
            'inset 0 1px 0 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.25), 0 6px 4px -2px rgba(0,0,0,.15)',
          transition: 'transform 0.3s',
          '&:hover': { transform: 'translateY(-0.2rem)' },
          [theme.fn.smallerThan('md')]: {
            display: hideOnMobile ? 'none' : 'block',
          },
        })}
        onClick={onClick}
      >
        {children}
      </MButton>
    </Anchor>
  )
}
