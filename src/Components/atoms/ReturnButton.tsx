import { Button, Icon } from '@chakra-ui/react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

type Props = {
  type: 'right' | 'left'
  onClick: () => void
}

export const ReturnButton = ({ type, onClick }: Props) => {
  return (
    <>
      <Button variant="ghost" onClick={onClick}>
        {type === 'right' && <Icon as={IoIosArrowForward} w={10} h={10} />}
        {type === 'left' && <Icon as={IoIosArrowBack} w={10} h={10} />}
      </Button>
    </>
  )
}
