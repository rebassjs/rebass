
import basic from './basic'

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
    0, 8, 16, 32, 64
  ],

  fontSizes: [
    64, 24, 20, 18, 14, 12, 12
  ],

  borderColor: basic.colors.darken,

  colors: {
    ...basic.colors,
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
  Checkbox: {
    box: {
      width: 24,
      height: 24
    }
  },
  Radio: {
    dot: {
      width: 24,
      height: 24
    }
  },
  Pre: {
    fontSize: 14,
    borderLeft: 0,
    padding: 8,
    borderRadius: 2,
    backgroundColor: basic.colors.gray
  }
}

export default mono

