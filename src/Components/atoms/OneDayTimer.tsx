import { Box, HStack, Text } from '@chakra-ui/react'

type Props = {
  oneDayList: {
    hour: number
    freeFlag: boolean
  }[]
}

export const OneDayTimer = ({ oneDayList }: Props) => {
  return (
    <>
      {oneDayList.map((clock) => {
        return (
          <>
            <center>
              <HStack>
                <Box w="50px">
                  <Text fontSize={16}>{clock.hour}</Text>
                </Box>

                {clock.freeFlag ? (
                  <Box bg="#A6DFFF" w="75%" p={3}></Box>
                ) : (
                  <Box bgColor="White" w="75%" p={3}></Box>
                )}
              </HStack>
            </center>
          </>
        )
      })}
    </>
  )
}
