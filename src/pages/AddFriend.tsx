import { VSpacer } from 'Components/atoms/Spacer'
import { NavigationBar } from 'Components/atoms/NavigationBar'
import { SimpleButton } from 'Components/atoms/SimpleButton'
import { Input, InputGroup, InputRightAddon, VStack } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'

export const AddFriend = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  const handleAddFriend = () => {
    // TODO: ホームからのmy_mailの値を設定する必要がある
    const url = `https://localhost:8080/add_friend?my_mail=${localStorage.getItem(
      'my_mail',
    )}&friend_mail=${email}@gmail.com`
    axios
      .get(url)
      .then((response) => {
        setEmail(email)
        console.log(response)
      })
      .catch((error) => {
        setError(error)
        console.error(error)
      })
  }

  return (
    <>
      <VStack>
        <VSpacer size={10} />
        <VSpacer size={24} />
        <VSpacer size={16} />
        <InputGroup size="lg">
          <Input
            type="text"
            value={email}
            placeholder={''}
            onChange={(event) => setEmail(event.target.value)}
          />
          <InputRightAddon children="@gmail.com" bg="GrayText" />
        </InputGroup>
        <VSpacer size={64} />
        <SimpleButton
          type="add-friends"
          text="追加"
          isShadow={false}
          clickFn={handleAddFriend}
        />
        {error && <p>データを送信できませんでした。</p>}
        <NavigationBar type={'AddFriend'} />
      </VStack>
    </>
  )
}
