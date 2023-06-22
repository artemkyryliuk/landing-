import { Accordion as MAccordion } from '@mantine/core'

import AccordionItems from './AccordionItems'

export default function Accordion() {
  const primaryColor = '#183558'
  const secondaryColor = '#4e87b3'
  const borderColor = '#244a79'
  const activeColor = '#fff'

  const transition = '0.3s'

  return (
    <MAccordion
      transitionDuration={300}
      defaultValue="1"
      mt={75}
      styles={() => ({
        chevron: {
          transition: `transform ${transition}`,
          svg: { stroke: primaryColor, transition: 'stroke 0.3s' },
        },
        content: {
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: 30,
          color: '#000',
          background: 'linear-gradient(to bottom right, #b6d0ed, #cbddf3)',
        },
        control: {
          color: primaryColor,
          fontSize: '1.5rem',
          transition: `all ${transition}`,
          '&:hover': { backgroundColor: '#6093bb' },
          '&[data-active="true"]': {
            paddingLeft: 50,
            color: activeColor,
            background: 'linear-gradient(60deg, #3158d2, #21618C)',
            svg: { stroke: activeColor },
            transition: `all ${transition}`,
          },
        },
        item: {
          borderColor: secondaryColor,
          '&:not(:last-child)': { borderColor },
          '&[data-active="true"]': { borderColor: 'transparent' },
        },
      })}
      sx={{
        border: `1px solid ${borderColor}`,
        borderRadius: '0.8rem',
        overflow: 'hidden',
      }}
    >
      <AccordionItems />
    </MAccordion>
  )
}
