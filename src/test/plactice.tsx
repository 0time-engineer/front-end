import { Box } from '@chakra-ui/react'
import { NavigationBar } from 'Components/atoms/NavigationBar'

import { ScheduleCard } from 'Components/templates/ScheduleCard'
import { useState, useEffect } from 'react'

import { useLocation } from 'react-router'
import axios from 'axios'
import { WeekTF } from 'Data/DummyData'

export const Plactice = () => {
  const location = useLocation()
  useEffect(() => {
    const search = location.search
    const query = new URLSearchParams(search)
    const queryUserId = query.get('user_id')
    if (queryUserId != null) {
      localStorage.setItem('user_id', queryUserId)
    }
  }, [])

  //フレンドリストを取得
  const [FriendList, setFriendList] = useState<any>(null)
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/friend_list?my_mail=${localStorage.getItem(
          'user_id',
        )}`,
      )
      .then((response) => {
        // console.log(response.data)
        setFriendList(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  //フレンドの1週間情報
  const [FriendWeek, setFriendWeek] = useState<any>([WeekTF, WeekTF])
  useEffect(() => {
    console.log(FriendWeek)
    if (FriendList !== null) {
      let value: any[] = []
      FriendList.forEach((element: any) => {
        axios
          .get(
            `http://localhost:8080/week_calender?my_id=${localStorage.getItem(
              'user_id',
            )}&user_id=${element.user_id}&filter=0`,
          )
          .then((response) => {
            console.log(response.data)
            value.push(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
        console.log(element.user_id)
      })
      setFriendWeek(value)
      console.log(FriendWeek.length)
    }
  }, FriendList)

  return (
    <>
      {Array.from({ length: FriendList ? FriendList.length : 0 }).map(
        (_, index) => (
          <Box key={index} position="relative">
            {/* 友達のスケジュールカード */}
            <ScheduleCard
              icon={FriendList[index].icon}
              username={FriendList[index].name}
              weekschedule={FriendWeek[index]}
              onClick={function (): void {
                throw new Error('Function not implemented.')
              }}
            />
          </Box>
        ),
      )}
      <NavigationBar type="Home" />
    </>
  )
}
