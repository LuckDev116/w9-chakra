import { Link } from "react-router-dom";

import {
  Container,
  Box,
  Flex,
  Center,
  Heading,
  Image,
  Text,
  Button,
} from "@chakra-ui/react"

import Boxradius from '../components/boxradius'
import Custombutton from '../components/custombutton'
import Custominput from '../components/custominput'
import Custombigbutton from '../components/custombigbutton'

const Step1 = () => (
  <Box py="30px">
    {/* Container */}
    <Container maxW={{sm: "100%", md: "960px"}}>
      <Box py="24px">
        <Flex direction="column">
          {/* Logo icon */}
          <Box width="44px" mx="auto" mb="24px">
            <Image src="./assests/logo.png" alt="logo"/>
          </Box>
          {/* Heading */}
          <Box my="14px" mx="auto" width={{sm:"100%", md:"50%"}}>
            <Heading>
              You’re almost done, complete this W-9 form.
            </Heading>            
          </Box>
          {/* Step */}
          <Box textAlign="center">
            <Text variant="font_style_1">
              Step 1/2
            </Text>
          </Box>          
          {/* Input */}
          <Box width={{sm:"82%", md:"76%"}} mx="auto">
            <Box textAlign={{sm:"center", md:"start"}} mb="14px">
              <Text size="font_size_4" my="17px">
                Social security number / TIN
              </Text>
              <Custominput /> <Custominput /> <Custominput />
              <Box display="inline-block" bg="#FFFFFF" width="15px" height="5px" mr="11px"></Box>
              <Custominput /> <Custominput />
              <Box display="inline-block" bg="#FFFFFF" width="15px" height="5px" mr="11px"></Box>
              <Custominput /> <Custominput /> <Custominput /> <Custominput />
            </Box>
            <Box my={{sm:"50px", md:"160px"}}>
              <Text textAlign="start" size="font_size_4">
                Account number(s) with the IRS <Text variant="font_inline_style_2"> (optional)</Text>
              </Text>
              <Box borderRadius="10px" border="1px solid #FFFFFF" height="80px" my="15px">
              </Box> 
              <Text variant="font_style_2" textAlign="right">
                + add another
              </Text> 
            </Box>            
            <Box mx="auto" my="60px">
              <Link to="/step2"><Custombigbutton ButtonName="Continue"/></Link>                 
            </Box>
          </Box>           
        </Flex>        
      </Box>
    </Container>
  </Box> 
) 

export default Step1;