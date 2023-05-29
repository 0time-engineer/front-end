import { Card } from '@chakra-ui/card'
import { HStack, VStack, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { MonthCalendar } from 'Components/organisms/MonthCalendar'
import { VSpacer, HSpacer } from 'Components/atoms/Spacer'

type Props = {
  icon: string
  username: string
  schedule: Array<number>
}

export const MonthScheduleCard = ({ icon, username, schedule }: Props) => {
  return (
    <>
      <Card
        w={'360px'}
        h={'800px'}
        boxShadow="2xl"
        borderRadius={'30px 0px 0px 30px'}
      >
        <VStack>
          <VSpacer size={6} />
          <HStack>
            <Image borderRadius="full" boxSize="120px" src={icon} />
            <HSpacer size={4} />
            <Text fontSize="30px">{username}</Text>
            <HSpacer size={6} />
          </HStack>
          <VSpacer size={1} />
          <MonthCalendar schedule={schedule} />
        </VStack>
      </Card>
    </>
  )
}
