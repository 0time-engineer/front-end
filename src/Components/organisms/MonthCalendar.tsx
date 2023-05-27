import { VStack, Center, Text } from '@chakra-ui/layout'
import { MonthSchedule } from 'Data/DummyData'
import { WeekPart } from 'Components/molecules/WeekPart'

export const MonthCalendar = () => {
  const date = new Date()

  //今月が何月か
  const nowMonth = date.getMonth() + 1

  //今月が何日まであるか
  date.setMonth(date.getMonth() + 1)
  date.setDate(0)
  const numOfDays = date.getDate()

  //今月の１日は何曜日か
  date.setDate(1)
  const dayOfWeek = date.getDay()

  //WeekPartに渡す配列
  const firstBlank = Array(dayOfWeek).fill(0)
  const lastBlank = Array(35 - (dayOfWeek + numOfDays)).fill(0)

  const dayList = Array.from({ length: numOfDays }, (_, index) => index + 1)
  dayList.unshift(...firstBlank)
  dayList.push(...lastBlank)

  const rateList = Array.from(
    { length: numOfDays },
    (_, index) => MonthSchedule[index],
  )
  rateList.unshift(...firstBlank)
  rateList.push(...lastBlank)

  //カレンダーの各週のコンポーネントの配列
  const MonthComponent = Array.from({ length: 5 }, (_, index) => (
    <WeekPart
      key={index}
      dayList={dayList.slice(index * 7, index * 7 + 7)}
      rateList={rateList.slice(index * 7, index * 7 + 7)}
    />
  ))

  return (
    <>
      <Text fontSize="20px" fontWeight="bold" textAlign="right" w="253px">
        {nowMonth}月
      </Text>
      <Center w="253px" h="481px" bg="#AAAAAA">
        <VStack spacing="1px">{MonthComponent}</VStack>
      </Center>
    </>
  )
}
