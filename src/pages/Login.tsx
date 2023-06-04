import { Box, Center, Image } from '@chakra-ui/react'
import { SimpleButton } from 'Components/atoms/SimpleButton'
import { HSpacer, VSpacer } from 'Components/atoms/Spacer'
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
      <Center>
        <Box bg="white" width="80%" boxShadow="2xl" rounded="xl">
          <VSpacer size={24} />
          <Center>
            <HSpacer size={8} />
            <Image src="https://bit.ly/3WO3M1o" />
          </Center>
          <VSpacer size={24} />
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
