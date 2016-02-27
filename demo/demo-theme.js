
import { theme } from '../src'

const demoTheme = {
  fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
  color: '#111',
  backgroundColor: '#fff',
  Toolbar: {
    backgroundColor: theme.colors.black
  },
  Heading: {
    fontFamily: 'inherit'
  },
  Banner: {
    minHeight: '80vh',
    backgroundColor: theme.colors.blue
  },
  Label: {
    opacity: .875
  },
  Input: {
    backgroundColor: 'rgba(255, 255, 255, .25)',
    borderColor: 'rgba(0, 0, 0, .25)'
  },
  Select: {
    borderColor: 'rgba(0, 0, 0, .25)'
  }
}

export default demoTheme

