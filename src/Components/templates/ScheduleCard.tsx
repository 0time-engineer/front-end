import { Card } from '@chakra-ui/react'
import { MySchedule } from 'Components/molecules/MySchedule'
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
  dayClick: () => void
}

export const ScheduleCard = ({
  icon,
  username,
  weekschedule,
  setTapDay,
  onClick,
  dayClick,
}: Props) => {
  return (
    <>
      <Card maxW="100%" onClick={onClick}>
        <MySchedule
          icon={icon}
          username={username}
          setTapDay={setTapDay}
          weekschedule={weekschedule}
          onClick={dayClick}
        />
      </Card>
    </>
  )
}
