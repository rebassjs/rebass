import sys from '@rebass/components'

export const Dot = sys({
  is: 'button',
  m: 0,
  p: 0,
  size: 16,
  bg: 'darken',
  borderRadius: 99999,
  border: 4,
  borderColor: 'transparent',
}, {
  appearance: 'none',
  backgroundClip: 'padding-box'
},
  'size',
  'borderRadius',
  'borders',
  'borderColor',
  'space',
  'color'
)

Dot.displayName = 'Dot'

export default Dot
