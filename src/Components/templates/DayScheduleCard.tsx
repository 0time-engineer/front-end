import { Card, Container } from '@chakra-ui/react'
import { HStack, VStack, Text } from '@chakra-ui/react'
import { VSpacer } from 'Components/atoms/Spacer'

type Props = {
  celectday: string
  celectfriend: string
}

export const DayScheduleCard = ({ celectday, celectfriend }: Props) => {
  return (
    <>
      <Container maxW="sm">
        <Card
          maxH="8xl"
          right={0}
          boxShadow="2xl"
          borderRadius={'30px 0px 0px 30px'}
        >
          <VStack>
            <VSpacer size={2} />
            <HStack>
              {/* TODO:1日のスケジュール表示によって変更する・アイコン必要かどうか全体のレイアウト見て考える */}
              {/* <Image borderRadius="full" boxSize="28" src={icon} />
              dayは書いておかないと、エラーが出るので仮置きです*/}
              <Text fontSize="20px">
                {celectfriend}さんの{celectday}日の予定
              </Text>
            </HStack>
            {/*1日スケジュール表示を入れる */}
          </VStack>
        </Card>
      </Container>
    </>
  )
}
