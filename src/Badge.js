import sys from '@rebass/components'

export const Badge = sys({
  fontSize: 0,
  px: 2,
  py: 1,
  mx: 1,
  color: 'white',
  bg: 'blue',
  fontWeight: 'bold',
  borderRadius: 2
}, {
  WebkitFontSmoothing: 'antialiased',
  display: 'inline-block',
  verticalAlign: 'middle'
},
  'space',
  'color',
  'fontSize',
  'fontWeight',
  'borderRadius'
)

Badge.displayName = 'Badge'

export default Badge
