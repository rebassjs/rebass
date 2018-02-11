import sys from 'system-components'

export const Text = sys({
  m: 0
},
  'color',
  'fontSize',
  'fontWeight',
  'textAlign',
  'lineHeight'
)

Text.displayName = 'Text'

export default Text
