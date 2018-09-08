import sys from '@rebass/components'

export const Code = sys({
  is: 'code',
  fontSize: 1,
  fontFamily: 'mono'
},
  'fontFamily',
  'fontSize',
  'space',
  'color'
)

Code.displayName = 'Code'

export default Code
