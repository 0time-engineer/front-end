import { Box } from '@chakra-ui/react'

type Props = {
  date: number
  isToday: boolean
  isSaturday: boolean
  isSunday: boolean
}

export const DatesetText = ({ date, isToday, isSaturday, isSunday }: Props) => {
  let textStyle = ''
  if (isToday) {
    textStyle = 'today'
  } else if (isSaturday) {
    textStyle = 'saturday'
  } else if (isSunday) {
    textStyle = 'sunday'
  }

  return (
    <>
      <Box
        className={`date-cell ${textStyle}`}
        p={2}
        borderRadius="50%"
        bg={isToday ? 'red' : 'transparent'}
        fontFamily={'Zen Maru Gothic'}
        color={
          isToday ? 'white' : isSunday ? 'red' : isSaturday ? 'blue' : 'black'
        }
      >
        {date}
      </Box>
    </>
  )
}
