import { Card, Container, Flex, HStack, VStack } from '@chakra-ui/react'
import { TomorrowButton } from 'Components/atoms/TomorrowButton'
import { YesterdayButton } from 'Components/atoms/YesterdayButton'
import { ReturnButton } from 'Components/atoms/ReturnButton'
import { OneDayParts } from 'Components/molecules/OneDayParts'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  celectday: string
  setCelectday: Dispatch<SetStateAction<string>>
  celectfriendname: string
  celectfriendicon: string
  daylist: {
    hour: number
    freeFlag: boolean
  }[]
}

export const DayScheduleCard = ({
  celectday,
  setCelectday,
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
              <YesterdayButton day={celectday} setDay={setCelectday} />
            </VStack>
            <OneDayParts
              icon={celectfriendicon}
              userName={celectfriendname}
              day={celectday}
              oneDayList={daylist}
            />
            <TomorrowButton day={celectday} setDay={setCelectday} />
          </HStack>
        </Card>
      </Container>
    </>
  )
}
