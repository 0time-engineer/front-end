import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react'
import { VSpacer } from './Spacer'

type Props = {
  placeholder: string
}

export const Gmailwindow = ({ placeholder }: Props) => {
  return (
    <>
      <VSpacer size={4} />
      <InputGroup size="lg">
        <Input placeholder={placeholder} />
        <InputRightAddon children="@gmail.com" bg="GrayText" />
      </InputGroup>
    </>
  )
}
