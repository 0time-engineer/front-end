import {
  Box,
  Card,
  CardBody,
  Container,
  HStack,
  Heading,
  VStack,
} from '@chakra-ui/react'
import { Gmailwindow } from 'Components/atoms/Gmailwindow'
import { VSpacer, HSpacer } from 'Components/atoms/Spacer'
import { TextBox } from 'Components/atoms/TextBox'
import { NavigationBar } from 'Components/atoms/NavigationBar'
import { SimpleButton } from 'Components/atoms/SimpleButton'

export const Components = () => {
  return (
    <>
      <VStack>
        <VSpacer size={4} />
        <Container maxW="container.lg">
          <Heading size="lg" textAlign="center">
            Components Mock Storybook
          </Heading>

          {/* Gmailwindow */}
          <VSpacer size={8} />
          <Heading size="lg">Gmailwindow</Heading>
          <Card variant="filled">
            <CardBody>
              <Gmailwindow placeholder={'Placeholder'} />
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
