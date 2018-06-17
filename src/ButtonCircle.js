import sys from 'system-components'
import Button from './Button'

export const ButtonCircle = sys({
  is: Button,
  px: 3,
  borderRadius: 9999
})

ButtonCircle.displayName = 'ButtonCircle'

export default ButtonCircle
