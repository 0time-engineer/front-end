import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { HSpacer } from 'Components/atoms/Spacer'

import { WeekCalender } from 'Components/organisms/WeekCalender'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  icon: string
  username: string
  weekschedule: {
    day: number
    work: boolean[]
  }[]
  setTapDay: Dispatch<SetStateAction<string>>
  onClick: () => void
}
export const MySchedule = ({
  icon,
  username,
  weekschedule,
  setTapDay,
  onClick,
}: Props) => {
  return (
    <HStack>
      <VStack>
        <Image borderRadius="full" boxSize="20" src={icon} />
        <Text as="b">{username}</Text>
      </VStack>

      <Box flex="1">
        <WeekCalender
          schedule={weekschedule}
          setTapDay={setTapDay}
          onClick={onClick}
        />
      </Box>
      <HSpacer size={1} />
    </HStack>
  )
}
