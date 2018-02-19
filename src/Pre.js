import sys from 'system-components'

export const Pre = sys({
  is: 'pre',
  fontSize: 1,
  fontFamily: 'mono',
  m: 0
}, {
  overflow: 'auto'
},
  'fontFamily',
  'space',
  'color'
)

Pre.displayName = 'Pre'

export default Pre
