import sys from '@rebass/components'
import Button from './Button'

export const ButtonCircle = sys({
  extend: Button,
  px: 3,
  borderRadius: 9999
})

ButtonCircle.displayName = 'ButtonCircle'

export default ButtonCircle
