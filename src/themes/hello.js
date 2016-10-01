
import basic from './basic'

const borderWidth = 4
const borderColor = '#346'

const colors = {
  black: '#346',
  blue: '#0df',
  red: '#f7b',
  green: '#3ea',
  orange: '#fe1',
  gray: '#eef',
  midgray: '#ccd'
}

const hello = {
  name: 'Hello',
  fontFamily: 'Karla, sans-serif',
  letterSpacing: '.1em',
  color: '#346',
  backgroundColor: '#fff',

  borderRadius: 6,

  colors: {
    ...basic.colors,
    ...colors,
    default: colors.midgray,
    primary: colors.blue,
    secondary: colors.midgray,
    info: colors.blue,
    error: colors.blue,
    success: colors.green,
    warning: colors.orange
  },
  inverted: colors.black,

  scale: [
    0, 8, 16, 32, 64
  ],

  bold: 700,

  Toolbar: {
    minHeight: 64,
    color: colors.black,
    backgroundColor: '#fff'
  },
  Banner: {
    backgroundImage: 'none',
    color: colors.black,
    backgroundColor: colors.blue
  },
  Button: {
    fontSize: 20,
    paddingTop: 16,
    paddingBottom: 16
  },
  ButtonOutline: {
    backgroundColor: '#346'
  },
  ButtonCircle: {
    fontSize: 16,
    lineHeight: '16px',
    width: 48,
    height: 48
  },
  Panel: {
    borderWidth
  },
  PanelFooter: {
    borderWidth
  },
  PageHeader: {
    borderWidth,
    borderColor
  },
  SectionHeader: {
    borderWidth,
    borderColor
  },
  Footer: {
    borderWidth,
    borderColor
  },
  Input: {
    input: {
      fontSize: 20,
      height: 48,
      paddingTop: 16,
      paddingBottom: 16
    }
  },
  Select: {
    select: {
      fontSize: 20,
      height: 48
    },
    arrow: {
      marginTop: 24,
      marginBottom: 24
    }
  },
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
  Rating: {
    fontSize: 24
  }
}

export default hello

