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

  //今月が何月か
  const thisMonth = date.getMonth()

  //今月の日数
  date.setMonth(thisMonth + 1)
  date.setDate(0)
  const daysInMonth = date.getDate()

  //翌月の日数
  date.setMonth(thisMonth + 2)
  date.setDate(0)
  const daysInNextMonth = date.getDate()

  //WeekPartに渡す配列
  const firstBlank = Array(dayOfWeek).fill(0)

  //日付の配列の処理
  const dayList = Array.from(
    { length: daysInMonth - today + 1 },
    (_, index) => index + today,
  )
  const nextDayList = Array.from(
    { length: daysInNextMonth },
    (_, index) => index + 1,
  )
  dayList.unshift(...firstBlank)
  dayList.push(...nextDayList)
  if (35 - dayList.length > 0) {
    const lastBlank = Array(35 - dayList.length)
    dayList.push(...lastBlank)
  }

  //スケジュールの配列の処理
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
