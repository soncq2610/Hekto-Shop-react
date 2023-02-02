import { extendTheme } from '@chakra-ui/react'
import '@fontsource/lato'
import '@fontsource/josefin-sans'

export const theme = extendTheme({
  colors: {
    Text: {
      DarkBlue: '#151875',
    },

    Gradient: {
      Blue: ['#1389FF', '#1DB4E7'],

      Pink: ['#FA3BE5', '#FF289F'],

      SkyBlue: ['#46D9FF', '#19A5F9'],

      MintGreen: ['#36E6D5', '#29E871'],
    },
  },

  fonts: {
    body: 'josefin-sans, lato',
  },
})
