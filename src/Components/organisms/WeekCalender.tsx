import { Text, Box, HStack, Stack } from '@chakra-ui/react'
import { DayCell } from 'Components/atoms/DayCell'
import { WeekTF } from 'Data/DummyData'

export const WeekCalender = () => {
  return (
    <>
      <HStack>
        <Stack>
          {Array.from(Array(24 / 6).keys()).map((interval) => (
            <Box
              key={interval}
              width="100%"
              height="100%"
              bg="transparent"
              border="1px solid gray"
              marginRight="0.5"
            >
              <Text fontSize="xs" color="gray" textAlign="center">
                {interval * 6}:00
              </Text>
            </Box>
          ))}
          <Box
            width="100%"
            height="100%"
            bg="transparent"
            border="1px solid gray"
            marginRight="0.5"
          >
            <Text fontSize="xs" color="gray" textAlign="center">
              24:00
            </Text>
          </Box>
        </Stack>
        {WeekTF.map((data) => (
          //TODO:縦の幅を調節する!何故か隙間が空く!!
          <Box key={data.day} width={`${100 / 7}%`}>
            <DayCell key={data.day} day={data.day} work={data.work} />
          </Box>
        ))}
      </HStack>
    </>
  )
}
