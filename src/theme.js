
import clrs from 'colors.css'

const { blue, red, orange, green } = clrs

const monospace = `'Roboto Mono', Menlo, Consolas, monospace`

const colors = {
  black: '#111',
  white: '#fff',
  gray: '#ccc',
  midgray: '#777',
  blue,
  red,
  orange,
  green
}

const scale = [
  0,
  8,
  16,
  32,
  64
]

const fontSizes = [
  48,
  32,
  24,
  20,
  16,
  14,
  12
]

const colorTypes = {
  default: colors.midgray,
  info: colors.blue,
  success: colors.green,
  warning: colors.orange,
  error: colors.red
}

const borderRadius = 4 // 2
const borderColor = colors.gray

const theme = {
  scale,
  fontSizes,
  colors,
  borderRadius,
  borderColor,
  colorTypes,
  Arrow: {},
  Badge: {
    fontSize: fontSizes[6],
    fontWeight: 600,
    color: colors.white,
    borderRadius
  },
  Banner: {
    color: colors.white,
    backgroundColor: colors.black,
    minHeight: '100vh'
  },
  Block: {
    color: 'inherit',
    backgroundColor: 'transparent',
    borderColor: colors.blue,
    borderWidth: 4,
    padding: scale[2],
    margin: 0
  },
  Breadcrumbs: {},
  Button: {
    color: colors.white,
    backgroundColor: colors.blue,
  },
  Card: {},
  CardImage: {},
  Checkbox: {},
  Container: {
    maxWidth: 1024,
    padding: scale[2]
  },
  Divider: {},
  Dropdown: {},
  DropdownMenu: {},
  Footer: {},
  Heading: {
    fontWeight: 600
  },
  HeadingLink: {},
  Input: {},
  InputRange: {},
  Label: {
    fontWeight: 600
  },
  Media: {},
  Menu: {
    backgroundColor: colors.white,
    borderColor,
    borderRadius
  },
  Message: {
    color: colors.white,
  },
  NavItem: {
    fontWeight: 600
  },
  PageHeader: {},
  Panel: {},
  PanelFooter: {},
  PanelHeader: {
    color: colors.white,
  },
  Pre: {
    fontFamily: monospace,
    paddingLeft: scale[2],
    borderLeft: `4px solid ${colors.gray}`,
    overflowX: 'scroll',
  },
  Progress: {
    color: colors.blue
  },
  Radio: {},
  Section: {},
  SectionHeader: {},
  Select: {},
  Space: {},
  Text: {},
  Textarea: {},
  Toolbar: {
    color: colors.white,
    backgroundColor: colors.blue
  },
  Tooltip: {
    fontSize: fontSizes[6],
    color: colors.white,
    backgroundColor: colors.black,
    borderRadius
  },
}

/* Potential config objects:
 * - progress
 * - range
 */

export default theme

