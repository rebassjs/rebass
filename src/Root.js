import sys from 'system-components'
import { fontFamily } from './utils'

export const Root = sys({
  font: 'sans',
}, fontFamily, {
  '& *': {
    boxSizing: 'border-box'
  }
})

Root.displayName = 'Root'

export default Root
