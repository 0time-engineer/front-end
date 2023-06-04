import { IconButton, Flex } from '@chakra-ui/react'
import { HiUserAdd, HiHome } from 'react-icons/hi'
import { AiFillSetting } from 'react-icons/ai'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ColorPresets } from 'Data/ColorPreset'

type Props = {
  type: 'Home' | 'AddFriend' | 'Setting'
}

export const NavigationBar = ({ type }: Props) => {
  const [screen, setScreen] = useState(type)
  const navigation = useNavigate()

  const ContentButton = ({
    type,
    link,
  }: {
    type: 'Home' | 'AddFriend' | 'Setting'
    link: string
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
    // var Palette = ['#FFFFFF', '#D8F1FF', '#A6DFFF']
    // if (localStorage.getItem('SelectedPalette') !== null) {
    //   Palette = localStorage.getItem('SeletdedPalet')
    // }

    // const selectcolor: string
    // if(localStorage.getItem('SeletdedPalet') == null){
    //    const selectcolor = "bule"
    // }

    return (
      <IconButton
        aria-label={type}
        icon={icon}
        color={color}
        h="64px"
        rounded={'none'}
        flex={1}
        bg={ColorPresets.blue[1]}
        fontSize="35px"
        borderColor="#000000"
        borderBottomWidth={screen === type ? '5px' : '0px'}
        _hover={{ bg: '#A3A0A0' }}
        onClick={() => {
          setScreen(type)
          navigation(link)
        }}
      />
    )
  }

  return (
    <>
      <Flex
        width={'100%'}
        position="fixed"
        bottom={0}
        left={0}
        right={0}
        height={16}
        zIndex={9999}
      >
        <ContentButton type="Home" link="/Home" />
        <ContentButton type="AddFriend" link="/AddFriend" />
        {/* TODO: 設定画面への遷移に変更する */}
        <ContentButton type="Setting" link="/Setting" />
      </Flex>
    </>
  )
}
