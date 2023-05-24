import { Center } from '@chakra-ui/react'
import { SimpleButton } from 'Components/atoms/SimpleButton'
import { VSpacer } from 'Components/atoms/Spacer'
import { TextBox } from 'Components/atoms/TextBox'

export const Login = () => {
  return (
    <>
      <VSpacer size={10} />
      <VSpacer size={24} />
      <VSpacer size={24} />
      <TextBox text={'App'} />
      <VSpacer size={64} />
      <Center>
        <SimpleButton type={'google-icon'} text={''} isShadow={false} />
      </Center>
    </>
  )
}
