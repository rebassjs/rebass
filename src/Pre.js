import sys from '@rebass/components'

export const Pre = sys({
  is: 'pre',
  fontSize: 1,
  fontFamily: 'mono',
  m: 0
}, {
  overflow: 'auto'
},
  'fontFamily',
  'fontSize',
  'space',
  'color'
)

Pre.displayName = 'Pre'

export default Pre
