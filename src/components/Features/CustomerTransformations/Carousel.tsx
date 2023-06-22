import { Carousel as MCarousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'

import Slide from './Slide'
import { carouselData } from './carouselData'

export default function Carousel() {
  const matchesMobile = useMediaQuery('(max-width: 64rem)')

  return (
    <MCarousel
      mt={50}
      mx="auto"
      slideSize={matchesMobile ? '100%' : '50%'}
      slideGap="xl"
      slidesToScroll={matchesMobile ? 1 : 2}
      loop
      styles={{
        control: {
          backgroundColor: '#000',
        },
      }}
    >
      {carouselData.map((slide) => (
        <MCarousel.Slide key={slide.label}>
          <Slide slide={slide} />
        </MCarousel.Slide>
      ))}
    </MCarousel>
  )
}
