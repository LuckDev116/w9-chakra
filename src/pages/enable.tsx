import { Link } from "react-router-dom";

import {
  Container,
  Box,
  Flex,
  Center,
  Heading,
  Image,
  Text,
  Switch,
} from "@chakra-ui/react"

import Boxradius from '../components/boxradius'
import Custombutton from '../components/custombutton'

const Enable = () => (
  <Box py="30px" mb="28px">
    <Container maxW={{sm: "100%", md: "960px"}}>
      <Box py="24px">
        <Flex direction="column">
          {/* Logo icon */}
          <Box width="44px" mx="auto">
            <Image src="./assests/logo.png" alt="logo"/>
          </Box>
          {/* Heading */}
          <Box mt={{sm:"45px", md:"120px"}} mb="45px" mx="auto" width="100%">
            <Heading size="font_size_3">
              Do you want to be featured when you are online?
            </Heading>
          </Box>
          {/* Enable */}
          <Box mx="auto" mb="60px">
            <Center>
              <Box mx="12px" my="auto">
                <Text size="font_size_1">
                  Enabled
                </Text>
              </Box>
              <Box>
                <Switch size='lg'/>
              </Box>             
            </Center>
          </Box>
          {/* Description */}
          <Box mx={{sm:"30px", md:"180px"}} mb={{sm:"50px", md:"250px"}}>
            <Boxradius>
              <Box width="70%" mx="auto" my="35px">
                <Text size="font_size_1">
                  By enabling, your profile can be discovered in our “Online Now” category. 
                </Text>
                <Box m="22.5px"></Box>
                <Text size="font_size_1">
                  This can be changed in settings.
                </Text>
              </Box>
            </Boxradius>
          </Box>            
          {/* Button */}
          <Box mx="auto" my="60px">
            <Link to="/add"><Custombutton ButtonName="Continue"/></Link>            
          </Box>
        </Flex>        
      </Box>
    </Container>
  </Box> 
) 

export default Enable;