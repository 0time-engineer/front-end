import { Center } from '@chakra-ui/react'
import { SimpleButton } from 'Components/atoms/SimpleButton'
import { VSpacer } from 'Components/atoms/Spacer'
import { TextBox } from 'Components/atoms/TextBox'
import axios from 'axios'

const getInfo = () => {
  axios
    .get('http://localhost:8080/login')
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const Login = () => {
  return (
    <>
      <VSpacer size={10} />
      <VSpacer size={24} />
      <VSpacer size={24} />
      <TextBox text={'App'} />
      <VSpacer size={64} />
      <Center>
        <SimpleButton
          type={'google-icon'}
          text={''}
          isShadow={false}
          clickFn={getInfo}
        />
      </Center>
    </>
  )
}
