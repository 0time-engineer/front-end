import { Card, Container } from '@chakra-ui/react'
import { HStack, VStack, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { MonthCalendar } from 'Components/organisms/MonthCalendar'
import { VSpacer, HSpacer } from 'Components/atoms/Spacer'

type Props = {
  icon: string
  username: string
  schedule: Array<number>
  onClose: () => void
}

export const MonthScheduleCard = ({ icon, username, schedule }: Props) => {
  return (
    <>
      <Container maxW="sm">
        <Card
          maxH="8xl"
          right={0}
          boxShadow="2xl"
          borderRadius={'30px 0px 0px 30px'}
        >
          <VStack>
            <VSpacer size={2} />
            <HStack>
              <Image borderRadius="full" boxSize="28" src={icon} />
              <HSpacer size={2} />
              <Text fontSize="30px">{username}</Text>
              <HSpacer size={6} />
            </HStack>
            <VSpacer size={1} />
            <MonthCalendar schedule={schedule} />
            <VSpacer size={2} />
          </VStack>
        </Card>
      </Container>
    </>
  )
}
