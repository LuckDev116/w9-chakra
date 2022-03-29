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

const Fee = () => (
  <Box py="30px" mb="10px">
    <Container maxW={{sm: "100%", md: "960px"}}>
      <Center py="24px">
        <Flex direction="column">
          {/* Logo icon */}
          <Box width="44px" mx="auto">
            <Image src="./assests/logo.png" alt="logo"/>
          </Box>
          {/* Heading */}
          <Box p="25px" mx="auto">
            <Flex direction="row">
              <Box mx={{sm:"0px", md:"35px"}} width="62px">
                <Image src="./assests/gem-left.png" alt="gem-left"/>
              </Box>
              <Box>
                <Heading>
                  Let’s talk about purple gems.
                </Heading>
              </Box>
              <Box mx={{sm:"0px", md:"35px"}} >
                <Image src="./assests/gem-right.png" alt="gem-right"/>
              </Box>
            </Flex>
          </Box>
          {/* Description */}
          <Box mx={{sm:"10px", md:"70px"}}>
            <Boxradius>
              <Flex direction="column" my="46px" mx={{sm:"5px", md:"46px"}}>
                <Box>
                  <Center>
                    <Box mx="8px" width="22px">
                      <Image src="./assests/gem-left.png" alt="gem-left"/>
                    </Box>
                    <Text variant="font_size_1">
                      1 = $0.001
                    </Text>
                  </Center>                
                  <Text variant="font_style_1">
                    (one tenth of a penny)
                  </Text>
                </Box>
                <Box width={{sm:"100%", md:"55%"}} mx="auto" my="40px">
                  <Text size="font_size_2">
                    We collect our service fee in the form of gems during a video call.
                  </Text>
                </Box>
                <Box width={{sm:"100%", md:"70%"}} mx="auto">
                  <Text variant="font_style_2">
                    For example, if you set your secondly rate to <Text variant="font_inline_style">250 gems ($0.25)</Text>, your total profit is <Text variant="font_inline_style">187.5 gems</Text> per second.
                  </Text>
                </Box>
              </Flex>
            </Boxradius>
          </Box>            
          {/* Video chat */}
          <Box mx="auto" my="50px">
            <Box textAlign="center">
              <Text size="font_size_3">
                Set your secondly rate for video chat
              </Text>
            </Box>
            <Box my="23px" mx="auto" width="70%">
              <Box border="1px solid #FFFFFF" borderRadius="10px" p="10px">
                <Text variant="font_style_1">
                  Per second rate
                </Text>
                <Box display="flex" >
                  <Image src="./assests/gem.png" alt="logo"
                  mx="8px" my="auto" width="22px" height="20px"/>
                  <Text size="font_size_2">
                    250
                  </Text>
                </Box>
                
              </Box>              
              <Text variant="font_style_1" m="9px">
                $0.25 / second
              </Text>
            </Box>
          </Box>
          {/* Button */}
          <Box mx="auto" my="10px">
            <Link to="/end"><Custombutton ButtonName="Continue"/></Link>
          </Box>
        </Flex>        
      </Center>
    </Container>
  </Box>  
) 

export default Fee;