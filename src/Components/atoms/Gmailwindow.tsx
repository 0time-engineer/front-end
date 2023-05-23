import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react'

type Props = {
  placeholder: string
}

export const Gmailwindow = ({ placeholder }: Props) => {
  return (
    <>
      <InputGroup size="lg">
        <Input placeholder={placeholder} />
        <InputRightAddon children="@gmail.com" bg="GrayText" />
      </InputGroup>
    </>
  )
}
