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
  const exampleDayList = [
    { hour: 0, freeFlag: true },
    { hour: 1, freeFlag: true },
    { hour: 2, freeFlag: true },
    { hour: 3, freeFlag: true },
    { hour: 4, freeFlag: true },
    { hour: 5, freeFlag: true },
    { hour: 6, freeFlag: true },
    { hour: 7, freeFlag: true },
    { hour: 8, freeFlag: true },
    { hour: 9, freeFlag: true },
    { hour: 10, freeFlag: true },
    { hour: 11, freeFlag: true },
    { hour: 12, freeFlag: false },
    { hour: 13, freeFlag: false },
    { hour: 14, freeFlag: false },
    { hour: 15, freeFlag: false },
    { hour: 16, freeFlag: false },
    { hour: 17, freeFlag: true },
    { hour: 18, freeFlag: true },
    { hour: 19, freeFlag: true },
    { hour: 20, freeFlag: true },
    { hour: 21, freeFlag: true },
    { hour: 22, freeFlag: true },
    { hour: 23, freeFlag: true },
  ]
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
        )}&user_id=${user_id}&filter=${getZeroOne()}`,
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

  const handleOutsideClick = () => {
    setMonthScheduleInfo({ name: 'Loading', icon: '', schedule: [] })
    setIsCardSelected(false)
  }

  const [isDaySelected, setDaySelected] = useState<boolean>(false)
  const handleDayClick = () => {
    setDaySelected(true)
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

  //自分の1週間情報
  const [myWeek, setMyWeek] = useState<any>(null)
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/week_calender?my_id=${localStorage.getItem(
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
            onClick={function (): void {
              throw new Error('Function not implemented.')
            }}
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
              onClick={() =>
                handleScheduleCardClick(
                  FriendList[index].user_id,
                  FriendList[index].icon,
                  FriendList[index].name,
                )
              }
              dayClick={handleDayClick}
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
                onClick={handleOutsideClick}
              >
                <Spacer />
                <MonthScheduleCard
                  icon={monthScheduleInfo.icon}
                  username={monthScheduleInfo.name}
                  schedule={monthScheduleInfo.schedule}
                  onClose={() => setIsCardSelected(false)}
                />
              </Flex>
            )}

            {isDaySelected && (
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
                  celectday={'3'}
                  celectfriendname={daydata.name}
                  daylist={exampleDayList}
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
