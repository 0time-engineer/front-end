import { Box } from '@chakra-ui/react'

type Props = {
  isFilled: boolean
}

export const DaysetBox = ({ isFilled }: Props) => {
  let style = ''
  if (isFilled) {
    style = 'filled'
  }

  return (
    <Box
      className={`schedule-cell ${style}`}
      bg={isFilled ? 'lightblue' : 'transparent'}
    />
  )
}
