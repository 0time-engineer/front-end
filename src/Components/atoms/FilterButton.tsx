import { FormControl, FormLabel } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  filter: boolean
  setFilter: Dispatch<SetStateAction<boolean>>
}

export const FilterButton = ({ filter, setFilter }: Props) => {
  return (
    <>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="filter">自分の予定と重ねてみる？:</FormLabel>
        <Switch
          size="lg"
          colorScheme="teal"
          id="filter"
          onChange={() => {
            setFilter(!filter)
          }}
        />
      </FormControl>
    </>
  )
}
