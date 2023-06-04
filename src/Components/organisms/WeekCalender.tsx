import { Text, Box, HStack, Stack } from '@chakra-ui/react'
import { DayCell } from 'Components/atoms/DayCell'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  schedule: {
    day: number
    work: boolean[]
  }[]
  setTapDay: Dispatch<SetStateAction<string>>
  onClick: () => void
}

export const WeekCalender = ({ schedule, setTapDay, onClick }: Props) => {
  return (
    <>
      <HStack>
        <Stack spacing={1.5}>
          <Box height={'3px'}></Box>
          {Array.from(Array(24 / 12).keys()).map((interval) => (
            <Text fontSize="xs" color="gray" textAlign="center">
              {interval * 12}-
            </Text>
          ))}
          <Text fontSize="xs" color="gray" textAlign="center">
            24-
          </Text>
        </Stack>
        {schedule.map((data) => (
          //TODO:縦の幅を調節する!何故か隙間が空く!!
          <Box key={data.day} width={`${100 / 7}%`}>
            <DayCell
              key={data.day}
              day={data.day}
              work={data.work}
              setTapDay={setTapDay}
              onClick={onClick}
            />
          </Box>
        ))}
      </HStack>
    </>
  )
}
