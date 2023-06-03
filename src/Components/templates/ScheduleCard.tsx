import { Card } from '@chakra-ui/react'
import { MySchedule } from 'Components/molecules/MySchedule'

type Props = {
  icon: string
  username: string
  weekschedule: {
    day: number
    work: boolean[]
  }[]
  onClick: () => void
  dayClick: () => void
}

export const ScheduleCard = ({
  icon,
  username,
  weekschedule,
  onClick,
  dayClick,
}: Props) => {
  return (
    <>
      <Card maxW="100%" onClick={onClick}>
        <MySchedule
          icon={icon}
          username={username}
          weekschedule={weekschedule}
          onClick={dayClick}
        />
      </Card>
    </>
  )
}
