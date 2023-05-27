import { VStack, Circle } from '@chakra-ui/layout'

type props = {
  day: number
  rate: number
  isSunday: boolean
  isSaturday: boolean
}

export const DayPart = ({ day, rate, isSunday, isSaturday }: props) => {
  const now = new Date()
  const today = now.getDate()

  //TODO: 何色にするかを決める
  let color = ['#FFFFFF', '#D8F1FF', '#A6DFFF']
  //TODO: 区切る値を決める
  let separator = [30, 60]

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
        bg={day === today ? '#707070' : 'transparent'}
        fontSize="15px"
        fontWeight="500"
        color={
          day === today
            ? '#FFFFFF'
            : isSunday
            ? '#FF2B2B'
            : isSaturday
            ? '#2B80FF'
            : ''
        }
      >
        {day !== 0 ? day : ''}
      </Circle>
    )
  }

  return (
    <>
      <VStack
        w="35px"
        h="95px"
        bg={day !== 0 ? bg : '#DDDDDD'}
        color={isSunday ? '#FF2B2B' : isSaturday ? '2B80FF' : ''}
      >
        <DateComponent />
      </VStack>
    </>
  )
}
