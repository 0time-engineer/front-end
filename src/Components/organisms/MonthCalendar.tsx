import { VStack, Center, Text } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/react'
import { WeekPart } from 'Components/molecules/WeekPart'

type Props = {
  schedule: Array<number>
}

export const MonthCalendar = ({ schedule }: Props) => {
  const copiedSchedule = schedule.slice()
  const date = new Date()

  //今日が何日か
  const today = date.getDate()

  //今日が何曜日か
  const dayOfWeek = date.getDay()

  //日付の配列の処理
  date.setDate(today - dayOfWeek)
  let dayList = new Array<number>()
  for (let i = 0; i < 35; i++) {
    dayList.push(date.getDate())
    date.setDate(date.getDate() + 1)
  }

  //スケジュールの配列の処理
  const firstBlank = Array(dayOfWeek).fill(0)
  copiedSchedule.unshift(...firstBlank)
  if (35 - copiedSchedule.length > 0) {
    const lastBlank = Array(35 - copiedSchedule.length)
    dayList.push(...lastBlank)
  }

  //一週間のコンポーネントの配列
  const MonthComponent = Array.from({ length: 5 }, (_, index) => (
    <WeekPart
      key={index}
      dayList={dayList.slice(index * 7, (index + 1) * 7)}
      scheduleList={copiedSchedule.slice(index * 7, (index + 1) * 7)}
      row={index}
    />
  ))

  return (
    <>
      <Container maxW="md">
        <Text fontSize="20px" fontWeight="bold" textAlign="right"></Text>
        <Center bg="whitesmoke" right={0}>
          <VStack spacing="1px">{MonthComponent}</VStack>
        </Center>
      </Container>
    </>
  )
}
