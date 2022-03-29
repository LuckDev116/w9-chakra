import {    
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react"

import { SearchIcon } from '@chakra-ui/icons'

const Searchinput = () => {
  return(
    <InputGroup my="50px" width="172px">
      <InputLeftElement
        pointerEvents='none'
        children={<SearchIcon color='gray.300' />}
      />
      <Input type='text' placeholder='search' _placeholder={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '22px' }} border="none" borderRadius="0px" borderBottom="1px solid rgba(255, 255, 255, 0.5)" />
    </InputGroup>
  );
}

export default Searchinput;