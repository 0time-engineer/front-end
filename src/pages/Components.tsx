import {
  Box,
  Card,
  CardBody,
  Container,
  HStack,
  Heading,
  VStack,
} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Gmailwindow } from 'Components/atoms/Gmailwindow'
import { VSpacer, HSpacer } from 'Components/atoms/Spacer'
import { TextBox } from 'Components/atoms/TextBox'
import { NavigationBar } from 'Components/atoms/NavigationBar'
import { SimpleButton } from 'Components/atoms/SimpleButton'
import { WeekCalender } from 'Components/organisms/WeekCalender'
import { MonthCalendar } from 'Components/organisms/MonthCalendar'
import { ScheduleCard } from 'Components/templates/ScheduleCard'
import { MonthScheduleCard } from 'Components/templates/MonthScheduleCard'
import { MemberList, MonthSchedule, WeekTF } from 'Data/DummyData'
import { MySchedule } from 'Components/molecules/MySchedule'
import { FilterButton } from 'Components/atoms/FilterButton'
import { useState } from 'react'
import { OneDayTimer } from 'Components/atoms/OneDayTimer'
import { TomorrowButton } from 'Components/atoms/TomorrowButton'
import { OneDayParts } from 'Components/molecules/OneDayParts'
import { MyIcon } from 'Components/atoms/MyIcon'
import { YesterdayButton } from 'Components/atoms/YesterdayButton'
import { DayScheduleCard } from 'Components/templates/DayScheduleCard'

export const Components = () => {
  const userdata = MemberList[0]
  const [filter, setFilter] = useState<boolean>(false)
  const [day, setDay] = useState<string>('2023/05/29')
  const [tapDay, setTapDay] = useState<string>('2023/05/29')
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
  return (
    <>
      <VStack>
        <VSpacer size={4} />
        <Container maxW="container.lg">
          <Heading size="lg" textAlign="center">
            Components Mock Storybook
          </Heading>

          {/* FilterButton */}
          <VSpacer size={8} />
          <Heading size="lg">FilterButton</Heading>
          <Card variant="filled">
            <CardBody>
              <FilterButton filter={filter} setFilter={setFilter} />
              {filter ? <Text>あいうえお</Text> : <Text>かきくけこ</Text>}
            </CardBody>
          </Card>

          {/* Gmailwindow */}
          <VSpacer size={8} />
          <Heading size="lg">Gmailwindow</Heading>
          <Card variant="filled">
            <CardBody>
              <Gmailwindow placeholder={''} />
            </CardBody>
          </Card>

          {/* MyIcon */}
          <VSpacer size={8} />
          <Heading size="lg">MyIcon</Heading>
          <Card variant="filled">
            <CardBody>
              <MyIcon icon={userdata.src} userName={userdata.name} />
            </CardBody>
          </Card>

          {/* NavigationBar */}
          <VSpacer size={8} />
          <Heading size="lg">NavigationBar</Heading>
          <Card variant="filled">
            <CardBody>
              <NavigationBar type="Home" />
            </CardBody>
          </Card>

          {/* OneDayTimer */}
          <VSpacer size={8} />
          <Heading size="lg">OneDayTimer</Heading>
          <Card variant="filled">
            <CardBody>
              <OneDayTimer oneDayList={exampleDayList} />
            </CardBody>
          </Card>

          {/* organisms/MySchedule */}
          <VSpacer size={8} />
          <Heading size="lg">organisms/MySchedule</Heading>
          <Card variant="filled">
            <CardBody>
              <MySchedule
                icon={userdata.src}
                username={userdata.name}
                weekschedule={WeekTF}
                setTapDay={setTapDay}
                onClick={function (): void {
                  throw new Error('Function not implemented.')
                }}
              />
            </CardBody>
          </Card>

          {/* organisms/OneDayParts */}
          <VSpacer size={8} />
          <Heading size="lg">organisms/OneDayParts</Heading>
          <Card variant="filled">
            <CardBody>
              <OneDayParts
                icon={userdata.src}
                userName={userdata.name}
                day={'3日'}
                oneDayList={exampleDayList}
              />
              <Text>{tapDay}</Text>
            </CardBody>
          </Card>

          {/* organisms/ScheduleCard */}
          <VSpacer size={8} />
          <Heading size="lg">organisms/Schedulecard</Heading>
          <Card variant="filled">
            <CardBody>
              <ScheduleCard
                icon={userdata.src}
                username={userdata.name}
                setTapDay={setTapDay}
                onClick={function (): void {
                  throw new Error('Function not implemented.')
                }}
                weekschedule={WeekTF}
                dayClick={function (): void {
                  throw new Error('Function not implemented.')
                }}
              />
            </CardBody>
          </Card>

          {/*  common/Spacer/VSpacer  */}
          <VSpacer size={8} />
          <Heading size="lg">Spacer/VSpacer</Heading>
          <Card variant="filled">
            <CardBody>
              <Box bg="green.400" w="100%" color="white">
                Box A
              </Box>
              <VSpacer size={12} />
              <Box bg="green.400" w="100%" color="white">
                Box B
              </Box>
            </CardBody>
          </Card>

          {/* Spacer/HSpacer */}
          <VSpacer size={8} />
          <Heading size="lg">Spacer/HSpacer</Heading>
          <Card variant="filled">
            <CardBody>
              <HStack>
                <Box bg="green.400" color="white">
                  Box A
                </Box>
                <HSpacer size={12} />
                <Box bg="green.400" color="white">
                  Box B
                </Box>
              </HStack>
            </CardBody>
          </Card>

          {/* TextBox */}
          <VSpacer size={8} />
          <Heading size="lg">TextBox</Heading>
          <Card variant="filled">
            <CardBody>
              <TextBox text={'アプリの名前'} />
            </CardBody>
          </Card>

          {/* SimpleButton */}
          <VSpacer size={8} />
          <Heading size="lg">atomos/SimpleButton</Heading>
          <Card variant="filled">
            <CardBody>
              <SimpleButton type={'google-icon'} text={''} isShadow={false} />
              <Box boxSize={10}></Box>
              <SimpleButton type="add-friends" text="追加" isShadow={false} />
            </CardBody>
          </Card>

          {/* MonthCalendar */}
          <VSpacer size={8} />
          <Heading size="lg">MonthCalendar</Heading>
          <Card variant="filled">
            <CardBody>
              <MonthCalendar schedule={MonthSchedule} />
            </CardBody>
          </Card>

          {/* MonthScheduleCard */}
          <VSpacer size={8} />
          <Heading size="lg">templates/MonthScheduleCard</Heading>
          <Card variant="filled">
            <CardBody>
              <MonthScheduleCard
                icon={userdata.src}
                username={userdata.name}
                schedule={MonthSchedule}
              />
            </CardBody>
          </Card>

          {/* WeekCalender */}
          <VSpacer size={8} />
          <Heading size="lg">organisms/WeekCalender</Heading>
          <Card variant="filled">
            <CardBody>
              <WeekCalender
                schedule={WeekTF}
                setTapDay={setTapDay}
                onClick={function (): void {
                  throw new Error('Function not implemented.')
                }}
              />
              <Text>tapday</Text>
            </CardBody>
          </Card>

          {/* TomorrowButton */}
          <VSpacer size={8} />
          <Heading size="lg">atomos/TomorrowButton</Heading>
          <Card variant="filled">
            <CardBody>
              <TomorrowButton day={day} setDay={setDay} />
              <Text>選択日:{day}</Text>
            </CardBody>
          </Card>
          {/* YesterdayButton */}
          <VSpacer size={8} />
          <Heading size="lg">atomos/YesterdayButton</Heading>
          <Card variant="filled">
            <CardBody>
              <YesterdayButton day={day} setDay={setDay} />
              <Text>選択日:{day}</Text>
            </CardBody>
          </Card>

          {/* DayScheduleCard */}
          <VSpacer size={8} />
          <Heading size="lg">atomos/DayScheduleCard</Heading>
          <Card variant="filled">
            <CardBody>
              <DayScheduleCard
                celectday={day}
                setCelectday={setDay}
                celectfriendname={userdata.name}
                daylist={exampleDayList}
                celectfriendicon={userdata.src}
              />
            </CardBody>
          </Card>

          {/* 追加のテンプレート：消さないでね！！ */}

          {/* --------------------*/}
          {/* メモ */}
          {/* ###/###/### の部分には components 以降のパスを記入する */}
          {/* コンポーネントの配置順番はファイルの位置順が嬉しい (性善説) */}

          {/* コード */}
          {/* ###/###/### */}
          {/* <VSpacer size={8} />
          <Heading size="lg">###/###/###</Heading>
          <Card variant="filled">
            <CardBody>
              // ここに追加するコンポーネントを書く
            </CardBody>
          </Card> */}

          {/* 見ずらいので下にボックスつけます */}
          <Box boxSize={20}></Box>
        </Container>
      </VStack>
    </>
  )
}
