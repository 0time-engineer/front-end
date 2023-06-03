import { Card, Container, Flex, HStack, VStack } from '@chakra-ui/react'
import { DayChangeButton } from 'Components/atoms/DayChangeButton'
import { ReturnButton } from 'Components/atoms/ReturnButton'
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
  //<ボタンをクリックしたら、homeボタンを再読み込みする
  const handleReturnButtonClick = () => {
    window.location.reload()
  }

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
            <VStack>
              <Flex position="relative" top={-400}>
                <ReturnButton type={'left'} onClick={handleReturnButtonClick} />
              </Flex>
              <DayChangeButton day={celectday} />
            </VStack>
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
