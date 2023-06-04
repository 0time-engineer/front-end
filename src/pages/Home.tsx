import { Flex, Box, Spacer } from '@chakra-ui/react'
import { NavigationBar } from 'Components/atoms/NavigationBar'
import { VSpacer } from 'Components/atoms/Spacer'
import { MySchedule } from 'Components/molecules/MySchedule'
import { ScheduleCard } from 'Components/templates/ScheduleCard'
import { useState, useEffect } from 'react'
import { MonthScheduleCard } from 'Components/templates/MonthScheduleCard'
import { useLocation } from 'react-router'
import axios from 'axios'
import { MemberList, WeekTF } from 'Data/DummyData'
import { FilterButton } from 'Components/atoms/FilterButton'
import { DayScheduleCard } from 'Components/templates/DayScheduleCard'

export const Home = () => {
  const daydata = MemberList[0]
  const [isDaySelected, setDaySelected] = useState<boolean>(false)
  const [tapDay, setTapDay] = useState<string>('2023/05/29')
  console.log(tapDay)

  const location = useLocation()
  useEffect(() => {
    const search = location.search
    const query = new URLSearchParams(search)
    const queryUserId = query.get('user_id')

    if (queryUserId != null) {
      localStorage.setItem('user_id', queryUserId)
    }
  }, [])

  //フィルターの状態
  const [filter, setFilter] = useState<boolean>(false)
  function getZeroOne() {
    return filter ? 1 : 0
  }

  //クリックされたらカレンダー情報を取得
  const [isCardSelected, setIsCardSelected] = useState<boolean>(false)
  const [monthScheduleInfo, setMonthScheduleInfo] = useState({
    name: 'Loading',
    icon: '',
    schedule: [],
  })
  const [dayInfo, setDayInfo] = useState({
    name: 'Loading',
    icon: '',
    schedule: [],
  })

  const handleScheduleCardClick = (
    user_id: string,
    icon: string,
    name: string,
  ) => {
    console.log('monthSchedule: ' + user_id)
    axios
      .get(
        `http://localhost:8080/month_calender?my_id=${localStorage.getItem(
          'user_id',
        )}&user_id=${user_id}&filter=0s`,
      )
      .then((response) => {
        console.log('monthSchedule: ' + response.data)
        setMonthScheduleInfo({
          name: name,
          icon: icon,
          schedule: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
    setIsCardSelected(true)
  }
  //oneDayタップ時
  const handleDayClick = (user_id: string, icon: string, name: string) => {
    console.log({ user_id }, { icon }, { name })
    axios
      .get(
        `https://openschedule-1-r7691628.deta.app/day_calender?my_id=${localStorage.getItem(
          'user_id',
        )}&user_id=${user_id}&filter=${getZeroOne()}&date=${tapDay}`,
      )
      .then((response) => {
        console.log(response.data)
        setDayInfo({
          name: user_id,
          icon: icon,
          schedule: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
    setDaySelected(true)
  }

  //自分のデータを取得
  const [myData, setMyData] = useState<any>(null)
  useEffect(() => {
    axios
      .get(
        `https://openschedule-1-r7691628.deta.app/user_detail?user_id=${localStorage.getItem(
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
        `https://openschedule-1-r7691628.deta.app/friend_list?my_mail=${localStorage.getItem(
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

  //自分の1週間情報
  const [myWeek, setMyWeek] = useState<any>(null)
  useEffect(() => {
    axios
      .get(
        `https://openschedule-1-r7691628.deta.app/week_calender?my_id=${localStorage.getItem(
          'user_id',
        )}&user_id=${localStorage.getItem('user_id')}&filter=0`,
      )
      .then((response) => {
        console.log(response.data)
        setMyWeek(response.data)
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
            weekschedule={myWeek === null ? [] : myWeek}
            setTapDay={setTapDay}
            onClick={function (): void {
              throw new Error('Function not implemented.')
            }}
            //ここエラー表示なくす
          />
        </Box>
      </Flex>
      <VSpacer size={32} />
      <FilterButton filter={filter} setFilter={setFilter} />
      {Array.from({ length: FriendList ? FriendList.length : 0 }).map(
        (_, index) => (
          <Box key={index} position="relative">
            {/* 友達のスケジュールカード */}
            <ScheduleCard
              icon={FriendList[index].icon}
              username={FriendList[index].name}
              setTapDay={setTapDay}
              onClick={() =>
                handleScheduleCardClick(
                  FriendList[index].user_id,
                  FriendList[index].icon,
                  FriendList[index].name,
                )
              }
              dayClick={() =>
                handleDayClick(
                  FriendList[index].user_id,
                  FriendList[index].icon,
                  FriendList[index].name,
                )
              }
              weekschedule={WeekTF}
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
              >
                <Spacer />
                <MonthScheduleCard
                  icon={monthScheduleInfo.icon}
                  username={monthScheduleInfo.name}
                  schedule={monthScheduleInfo.schedule}
                />
              </Flex>
            )}

            {isDaySelected && (
              //日のカレンダー表示
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
              >
                <Spacer />
                <DayScheduleCard
                  celectday={tapDay}
                  setCelectday={setTapDay}
                  celectfriendname={daydata.name}
                  daylist={dayInfo.schedule}
                  celectfriendicon={daydata.src}
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
