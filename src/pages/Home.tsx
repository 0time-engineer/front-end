import { Image, Text, HStack, VStack, Box } from '@chakra-ui/react'
import { NavigationBar } from 'Components/atoms/NavigationBar'
import { VSpacer } from 'Components/atoms/Spacer'

type Props = {
  icon: string
  username: string
}
export const Home = ({ icon, username }: Props) => {
  return (
    <>
      <VSpacer size={10} />
      <HStack>
        <VStack>
          <Image borderRadius="full" boxSize="20" src={icon} />
          <Text as="b">{username}</Text>
        </VStack>
        <Box /*一週間カレンダー*/ />
      </HStack>
      <NavigationBar type={'Home'} />
    </>
  )
}
