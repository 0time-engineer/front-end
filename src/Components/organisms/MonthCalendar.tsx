import { VStack, Center, Text } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/react'
import { WeekPart } from 'Components/molecules/WeekPart'

type Props = {
  schedule: Array<number>
}

export const MonthCalendar = ({ schedule }: Props) => {
  const date = new Date()

  //今日が何日か
  const today = date.getDate()

  //今日が何曜日か
  const dayOfWeek = date.getDay()

  //今月が何月か
  const thisMonth = date.getMonth() + 1

  //今月が何日まであるか
  date.setMonth(thisMonth)
  date.setDate(0)
  const daysInMonth = date.getDate()

  //翌月が何日まであるか
  date.setMonth(thisMonth)
  const daysInNextMonth = date.getDate()

  //WeekPartに渡す配列
  const firstBlank = Array(dayOfWeek).fill(0)
  // const lastBlank = Array(35 - (dayOfWeek + daysInMonth)).fill(0)

  const dayList = Array.from(
    { length: daysInMonth - today },
    (_, index) => index + today,
  )
  const nextDayList = Array.from(
    { length: daysInNextMonth - dayList.length },
    (_, index) => index + 1,
  )

  //日付の配列の処理
  dayList.unshift(...firstBlank)
  dayList.push(...nextDayList)

  //スケジュールの配列の処理
  schedule.unshift(...firstBlank)

  //一週間のコンポーネントの配列
  const MonthComponent = Array.from({ length: 5 }, (_, index) => (
    <WeekPart
      key={index}
      dayList={dayList.slice(index * 7, index * 7 + 7)}
      scheduleList={schedule.slice(index * 7, index * 7 + 7)}
    />
  ))

  return (
    <>
      <Container maxW="md">
        <Text fontSize="20px" fontWeight="bold" textAlign="right">
          {thisMonth}月
        </Text>
        <Center bg="whitesmoke" right={0}>
          <VStack spacing="1px">{MonthComponent}</VStack>
        </Center>
      </Container>
    </>
  )
}
