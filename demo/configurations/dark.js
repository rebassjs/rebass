
import { config } from '../../src'

const dark = {
  fontFamily: 'Helvetica, sans-serif',
  color: '#eee',
  backgroundColor: '#111',
  borderRadius: 5,
  borderColor: `rgba(255, 255, 255, ${1/16})`,

  colors: {
    ...config.colors,
    primary: '#333',
    error: '#f04',
    // primary: '#ff00c3'
  },

  scale: [
    0, 10, 20, 40, 80
  ],

  Card: {
    backgroundColor: '#222',
    border: 0,
  },
  Panel: {
    backgroundColor: 'transparent'
  },
  Button: {
    color: '#00d9f7',
    opacity: 7/8
  },
  Toolbar: {
    color: '#00d9f7',
    backgroundColor: `rgba(0, 0, 0, ${7/8})`
  },
  Label: { opacity: 5/8 },
  DropdownMenu: {
    backgroundColor: '#000'
  },
  Menu: {
    backgroundColor: '#000'
  },
  Text: {
    opacity: 7/8
  },
  Footer: {
    opacity: 1/2
  }
}

export default dark
