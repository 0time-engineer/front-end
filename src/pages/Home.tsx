import { Flex, Box } from '@chakra-ui/react'
import { NavigationBar } from 'Components/atoms/NavigationBar'
import { VSpacer } from 'Components/atoms/Spacer'
import { MySchedule } from 'Components/molecules/MySchedule'
import { ScheduleCard } from 'Components/templates/ScheduleCard'
import { useState, useRef, useEffect } from 'react'
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

  const monthScheduleCardRef = useRef<HTMLDivElement>(null)

  const handleScheduleCardClick = (index: number) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index)
  }

  const handleClickInside = () => {
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
      <VSpacer size={10} />
      <Flex
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={10}
        bg="whiteAlpha.800"
        boxShadow="xl"
        marginBottom={40}
      >
        <MySchedule
          icon={myData === null ? '' : myData.picture}
          username={myData === null ? 'Loading...' : myData.given_name}
        />
      </Flex>
      <VSpacer size={24} />
      {Array.from({ length: num }).map((_, index) => (
        <Box key={index} position="relative">
          <ScheduleCard
            icon={icon}
            username={username}
            onClick={() => handleScheduleCardClick(index)}
          />
          {selectedCardIndex === index && (
            <Box
              position="fixed"
              top={8}
              left={12}
              zIndex={20}
              width="100%"
              height="100%"
              boxShadow="dark-lg"
              borderRadius={'30px 0px 0px 30px'}
              ref={monthScheduleCardRef}
              onClick={handleClickInside}
            >
              <MonthScheduleCard
                icon={icon}
                username={username}
                schedule={[1, 2, 3]}
                onClose={() => setSelectedCardIndex(null)}
              />
            </Box>
          )}
          <VSpacer size={4} />
        </Box>
      ))}
      <NavigationBar type={'Home'} />
    </>
  )
}
