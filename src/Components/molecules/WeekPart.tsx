import { HStack } from '@chakra-ui/layout'
import { DayPart } from 'Components/atoms/DayPart'
import { MonthSchedule } from 'Data/DummyData'

type props = {
  dayList: Array<number>
}

export const WeekPart = ({ dayList }: props) => {
  const WeekComponent = dayList.map((element, index) => (
    <DayPart
      key={index}
      day={element}
      rate={element !== 0 ? MonthSchedule[element - 1] : 0}
      isSunday={index === 6 ? true : false}
      isSaturday={index === 0 ? true : false}
    />
  ))

  return (
    <>
      <HStack spacing="1px">{WeekComponent}</HStack>
    </>
  )
}
