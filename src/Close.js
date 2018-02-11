import sys from 'system-components'
import ButtonTransparent from './ButtonTransparent'

export const Close = sys({
  is: ButtonTransparent,
  p: 0,
  fontSize: 3,
  lineHeight: 1,
  children: '×'
}, {
  width: '24px',
  height: '24px'
})

Close.displayName = 'Close'

export default Close
