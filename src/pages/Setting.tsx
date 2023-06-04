import { NavigationBar } from 'Components/atoms/NavigationBar'
import { VSpacer } from 'Components/atoms/Spacer'
import { ColorPalette } from 'Components/templates/ColorPalette'

export const Setting = () => {
  return (
    <>
      <VSpacer size={10} />
      <ColorPalette />

      <NavigationBar type="Setting" />
    </>
  )
}
