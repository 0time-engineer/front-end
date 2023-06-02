import { Flex, Box, Spacer } from '@chakra-ui/react'
import { NavigationBar } from 'Components/atoms/NavigationBar'
import { VSpacer } from 'Components/atoms/Spacer'
import { MySchedule } from 'Components/molecules/MySchedule'
import { ScheduleCard } from 'Components/templates/ScheduleCard'
import { useState, useEffect } from 'react'
import { MonthScheduleCard } from 'Components/templates/MonthScheduleCard'
import { useLocation } from 'react-router'
import axios from 'axios'

type Props = {
  icon: string
  username: string
}

export const Home = ({ icon, username }: Props) => {
  const location = useLocation()
  useEffect(() => {
    const search = location.search
    const query = new URLSearchParams(search)
    const queryUserId = query.get('user_id')
    if (queryUserId != null) {
      localStorage.setItem('user_id', queryUserId)
    }
  }, [])

  //クリックされたらカレンダー情報を取得
  const [isCardSelected, setIsCardSelected] = useState<boolean>(false)
  const [monthCalendar, setMonthCalendar] = useState<number[]>([])

  const handleScheduleCardClick = (user_id: string) => {
    console.log('MonthCalendar: ' + user_id)
    axios
      .get(
        `http://localhost:8080/month_calender?my_id=${localStorage.getItem(
          'user_id',
        )}&user_id=${user_id}&filter=0`,
      )
      .then((response) => {
        console.log('MonthCalendar: ' + response.data)
        setMonthCalendar(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    setIsCardSelected(true)
  }

  const handleOutsideClick = () => {
    setMonthCalendar([])
    setIsCardSelected(false)
  }

  //自分のデータを取得
  const [myData, setMyData] = useState<any>(null)
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/user_detail?user_id=${localStorage.getItem(
          'user_id',
        )}`,
      )
      .then((response) => {
        console.log(response.data)
        setMyData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
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
        console.log(response.data)
        setFriendList(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      {/* 自分のスケジュールのヘッダー */}
      <VSpacer size={10} />
      <Flex
        position="fixed"
        top={10}
        left={0}
        right={0}
        bg="whiteAlpha.800"
        boxShadow="xl"
      >
        <Box width="100%">
          <MySchedule
            icon={myData === null ? '' : myData.picture}
            username={myData === null ? 'Loading...' : myData.name}
          />
        </Box>
      </Flex>
      <VSpacer size={32} />
      {Array.from({ length: FriendList ? FriendList.length : 0 }).map(
        (_, index) => (
          <Box key={index} position="relative">
            {/* 友達のスケジュールカード */}
            <ScheduleCard
              icon={FriendList[index].icon}
              username={FriendList[index].name}
              onClick={() => handleScheduleCardClick(FriendList[index].user_id)}
            />
            {isCardSelected && (
              // 友達の月カレンダーの表示
              <Flex
                position="fixed"
                top={10}
                left={0}
                right={-5}
                bottom={0}
                bg="whiteAlpha.800"
                boxShadow="xl"
                zIndex={10}
                direction="row"
                onClick={handleOutsideClick}
              >
                <Spacer />
                <MonthScheduleCard
                  icon={icon}
                  username={username}
                  schedule={monthCalendar}
                  onClose={() => setIsCardSelected(false)}
                />
              </Flex>
            )}
            <VSpacer size={4} />
          </Box>
        ),
      )}
      <NavigationBar type="Home" />
    </>
  )
}
