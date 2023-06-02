import { Button } from '@chakra-ui/react'

type Props = {
  day: string
}

export const DayChangeButton = ({ day }: Props) => {
  return (
    <>
      <Button colorScheme="gray" variant="solid" boxShadow="base">
        {day}日
      </Button>
    </>
  )
}
