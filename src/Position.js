import sys from '@rebass/components'

export const Position = sys({},
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
  extend: Position
}, {
  position: 'relative'
})
Relative.displayName = 'Relative'

export const Absolute = sys({
  extend: Position
}, {
  position: 'absolute'
})
Absolute.displayName = 'Absolute'

export const Fixed = sys({
  extend: Position
}, {
  position: 'fixed'
})
Fixed.displayName = 'Fixed'

export const Sticky = sys({
  extend: Position
}, {
  position: 'sticky'
})
Sticky.displayName = 'Sticky'

export default Position
