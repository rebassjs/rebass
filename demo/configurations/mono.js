
import { config } from '../../src'

const caps = {
  textTransform: 'uppercase',
  letterSpacing: '.1em'
}

const mono = {
  name: 'Mono',
  fontFamily: 'Roboto, sans-serif',
  color: '#111',
  backgroundColor: '#fff',

  scale: [
    0, 6, 12, 24, 36, 48
  ],

  fontSizes: [
    64, 24, 20, 18, 14, 12, 10
  ],

  borderColor: `rgba(0, 0, 0, ${1/16})`,

  colors: {
    ...config.colors,
    primary: '#111'
  },

  Heading: {
    fontFamily: 'inherit',
    ...caps
  },

  Button: {
    ...caps
  },
  NavItem: {
    ...caps
  },
  PageHeader: { borderColor: '#111' },
  Footer: { borderColor: '#111' },
  Input: {
    input: {
      backgroundColor: `rgba(255, 255, 255, ${1/8})`
    }
  }
}

export default mono

