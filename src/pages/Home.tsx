import { NavigationBar } from 'Components/atoms/NavigationBar'
import { VSpacer } from 'Components/atoms/Spacer'

export const Home = () => {
  return (
    <>
      <VSpacer size={10} />
      <VSpacer size={32} />
      <NavigationBar type={'Home'} />
    </>
  )
}
