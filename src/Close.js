import sys from '@rebass/components'
import ButtonTransparent from './ButtonTransparent'

export const Close = sys({
  extend: ButtonTransparent,
  p: 0,
  fontSize: 3,
  lineHeight: 1,
  children: '×'
}, {
  width: '24px',
  height: '24px'
}, 'lineHeight')

Close.displayName = 'Close'

export default Close
