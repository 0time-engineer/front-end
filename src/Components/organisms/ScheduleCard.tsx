import { Card } from '@chakra-ui/react'
import { MySchedule } from 'Components/molecules/MySchedule'

type Props = {
  icon: string
  username: string
}
export const ScheduleCard = ({ icon, username }: Props) => {
  return (
    <>
      <Card maxW="md">
        <MySchedule icon={icon} username={username} />
      </Card>
    </>
  )
}
