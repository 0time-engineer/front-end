import { Box, Text } from '@chakra-ui/react'
import { ScheduleWeek } from 'Data/DummyData'
import { DatesetText } from '../atoms/DatesetText'
import { DaysetBox } from '../atoms/DaysetBox'

export const WeekCalendar = () => {
  // 現在の日付を取得
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth()
  const currentDate = today.getDate()

  // カレンダーに表示する日付の配列を生成
  const dates: number[] = []
  for (let i = 0; i < 7; i++) {
    const date = currentDate + i
    dates.push(date)
  }

  // 予定の開始日時と終了日時を表示する関数
  const displayScheduleTime = (start: string, end: string) => {
    const startTime = new Date(start).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
    const endTime = new Date(end).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
    return `${startTime}〜${endTime}`
  }

  return (
    <Box className="calendar" p={4}>
      <Box className="week" display="flex">
        {dates.map((date) => {
          const isToday = date === currentDate
          const isSaturday =
            new Date(currentYear, currentMonth, date).getDay() === 6
          const isSunday =
            new Date(currentYear, currentMonth, date).getDay() === 0

          const schedule = ScheduleWeek.find((item) => {
            const start = new Date(item.start)
            return start.getDate() === date
          })

          const isFilled = !!schedule

          return (
            <Box
              className="day"
              key={date}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <DatesetText
                date={date}
                isToday={isToday}
                isSaturday={isSaturday}
                isSunday={isSunday}
              />
              <DaysetBox isFilled={isFilled} />
              {isFilled && (
                <Box
                  className="schedule"
                  mt={3}
                  p={2}
                  borderWidth={1}
                  borderRightColor="gray.200"
                  borderLeftColor="gray.200"
                  borderTopColor="white"
                  borderBottomColor="white"
                >
                  <Text>
                    {displayScheduleTime(schedule.start, schedule.end)}
                  </Text>
                </Box>
              )}
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
