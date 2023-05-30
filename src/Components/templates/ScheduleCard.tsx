import { Card } from '@chakra-ui/react'
import { MySchedule } from 'Components/molecules/MySchedule'

type Props = {
  icon: string
  username: string
  onClick: () => void
}

export const ScheduleCard = ({ icon, username, onClick }: Props) => {
  return (
    <>
      <Card maxW="100%" onClick={onClick}>
        <MySchedule icon={icon} username={username} />
      </Card>
    </>
  )
}
