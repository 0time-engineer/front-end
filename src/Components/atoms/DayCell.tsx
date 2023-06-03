import { Box, Center, Stack, Text } from '@chakra-ui/react'

type Props = {
  day: number
  work: boolean[]
  onClick: () => void
}

export const DayCell = ({ day, work, onClick }: Props) => {
  const today = new Date()
  const targetDate = new Date(today.setDate(today.getDate() + day))

  // const year = today.getFullYear() // 年を取得
  // const month = today.getMonth() + 1 // 月を取得（0から始まるため+1する）

  today.setDate(today.getDate() + day) // 指定した日数後の日付をセット

  const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土']
  const dayOfWeek = daysOfWeek[targetDate.getDay()] // (today+dayの)曜日を取得（0:日曜日、1:月曜日、...、6:土曜日）
  const date = targetDate.getDate() // (today+dayの)日付を取得

  let dayStyles = {
    color: 'black',
    backgroundColor: 'white',
  }

  switch (true) {
    case day === 0:
      // dayが0の場合（日曜日）
      dayStyles = {
        ...dayStyles,
        color: 'white',
        backgroundColor: 'red',
      }
      break
    case dayOfWeek === '日':
      // dayOfWeekが'日'の場合
      dayStyles = {
        ...dayStyles,
        color: 'red',
      }
      break
    case dayOfWeek === '土':
      // dayOfWeekが'土'の場合
      dayStyles = {
        ...dayStyles,
        color: 'blue',
      }
      break
    default:
      // それ以外の場合
      break
  }

  return (
    <>
      <Box onClick={onClick}>
        <Text
          color="gray"
          fontSize="xs"
          style={dayStyles}
          borderRadius={'full'}
        >
          <Center>{date}</Center>
        </Text>
        <Stack spacing={0}>
          {work.map((value, index) => (
            <Box
              key={index}
              width="100%"
              height="2px"
              bg={value ? '#A6DFFF' : 'white'}
            />
          ))}
        </Stack>
      </Box>
    </>
  )
}
