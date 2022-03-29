import { Link } from "react-router-dom";

import {
  Container,
  Box,
  Flex,
  Center,
  Heading,
  Image,
  Text,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
} from "@chakra-ui/react"

import Boxradius from '../components/boxradius'
import Custombutton from '../components/custombutton'

const Step2 = () => (
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
              Step 2/2
            </Text>
          </Box>          
          {/* Description */}
          <Box width={{sm:"100%", md:"76%"}} mx="auto">
            <Boxradius>
              <Flex direction="column" my="24px" mx={{sm:"5px", md:"40px"}}>
                <Box textAlign="start" mb="14px">
                  <Text size="font_size_4">
                    Under penalties of perjury, I certify that:
                  </Text>
                </Box>
                <UnorderedList color="rgb(255,255,255,0.7)" fontSize="18px" textAlign="start">
                  <ListItem mb="21px">
                    I have submitted accurate information regarding my identity and taxpayer identification number (or I am waiting for a number to be issued to me); and
                  </ListItem>
                  <ListItem mb="21px">
                    I am not subject to backup withholding because: (a) I am exempt from backup withholding, or (b) I have not been notified by the Internal Revenue Server (IRS) that I am subject to backup withholding as a result of a failure to report all interest or dividends, or (c) the IRS has notified me that I am not longer subject to backup withholding; and
                  </ListItem>
                  <ListItem mb="21px">
                    I am a U.S. citizen or other U.S. person (defined in instructions); and
                  </ListItem>
                  <ListItem mb="20px">
                    The FATCA code(s) entered on this form (if any) indicating that I am exempt from FATCA reporting is correct.
                  </ListItem>
                </UnorderedList>
                <Box textAlign="start">
                  <Text variant="font_style_3">
                    Certification instructions. You must cross out the second item above if you have been notified by the IRS that you are currently subject to backup withholding because you have failed to report all interest and dividends on your tax return. For real estate transactions, the second item does not apply. For mortgage interest paid, acquisition or abandonment of secured property, cancellation of debt, contributions to an individual retirement arrangement (IRA), and generally, payments other than interest and dividends, you are not required to sign the certification, but you must provide your correct TIN.
                  </Text>
                </Box>
                <Box textAlign="center" my="25px">
                  <Text size="font_size_5" textDecorationLine="underline">
                    Preview document
                  </Text>
                </Box>
                <Box mx="auto">
                  <Link to="/fee"><Custombutton ButtonName="Sign and agree"/></Link>                  
                </Box>
              </Flex>
            </Boxradius>
          </Box>          
        </Flex>        
      </Box>
    </Container>
  </Box> 
) 

export default Step2;