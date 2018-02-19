import sys from 'system-components'

export const Radio = sys({
  is: 'input',
  type: 'radio',
  m: 0,
  mr: 2
}, 'space', 'color')

Radio.displayName = 'Radio'

export default Radio
