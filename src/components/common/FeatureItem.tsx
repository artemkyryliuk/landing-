import { Flex } from '@mantine/core'

import Text from './Text'

export default function FeatureItem({
  styled,
  icon,
  text,
}: {
  styled?: boolean
  icon: JSX.Element
  text: string
}) {
  return (
    <Flex align="baseline" gap={20}>
      {icon}

      <Text styled={styled}> {text} </Text>
    </Flex>
  )
}
