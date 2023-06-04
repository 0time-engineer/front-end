import { Button } from '@chakra-ui/button'
import { Card } from '@chakra-ui/card'
import { ColorPresets } from 'Data/ColorPreset'

export const ColorPalette = () => {
  const handleClick = (key: string) => {
    console.log(`Button clicked: ${key}`)
    // ここでボタンがクリックされた時の処理を行います
    localStorage.setItem('SelectedPalet', key)
  }

  const renderButtons = () => {
    return Object.keys(ColorPresets).map((key) => (
      <Button key={key} onClick={() => handleClick(key)}>
        {key}
      </Button>
    ))
  }

  return (
    <>
      <Card>
        <div>{renderButtons()}</div>
      </Card>
    </>
  )
}
