import { Button } from '@chakra-ui/react'

type Props = {
  paletname: string
  onClick: () => void
}

export const ColorButton = ({ paletname, onClick }: Props) => {
  return <Button onClick={onClick}>{paletname}</Button>
}
