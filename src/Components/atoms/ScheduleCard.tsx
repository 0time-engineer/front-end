import { Box, Card, HStack, Image, Text, VStack } from '@chakra-ui/react'

type Props = {
  icon: string
  username: string
}
export const ScheduleCard = ({ icon, username }: Props) => {
  return (
    <>
      <Card maxW="md">
        <HStack>
          <VStack>
            <Image borderRadius="full" boxSize="20" src={icon} />
            <Text as="b">{username}</Text>
          </VStack>
          <Box /*一週間カレンダー*/ />
        </HStack>
      </Card>
    </>
  )
}
