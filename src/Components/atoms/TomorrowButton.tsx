import { Button } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
type Props = {
  day: string
  setDay: Dispatch<SetStateAction<string>>
}
export const TomorrowButton = ({ day, setDay }: Props) => {
  let next = {
    year: '',
    month: '',
    day: '',
  }
  let now = {
    year: Number(day.slice(0, 4)),
    month: Number(day.slice(5, 7)),
    day: Number(day.slice(8, 10)),
  }
  switch (now.month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
      if (now.day === 31) {
        next.month = String(now.month + 1)
        next.day = '1'
      } else {
        next.month = String(now.month)
        next.day = String(now.day + 1)
      }
      next.year = String(now.year)
      break
    case 4:
    case 6:
    case 9:
    case 11:
      if (now.day === 30) {
        next.month = String(now.month + 1)
        next.day = String(now.day - 29)
      } else {
        next.month = String(now.month)
        next.day = String(now.day + 1)
      }
      next.year = String(now.year)
      break
    case 2:
      if (now.day === 28) {
        next.month = String(now.month + 1)
        next.day = '1'
      } else {
        next.month = String(now.month)
        next.day = String(now.day + 1)
      }
      next.year = String(now.year)
      break
    case 12:
      if (now.day === 31) {
        next.year = String(now.year + 1)
        next.month = '1'
        next.day = '1'
      } else {
        next.year = String(now.year)
        next.month = String(now.month)
        next.day = String(now.day + 1)
      }
      break
  }
  return (
    <>
      <Button
        colorScheme="gray"
        variant="solid"
        boxShadow="base"
        onClick={() => {
          if (Number(next.month) > 9) {
            if (Number(next.day) > 9) {
              setDay(
                String(next.year) +
                  '/' +
                  String(next.month) +
                  '/' +
                  String(next.day),
              )
            } else {
              setDay(
                String(next.year) +
                  '/' +
                  String(next.month) +
                  '/0' +
                  String(next.day),
              )
            }
          } else {
            if (Number(next.day) > 9) {
              setDay(
                String(next.year) +
                  '/0' +
                  String(next.month) +
                  '/' +
                  String(next.day),
              )
            } else {
              setDay(
                String(next.year) +
                  '/0' +
                  String(next.month) +
                  '/0' +
                  String(next.day),
              )
            }
          }
        }}
      >
        {next.month}月{next.day}日
      </Button>
    </>
  )
}
