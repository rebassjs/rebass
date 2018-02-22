import sys from 'system-components'

export const Pre = sys({
  is: 'pre',
  fontSize: 1,
  fontFamily: 'mono',
  width: 1,
  maxWidth: '100%',
  m: 0
}, {
  display: 'block',
  overflow: 'auto'
},
  'fontFamily',
  'space',
  'color'
)

Pre.displayName = 'Pre'

export default Pre
