import sys from 'system-components'

export const Divider = sys({
  is: 'hr',
  mx: 0,
  my: 3,
  // needs fix in styled-system
  borderWidth: 1,
  borderBottom: true,
  borderColor: 'gray'
})

Divider.displayName = 'Divider'

export default Divider
