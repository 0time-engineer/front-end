import { Card, HStack, Text } from '@chakra-ui/react'
import { MyIcon } from 'Components/atoms/MyIcon'
import { OneDayTimer } from 'Components/atoms/OneDayTimer'
import { HSpacer, VSpacer } from 'Components/atoms/Spacer'

type Props = {
  icon: string
  userName: string
  day: string
  oneDayList: {
    hour: number
    freeFlag: boolean
  }[]
}

export const OneDayParts = ({ icon, userName, day, oneDayList }: Props) => {
  return (
    <Card maxW="315px" boxShadow={'lg'} variant={'filled'}>
      <HStack>
        <HSpacer size={1} />
        <MyIcon icon={icon} userName={userName} />
        <HSpacer size={6} />
        <Text fontSize={40} color={'Green'}>
          {day}
        </Text>
      </HStack>
      <OneDayTimer oneDayList={oneDayList} />
      <VSpacer size={4} />
    </Card>
  )
}
