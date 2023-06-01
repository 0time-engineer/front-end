import { HStack } from '@chakra-ui/layout'
import { DayPart } from 'Components/atoms/DayPart'

type props = {
  row: number
  dayList: Array<number>
  scheduleList: Array<number>
}

export const WeekPart = ({ row, dayList, scheduleList }: props) => {
  const date = new Date()
  const today = date.getDate()

  let WeekFromNow = new Array<number>()
  if (row === 0) {
    for (let i = 0; i < 7; i++) {
      WeekFromNow.push(date.getDate())
      date.setDate(date.getDate() + 1)
    }
  }
  const WeekComponent = dayList.map((element, index) => (
    <DayPart
      key={index}
      day={element}
      rate={scheduleList[index]}
      isSunday={index === 6 ? true : false}
      isSaturday={index === 0 ? true : false}
      isToday={row === 0 && element === today ? true : false}
      isFinished={row === 0 && !WeekFromNow.includes(element) ? true : false}
    />
  ))

  return (
    <>
      <HStack spacing="1px">{WeekComponent}</HStack>
    </>
  )
}
