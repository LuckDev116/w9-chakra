import { Link } from "react-router-dom";

import {
  Container,
  Box,
  Flex,
  Center,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react"

import Boxradius from '../components/boxradius'
import Custombutton from '../components/custombutton'

const End = () => (
  <Box py="30px" mb="3px">
    <Container maxW={{sm: "100%", md: "960px"}}>
      <Center py="24px">
        <Flex direction="column">
          {/* Logo icon */}
          <Box width="44px" mx="auto">
            <Image src="./assests/logo.png" alt="logo"/>
          </Box>
          {/* Heading */}
          <Box p={{sm:"10px", md:"100px"}} mx="auto">
            <Heading>
              Thank you.
            </Heading>
          </Box>
          {/* Description */}
          <Box mx={{sm:"10px", md:"70px"}} mb={{sm:"20px", md:"100px"}}>
            <Boxradius>
              <Flex direction="column" margin={{sm:"5px", md:"25px"}}>
                <Box width={{ sm:"100%", md:"65%" }} mx="auto" my="35px">
                  <Text size="font_size_3">
                  Your profile is currently under review. Please give our team up to 24 hours to verify your account.
                  </Text>
                </Box>
                <Box width={{ sm:"100%", md:"50%" }} mx="auto" my="35px">
                  <Text size="font_size_3">
                    Thank you for signing up to become a Seconds creator.
                  </Text>
                </Box>
              </Flex>
            </Boxradius>
          </Box>            
          {/* Button */}
          <Box mx="auto" my="60px">
            <Link to="/sms"><Custombutton ButtonName="Done"/></Link>            
          </Box>
        </Flex>        
      </Center>
    </Container>
  </Box> 
) 

export default End;