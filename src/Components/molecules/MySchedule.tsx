import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { HSpacer } from 'Components/atoms/Spacer'

import { WeekCalender } from 'Components/organisms/WeekCalender'

type Props = {
  icon: string
  username: string
  weekschedule: {
    day: number
    work: boolean[]
  }[]
  onClick: () => void
}
export const MySchedule = ({
  icon,
  username,
  weekschedule,
  onClick,
}: Props) => {
  return (
    <HStack>
      <VStack>
        <Image borderRadius="full" boxSize="20" src={icon} />
        <Text as="b">{username}</Text>
      </VStack>

      <Box flex="1">
        <WeekCalender schedule={weekschedule} onClick={onClick} />
      </Box>
      <HSpacer size={1} />
    </HStack>
  )
}
