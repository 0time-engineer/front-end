import { HStack } from '@chakra-ui/layout'
import { DayPart } from 'Components/atoms/DayPart'

type props = {
  row: number
  dayList: Array<number>
  scheduleList: Array<number>
}

const date = new Date()
const today = date.getDate()

export const WeekPart = ({ row, dayList, scheduleList }: props) => {
  const WeekComponent = dayList.map((element, index) => (
    <DayPart
      key={index}
      day={element}
      rate={scheduleList[index]}
      isSunday={index === 6 ? true : false}
      isSaturday={index === 0 ? true : false}
      isToday={row === 0 && element === today ? true : false}
    />
  ))

  return (
    <>
      <HStack spacing="1px">{WeekComponent}</HStack>
    </>
  )
}
