import { Center, Text } from '@chakra-ui/react'

type Props = {
  text: string
}

export const TextBox = ({ text }: Props) => {
  return (
    <Text fontSize={36}>
      <Center h="100%">{text}</Center>
    </Text>
  )
}
