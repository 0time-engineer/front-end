import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react'
import { useState } from 'react'

type Props = {
  placeholder: string
}

export const Gmailwindow = ({ placeholder }: Props) => {
  const [text, setText] = useState('')

  return (
    <>
      <InputGroup size="lg">
        <Input
          value={text}
          placeholder={placeholder}
          onChange={(event) => setText(event.target.value)}
        />
        <InputRightAddon children="@gmail.com" bg="GrayText" />
      </InputGroup>
    </>
  )
}
