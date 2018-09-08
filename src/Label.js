import sys from '@rebass/components'

export const Label = sys({
  is: 'label',
  fontSize: 1,
  mb: 1,
  alignItems: 'center'
}, {
  display: 'flex'
},
  'alignItems',
  'fontSize',
  'space',
  'color'
)

Label.displayName = 'Label'

export default Label
