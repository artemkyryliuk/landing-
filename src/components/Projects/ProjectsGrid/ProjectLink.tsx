import { Anchor, Image } from '@mantine/core'

export default function ProjectLink({
  item: { img, href },
}: {
  item: { img: string; href: string }
}) {
  const transform = 'translateY(-25px) rotateY(20deg)'
  const transition = 'all 0.3s'

  return (
    <Anchor
      href={href}
      pos="relative"
      sx={(theme) => ({
        [theme.fn.largerThan('lg')]: {
          perspective: 500,
          '&:hover > .img': {
            border: '5px solid #fff',
            transform,
            filter: 'contrast(1) brightness(1.1)',
          },
          '&:hover > .blur': { opacity: 1, transform },
        },
      })}
    >
      <Image
        src={img}
        className="img"
        pos="absolute"
        sx={{
          border: '5px solid transparent',
          zIndex: 1,
          filter: 'contrast(0.8)',
          transition,
        }}
      />

      <Image
        src={img}
        className="blur"
        pos="relative"
        sx={{
          opacity: 0,
          filter: 'blur(20px)',
          zIndex: 0,
          transition,
        }}
      />
    </Anchor>
  )
}
