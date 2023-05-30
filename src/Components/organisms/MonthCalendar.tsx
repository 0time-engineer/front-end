import { VStack, Center, Text } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/react'
import { WeekPart } from 'Components/molecules/WeekPart'

type Props = {
  schedule: Array<number>
}

export const MonthCalendar = ({ schedule }: Props) => {
  const date = new Date()

  //今月が何月か
  const thisMonth = date.getMonth() + 1

  //今月が何日まであるか
  date.setMonth(thisMonth)
  date.setDate(0)
  const daysInMonth = date.getDate()

  //今月の１日は何曜日か
  date.setDate(1)
  const dayOfWeek = date.getDay()

  //WeekPartに渡す配列
  const firstBlank = Array(dayOfWeek).fill(0)
  const lastBlank = Array(35 - (dayOfWeek + daysInMonth)).fill(0)

  const dayList = Array.from({ length: daysInMonth }, (_, index) => index + 1)
  dayList.unshift(...firstBlank)
  dayList.push(...lastBlank)

  //一週間のコンポーネントの配列
  const MonthComponent = Array.from({ length: 5 }, (_, index) => (
    <WeekPart
      key={index}
      dayList={dayList.slice(index * 7, index * 7 + 7)}
      schedule={schedule}
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
