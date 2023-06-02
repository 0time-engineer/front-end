import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react'
import { useState } from 'react'

type Props = {
  placeholder: string
}

export const Gmailwindow = ({ placeholder }: Props) => {
  const [email, setEmail] = useState('')

  const handleInputChange = (event: { target: { value: any } }) => {
    const value = event.target.value
    setEmail(value)
    // onValueChange(value) // 親コンポーネントにemailの値を渡す
  }

  return (
    <>
      <InputGroup size="lg">
        <Input
          type="text"
          value={email}
          placeholder={placeholder}
          onChange={handleInputChange}
        />
        <InputRightAddon children="@gmail.com" bg="GrayText" />
      </InputGroup>
    </>
  )
}
