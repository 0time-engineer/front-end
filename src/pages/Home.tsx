import { Flex, Box, Spacer } from '@chakra-ui/react'
import { NavigationBar } from 'Components/atoms/NavigationBar'
import { VSpacer } from 'Components/atoms/Spacer'
import { MySchedule } from 'Components/molecules/MySchedule'
import { ScheduleCard } from 'Components/templates/ScheduleCard'
import { useState } from 'react'
import { Friend } from 'Data/DummyData'
import { MonthScheduleCard } from 'Components/templates/MonthScheduleCard'

type Props = {
  icon: string
  username: string
}

export const Home = ({ icon, username }: Props) => {
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
          <MySchedule icon={icon} username={username} />
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
