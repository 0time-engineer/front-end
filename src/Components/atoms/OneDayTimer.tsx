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
                  <Text fontSize={20}>{clock.hour}</Text>
                </Box>

                {clock.freeFlag ? (
                  <Box bg="#A6DFFF" w="200px" p={4}></Box>
                ) : (
                  <Box bgColor="White" w="200px" p={4}></Box>
                )}
              </HStack>
            </center>
          </>
        )
      })}
    </>
  )
}
