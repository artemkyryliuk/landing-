import { Accordion as MAccordion } from '@mantine/core'

import Text from '../../common/Text'
import { faqsData } from '../faqsData'

export default function AccordionItems() {
  return (
    <>
      {faqsData.map(({ question, answer }) => (
        <MAccordion.Item key={question} value={question}>
          <MAccordion.Control> {question} </MAccordion.Control>
          <MAccordion.Panel>
            {answer.map((text) => (
              <Text key={text} isDescription>
                {text}
              </Text>
            ))}
          </MAccordion.Panel>
        </MAccordion.Item>
      ))}
    </>
  )
}
