import { HStack } from '@chakra-ui/layout'
import { DayPart } from 'Components/atoms/DayPart'

type props = {
  dayList: Array<number>
  rateList: Array<number>
}

export const WeekPart = ({ dayList, rateList }: props) => {
  const WeekComponent = Array.from({ length: 7 }, (_, index) => (
    <DayPart
      key={index}
      day={dayList[index]}
      rate={rateList[index]}
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
