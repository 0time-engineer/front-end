import { useEffect } from 'react'
import { BsGoogle } from 'react-icons/bs'
import { Button, Icon, Text } from '@chakra-ui/react'

type Props = {
  type: 'google-icon' | 'add-friends'
  text: string
  isShadow: boolean
  isDisabled?: boolean
  isLoading?: boolean
  clickFn?: () => void
}

export const SimpleButton = ({
  type,
  text,
  isDisabled,
  isLoading,
  clickFn,
}: Props) => {
  useEffect(() => {
    const link = document.createElement('link')
    link.href =
      //TODO:aipのURL
      link.rel = 'stylesheet'
    document.head.appendChild(link)
    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
    <>
      {/* ボタンのUI はここでいじる TODO:フォントや、ボタンの形などは後々入れる値をいじること */}
      <Button
        bg="white"
        color="black"
        variant="outline"
        isDisabled={isDisabled}
        isLoading={isLoading}
        w={'50px'}
        h={'50px'}
        sx={{
          fontFamily: 'Inter',
          fontSize: 16,
        }}
        onClick={clickFn}
      >
        {type === 'add-friends' && (
          <Text className="simple-button">{text}</Text>
        )}
        {type === 'google-icon' && <Icon as={BsGoogle} w={20} h={20} />}
      </Button>
    </>
  )
}
