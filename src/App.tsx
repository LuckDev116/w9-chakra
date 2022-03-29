import { Routes, Route } from "react-router-dom"

import Signup from './pages/signup';
import Step1 from './pages/step1';
import Step2 from './pages/step2';
import Fee from './pages/fee';
import Enable from './pages/enable';
import End from './pages/end';
import Sms from './pages/sms';
import Addprofile from './pages/addprofile';

import theme from './theme/globaltheme'
import { Fonts } from './theme/font'

import {
  ChakraProvider,
} from "@chakra-ui/react"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <Routes>
        <Route path="/" element={ <Enable /> } />
        <Route path="add" element={ <Addprofile /> } />
        <Route path="signup" element={ <Signup /> } />
        <Route path="step1" element={ <Step1 /> } />
        <Route path="step2" element={ <Step2 /> } />
        <Route path="fee" element={ <Fee /> } />        
        <Route path="end" element={ <End /> } />
        <Route path="sms" element={ <Sms /> } />        
    </Routes>   
  </ChakraProvider>
)
