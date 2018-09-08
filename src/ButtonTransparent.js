import sys from '@rebass/components'
import Button from './Button'

export const ButtonTransparent = sys({
  extend: Button,
  bg: 'transparent',
  color: 'inherit',
})

ButtonTransparent.displayName = 'ButtonTransparent'

export default ButtonTransparent
