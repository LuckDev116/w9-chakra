// global.ts
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import type { ComponentStyleConfig } from '@chakra-ui/theme'

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '960px',
  lg: '1440px',
  xl: '1920px',
})

const Container: ComponentStyleConfig = {
  baseStyle: {
    bg:"#150F1A",
    borderRadius: "20px",
  },
}

const Heading: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "700",
    fontSize: "35px",
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "ProximaNova-Bold",
    width: "100%",
  },
  sizes: {
    heading_font_size_1: {
      fontSize: "30px",
    },
    heading_font_sm_size: {
      fontSize: "10px",
    },
  }
}

const Text: ComponentStyleConfig = {
  baseStyle: {
    fontFamily: "ProximaNova-Regular",
    color: "#FFFFFF"
  },
  sizes: {
    font_size_1:{
      fontSize: "20px",
    },
    font_size_2:{
      fontSize: "26px",
    },
    font_size_3:{
      fontSize: "30px",
    },
    font_size_4:{
      fontSize: "23px",
    },
    font_size_5:{
      fontSize: "18px",
    },
    font_size_6:{
      fontSize: "38px",
    },
  },
  variants: {
    font_color_1: {
      color: "rgba(255, 255, 255, 0.7)",
    },
    font_style_1: {
      fontSize: "20px",
      color: "rgba(255, 255, 255, 0.7)",
    },
    font_style_2: {
      fontSize: "26px",
      color: "rgba(255, 255, 255, 0.7)",
    },
    font_style_3: {
      fontSize: "18px",
      color: "rgba(255, 255, 255, 0.7)",
    },
    font_style_4: {
      fontSize: "18px",
      color: "#A0FFA0",
    },
    font_style_5: {
      fontSize: "18px",
      color: "#A0FFA0",
    },
    font_inline_style: {
      display: "inline-block",
      color: "#FFFFFF",
    },
    font_inline_style_2: {
      my: "auto",
      display: "inline-block",
      fontSize: "20px",
      color: "rgba(255, 255, 255, 0.7)",
    },
  },
}

const Button: ComponentStyleConfig = {
  variants: {
    small_icon: {
      m:"24px",
      width:"44px"
    },
  },
}

const globalTheme = extendTheme({
  styles: {
    global: {
      "body": {
        m: 0, p: 0,
        height: "100%",
        bgGradient: "linear(151.05deg, #201727 -1.98%, #0A070C 42.25%)",
        fontFamily: "ProximaNova-Regular",
      },
    }
  },
  components: {
    Container,
    Heading,
    Text,
    Button,
  },
  breakpoints,
})

export default globalTheme