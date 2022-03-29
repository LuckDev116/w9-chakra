import React, { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Flex,
  Image,
  Text,
  AspectRatio,
  Center,
} from "@chakra-ui/react"

import Searchinput from "../components/searchinput"
import Custombutton from '../components/custombutton'
import Customwithvalueinput from '../components/customwithvalueinput'

import { Carousel } from "react-responsive-carousel"
import "./custom.css";

const Sms = () => {

  const [isShwoSearch, setisShwoSearch] = useState("none");
  const [isShwoImage, setisShwoImage] = useState("none");
  const [isShwoMenu, setisShwoMenu] = useState("inline");
  const [isShwoBar, setisShwoBar] = useState("none");

  const ArrowPrev = () => {
    return (
      <button type="button" aria-label="prev slide / item" className="control-arrow control-prev">
        <img src="../assests/left-arrow.svg" alt="Left" />
      </button>
    )
  }

  const ArrowNext = () => {
    return (
      <button type="button" aria-label="next slide / item" className="control-arrow control-next">
        <img src="../assests/right-arrow.svg" alt="right" />
      </button>
    )
  }

  const handleCloseButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setisShwoMenu("none");
    setisShwoImage("inline");
    setisShwoSearch("inline");
    setisShwoBar("inline");
  }

  const handleShowButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setisShwoMenu("inline");
    setisShwoImage("none");
    setisShwoSearch("none");
    setisShwoBar("none");
  }

  return (
    <Box position="relative">
      <Box position="absolute" top="50px" right="10px" display={isShwoBar}>
        <button onClick={handleShowButtonClick}><Image src="../assests/bar.png" alt="logo-big" margin="auto" width="55px" height="53px"/></button>
      </Box>
      <Grid templateColumns='repeat(4, 1fr)'>
        <GridItem colSpan={{sm:4, md:1}} display={{sm:isShwoSearch, md:"inline"}}>
          <Flex direction="row">
            <Box mt="50px" mx={{sm:"20px", md:"5px", lg:"50px"}}>
              <Image src="../assests/logo.png" alt="logo-big" margin="auto" width="68px" height="53px"/>
            </Box>
            <Searchinput />
          </Flex>
        </GridItem>
        <GridItem colSpan={{sm:4, md:2}} mt={{md:"10px" , lg:"110px"}} display={{sm:isShwoImage, md:"inline"}}>
          <Grid templateColumns='repeat(5, 1fr)'>
            <GridItem colSpan={{sm:5, md:1}}> </GridItem>
            <GridItem colSpan={{sm:5, md:3}}>
              <Box display="flex" justifyContent="space-between">
                <Text variant="font_style_5" m="12px" >Online</Text>
                <Box display={{sm:"flex", md:"none"}} my="auto">
                  <Image src="../assests/star.png" alt="star" mr="10px" height="40px"/>
                  <Image src="../assests/feather.png" alt="feather" mr="20px" height="40px"/>
                </Box>
              </Box>
              <Box width={{sm:"100%", md:"85%", lg:"100%"}} border="1.5px solid #A0FFA0" borderRadius="14px" borderColor="#A0FFA0" mb={{sm:"15px",lg:"0px"}}>
                <Box display={{sm:"flex"}}>
                  <Box width={{sm:"50%", md:"50%", lg:"60%"}} height="112px" bg="rgba(196, 196, 196, 0.05)" pt="8px" pl="14px">
                    <Flex direction="row">
                      <Text fontSize="38px">Future</Text>
                      <Image src="../assests/checked.svg" alt="checked" ml="7px" mt="5px"/>
                    </Flex>
                    <Text fontSize="20px">@futurehendrixx</Text>
                  </Box>
                  <Box width={{sm:"50%", md:"50%", lg:"40%"}} height="112px" bg="rgba(196, 196, 196, 0.1);">
                    <Flex direction="row" ml={{sm:"17px", md:"5px", lg:"34px"}} py="27px">
                      <Image src="../assests/gem.png" alt="gem" my="auto" mr="8px" width="33px" height="29px"/>
                      <Text fontSize="44px">250</Text>
                      <Text fontSize="18px" mt="27px">/sec</Text>
                    </Flex>  
                  </Box>
                </Box>
                <AspectRatio ratio={4 / 5} pos="relative">
                  <Box pt="40px">
                    <Carousel infiniteLoop renderArrowPrev={ArrowPrev} renderArrowNext={ArrowNext}>
                      <Image src='../assests/ratio.png' alt='ratio' objectFit='cover' width="100%" />
                      <Image src='../assests/ratio.png' alt='ratio' objectFit='cover' width="100%" />
                      <Image src='../assests/ratio.png' alt='ratio' objectFit='cover' width="100%" />
                    </Carousel>
                    <Box pos="absolute" bottom="140px" width="221px" height="54px" bg="rgba(10, 7, 13, 0.5)" backdropFilter="blur(20px)" borderRadius="10px 10px 0px 0px">
                      <Center>
                        <Image src="../assests/person.png" alt="gem" my="14px" mr="8px"/>
                        <Text fontSize="26px">16 in gueue</Text>
                      </Center>
                    </Box>
                    <Box pos="absolute" bottom="0px" width="100%" height="140px" bg="rgba(10, 7, 13, 0.5);" backdropFilter="blur(20px)" borderRadius="0px 0px 14px 14px">
                      <Center>
                        <Flex direction="column">
                          <Box mt="14px" width="100%" height="71px" background="#FFFFFF" backdropFilter="blur(20px)" borderRadius="10px">
                            <Center mt="14px">
                              <Image src="../assests/logo-black.svg" alt="gem" width="37px" mr="22px"/>
                              <Text fontSize="32px"  color="#0A070C" align="center" >Video Chat</Text>
                            </Center>                            
                          </Box>
                          <Box mt="10px">
                          <Text fontSize="25px"  color="#FFFFFF" align="center" >You have up to 3 min, 29 sec</Text>
                          </Box>
                        </Flex>
                      </Center>
                    </Box>
                  </Box>                  
                </AspectRatio>
              </Box>
            </GridItem>
            <GridItem colSpan={{sm:5, md:1}} display={{sm:"none", md:"inline" }}>
              <Box pl={{sm: "0px", md:"24px"}} display={{sm: "flex", md:"block" }}>
                <Image src="../assests/star.png" alt="star" my="60px" mx={{sm: "auto", md:"0px"}}/>
                <Image src="../assests/feather.png" alt="feather" my="60px" mx={{sm: "auto", md:"0px"}}/>
              </Box>     
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem colSpan={{sm:4, md:1}} bg="rgba(196, 196, 196, 0.1)" ml={{sm: "0px", md: "6.25%"}} display={isShwoMenu}>
          <Box mt={{sm:"30px", md:"25px", lg:"60px"}} display="flex" justifyContent="space-between">
            <Image src="../assests/left-arrow.png" alt="star" ml="60px"/>
            <button onClick={handleCloseButtonClick}><Image src="../assests/close.png" alt="star" mr="60px"/></button>
          </Box>
          <Box mt={{sm:"26px",md:"26px", lg:"52px"}} mb={{sm:"23px", md:"23px", lg:"46px"}}>
            <Text fontSize="32px" ml="60px">Adam</Text>
            <Text fontSize="20px" color="rgba(255, 255, 255, 0.5)" ml="60px">@adam220adam</Text>
          </Box>
          <Box py={{sm:"25px", md:"10px", lg:"50px"}} bg="#201727">
            <Text fontSize="25px" ml="60px">My code is</Text>
          </Box>
          <Box mt={{sm:"30px", md:"30px", lg:"72px"}} ml={{sm:"20px", md:"60px"}}>
            <Customwithvalueinput InputValue="1"/>
            <Customwithvalueinput InputValue="5"/>
            <Customwithvalueinput InputValue="8"/>
            <Customwithvalueinput InputValue="2"/>
          </Box>
          <Box my={{sm:"40px", md:"20px", lg:"101px"}}>
            <Text fontSize="25px" color="rgba(255, 255, 255, 0.75)" ml="60px">1 551 804-7124</Text>
            <Text fontSize="25px" ml="60px">resend</Text>
          </Box>
          <Box mt={{sm:"60px", md:"30px", lg:"195px"}} mb={{sm:"60px", md:"40px", lg:"105px"}}>
            <Center>
              <Custombutton ButtonName="Continue"/>
            </Center>
          </Box>
        </GridItem>
      </Grid>
    </Box> 
  )
}

export default Sms;