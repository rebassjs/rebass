
import Rebass, { theme } from '../src'

const componentConfigs = {}

Object.keys(Rebass).forEach(key => {
  componentConfigs[key] = {}
})

const themeReset = {
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  letterSpacing: 'inherit',
  color: 'inherit',
  backgroundColor: 'inherit',
  ...theme,
  ...componentConfigs,
  Heading_alt: {} // Need a better way to handle sub configs
}

export default themeReset

