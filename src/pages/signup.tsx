import { Link } from "react-router-dom";

import {  
  Box,
  Flex,
  Center,
  Text,
} from "@chakra-ui/react"

import Custombutton from "../components/custombutton";

const End = () => (
  <Box>
    <Center height="100vh">
      <Flex direction="column">
        <Box pb={{ sm:"100px", md: "150px", lg:"175px", xl:"277px"}}>
          <Center textAlign="center">
            <Text fontSize={{sm:"90px", md:"200px"}} color="white">
              identity api
            </Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <Link to="/step1"><Custombutton ButtonName="Continue"/></Link>            
          </Center>
          </Box>
      </Flex>
    </Center>
  </Box> 
) 

export default End;