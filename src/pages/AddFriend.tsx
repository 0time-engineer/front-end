import { VSpacer } from 'Components/atoms/Spacer'
import { NavigationBar } from 'Components/atoms/NavigationBar'
import { Gmailwindow } from 'Components/atoms/Gmailwindow'
import { SimpleButton } from 'Components/atoms/SimpleButton'
import { VStack } from '@chakra-ui/react'

export const AddFriend = () => {
  return (
    <>
      <VStack>
        <VSpacer size={10} />
        <VSpacer size={24} />
        <VSpacer size={16} />
        <Gmailwindow placeholder={''} />
        <VSpacer size={64} />
        <SimpleButton type="add-friends" text="追加" isShadow={false} />
        <NavigationBar type={'AddFriend'} />
      </VStack>
    </>
  )
}
