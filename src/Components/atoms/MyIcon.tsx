import { VStack, Text, Image, HStack } from '@chakra-ui/react'

type Props = {
  icon: string
  userName: string
}

export const MyIcon = ({ icon, userName }: Props) => {
  return (
    <>
      <VStack>
        <HStack>
          <Image borderRadius="full" boxSize="20" src={icon} />
        </HStack>
        <Text as="b">{userName}</Text>
      </VStack>
    </>
  )
}
