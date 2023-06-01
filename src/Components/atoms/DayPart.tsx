import { VStack, Circle } from '@chakra-ui/layout'

type props = {
  day: number
  rate: number
  isSunday: boolean
  isSaturday: boolean
  isToday: boolean
  isFinished: boolean
}

export const DayPart = ({
  day,
  rate,
  isSunday,
  isSaturday,
  isToday,
  isFinished,
}: props) => {
  //一日の空き具合を表す色（空き時間が多いほど濃い色で塗りつぶす）
  const color = ['#FFFFFF', '#D8F1FF', '#A6DFFF']
  //色を切り替える割合
  const separator = [30, 60]

  let bg

  if (0 <= rate && rate <= separator[0]) {
    bg = color[0]
  } else if (separator[0] < rate && rate <= separator[1]) {
    bg = color[1]
  } else if (separator[1] < rate && rate <= 100) {
    bg = color[2]
  }

  //日付部分のコンポーネント
  const DateComponent = () => {
    return (
      <Circle
        size="30px"
        margin="2px"
        bg={isToday ? '#707070' : ''}
        fontSize="15px"
        fontWeight="500"
        color={
          isToday
            ? '#FFFFFF'
            : isSunday
            ? '#FF2B2B'
            : isSaturday
            ? '#2B80FF'
            : ''
        }
      >
        {day}
      </Circle>
    )
  }

  return (
    <>
      <VStack
        w="35px"
        h="95px"
        bg={isFinished ? '#DDDDDD' : bg}
        color={isSunday ? '#FF2B2B' : isSaturday ? '2B80FF' : ''}
      >
        <DateComponent />
      </VStack>
    </>
  )
}
