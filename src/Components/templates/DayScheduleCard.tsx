import { Card, Container, HStack } from '@chakra-ui/react'
import { DayChangeButton } from 'Components/atoms/DayChangeButton'
import { OneDayParts } from 'Components/molecules/OneDayParts'

type Props = {
  celectday: string
  celectfriendname: string
  celectfriendicon: string
  daylist: {
    hour: number
    freeFlag: boolean
  }[]
}

export const DayScheduleCard = ({
  celectday,
  celectfriendname,
  celectfriendicon,
  daylist,
}: Props) => {
  return (
    <>
      <Container maxW="sm">
        <Card
          maxH="8xl"
          right={0}
          boxShadow="2xl"
          borderRadius={'30px 0px 0px 30px'}
        >
          <HStack>
            <DayChangeButton day={celectday} />
            <OneDayParts
              icon={celectfriendicon}
              userName={celectfriendname}
              day={celectday}
              oneDayList={daylist}
            />
            <DayChangeButton day={celectday} />
          </HStack>
        </Card>
      </Container>
    </>
  )
}
