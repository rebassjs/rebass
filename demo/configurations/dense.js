
import { config } from '../../src'

const dense = {
  name: 'Dense',
  fontFamily: '"Lucida Grande", Verdana, sans-serif',
  color: '#222',
  backgroundColor: '#efefef',

  colors: {
    ...config.colors,
    blue: '#06d',
    info: '#06d',
    primary: '#06d',
    green: '#0a6',
    success: '#0a6',
    error: '#b20',
  },

  scale: [
    0, 4, 8, 12, 16
  ],

  fontSizes: [
    32, 20, 16, 14, 12, 12, 12
  ],

  bold: 500,

  Heading: {
    fontFamily: 'Helvetica, sans-serif',
  },

  Banner: {
    minHeight: '40vh'
  },

  Toolbar: {
    backgroundColor: '#333'
  }


}

export default dense

