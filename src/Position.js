import sys from 'system-components'

export const Position = sys(
  'space',
  'color',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left'
)

Position.displayName = 'Position'

export const Relative = sys({
  is: Position
}, {
  position: 'relative'
})
Relative.displayName = 'Relative'

export const Absolute = sys({
  is: Position
}, {
  position: 'absolute'
})
Absolute.displayName = 'Absolute'

export const Fixed = sys({
  is: Position
}, {
  position: 'fixed'
})
Fixed.displayName = 'Fixed'

export const Sticky = sys({
  is: Position
}, {
  position: 'sticky'
})
Sticky.displayName = 'Sticky'

export default Position
