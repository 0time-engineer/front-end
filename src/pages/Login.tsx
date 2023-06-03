import { Box, Center } from '@chakra-ui/react'
import { SimpleButton } from 'Components/atoms/SimpleButton'
import { VSpacer } from 'Components/atoms/Spacer'
import { TextBox } from 'Components/atoms/TextBox'
import axios from 'axios'
import { baseURL } from 'Data/baseURL'

const getInfo = () => {
  axios
    .get(baseURL + 'login')
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  window.location.href = baseURL + 'login'
}

export const Login = () => {
  return (
    <>
      <VSpacer size={10} />
      <VSpacer size={24} />
      <VSpacer size={12} />
      <Center>
        <Box bg="white" width="80%" boxShadow="2xl" rounded="xl">
          <VSpacer size={12} />
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
          <VSpacer size={12} />
        </Box>
      </Center>
    </>
  )
}
