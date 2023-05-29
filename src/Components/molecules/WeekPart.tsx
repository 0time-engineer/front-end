import { HStack } from '@chakra-ui/layout'
import { DayPart } from 'Components/atoms/DayPart'

type props = {
  dayList: Array<number>
  schedule: Array<number>
}

export const WeekPart = ({ dayList, schedule }: props) => {
  const WeekComponent = dayList.map((element, index) => (
    <DayPart
      key={index}
      day={element}
      rate={element !== 0 ? schedule[element - 1] : 0}
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
