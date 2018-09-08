import sys from '@rebass/components'

export const Divider = sys({
  is: 'hr',
  mx: 0,
  my: 3,
  border: 0,
  borderBottom: 1,
  borderColor: 'gray'
},
  'borders',
  'borderColor',
  'space',
  'color'
)

Divider.displayName = 'Divider'

export default Divider
