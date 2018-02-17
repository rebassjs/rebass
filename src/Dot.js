import sys from 'system-components'
import { darken } from './utils'

export const Dot = sys({
  is: 'button',
  m: 0,
  p: 0,
  size: 16,
  bg: darken(1/4),
  borderRadius: 99999,
  border: 4,
  borderColor: 'transparent',
  focus: {
    backgroundColor: 'blue'
  },
  hover: {
    backgroundColor: 'blue'
  },
  disabledStyle: {
    opacity: 1/4
  }
}, {
  appearance: 'none',
  backgroundClip: 'padding-box'
},
  'size',
)

Dot.displayName = 'Dot'

export default Dot
