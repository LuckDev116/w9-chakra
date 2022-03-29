import * as React from 'react'
import {Global} from '@emotion/react'

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'ProximaNova-Regular';
        src: url('./font/ProximaNova-Regular/ProximaNova-Regular.eot?') format('eot'), 
             url('./font/ProximaNova-Regular/ProximaNova-Regular.otf')  format('opentype'),
             url('./font/ProximaNova-Regular/ProximaNova-Regular.woff') format('woff'), 
             url('./font/ProximaNova-Regular/ProximaNova-Regular.ttf')  format('truetype'),
             url('./font/ProximaNova-Regular/ProximaNova-Regular.svg#ProximaNova-Regular') format('svg');
      }
      @font-face {
        font-family: 'ProximaNova-Bold';
        src: url('./font/ProximaNova-Bold/ProximaNova-Bold.eot?') format('eot'), 
             url('./font/ProximaNova-Bold/ProximaNova-Bold.otf')  format('opentype'),
             url('./font/ProximaNova-Bold/ProximaNova-Bold.woff') format('woff'), 
             url('./font/ProximaNova-Bold/ProximaNova-Bold.ttf')  format('truetype'),
             url('./font/ProximaNova-Bold/ProximaNova-Bold.svg#ProximaNova-Regular') format('svg');
      }
    `}
  />
)
