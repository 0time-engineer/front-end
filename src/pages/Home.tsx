import { Flex, Box, Spacer } from '@chakra-ui/react'
import { NavigationBar } from 'Components/atoms/NavigationBar'
import { VSpacer } from 'Components/atoms/Spacer'
import { MySchedule } from 'Components/molecules/MySchedule'
import { ScheduleCard } from 'Components/templates/ScheduleCard'
import { useState, useEffect } from 'react'
import { Friend } from 'Data/DummyData'
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

  const num = Friend
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null,
  )

  const handleScheduleCardClick = (index: number) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index)
  }

  const handleOutsideClick = () => {
    setSelectedCardIndex(null)
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
            username={myData === null ? 'Loading...' : myData.given_name}
          />
        </Box>
      </Flex>
      <VSpacer size={32} />
      {Array.from({ length: num }).map((_, index) => (
        <Box key={index} position="relative">
          {/* 友達のスケジュールカード */}
          <ScheduleCard
            icon={icon}
            username={username}
            onClick={() => handleScheduleCardClick(index)}
          />
          {selectedCardIndex === index && (
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
                schedule={[1, 2, 3]}
                onClose={() => setSelectedCardIndex(null)}
              />
            </Flex>
          )}
          <VSpacer size={4} />
        </Box>
      ))}
      <NavigationBar type="Home" />
    </>
  )
}
