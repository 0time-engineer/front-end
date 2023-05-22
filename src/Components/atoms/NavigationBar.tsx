import { HStack, IconButton, ButtonGroup } from '@chakra-ui/react'
import { HiUserAdd, HiHome } from 'react-icons/hi'
import { AiFillSetting } from 'react-icons/ai'
import { useState } from 'react'

type Props = {
  type: 'Home' | 'AddFriend' | 'Setting'
}

export const NavigationBar = ({ type }: Props) => {
  const [screen, setScreen] = useState(type)

  const ContentButton = ({
    type,
  }: {
    type: 'Home' | 'AddFriend' | 'Setting'
  }) => {
    const color = screen === type ? '#000000' : '#777777'
    //TODO: 型を変更する
    let icon: any
    switch (type) {
      case 'Home':
        icon = <HiHome />
        break
      case 'AddFriend':
        icon = <HiUserAdd />
        break
      case 'Setting':
        icon = <AiFillSetting />
        break
    }
    return (
      <IconButton
        aria-label={type}
        icon={icon}
        color={color}
        h={16}
        w="33.33%"
        variant="ghost"
        fontSize="30px"
        rounded="none"
        borderColor="#000000"
        borderBottomWidth={screen === type ? '5px' : '0px'}
        _hover={{ bg: '#A3A0A0' }}
        onClick={() => setScreen(type)}
      />
    )
  }

  return (
    <>
      <HStack h={16} justify="center">
        <ButtonGroup w="100%" bg="#C2BEBE" isAttached>
          <ContentButton type="Home" />
          <ContentButton type="AddFriend" />
          <ContentButton type="Setting" />
        </ButtonGroup>
      </HStack>
    </>
  )
}
