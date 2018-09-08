import sys from '@rebass/components'
import { themeGet } from 'styled-system'
import Button from './Button'

export const ButtonOutline = sys({
  extend: Button,
  color: 'blue',
  bg: 'transparent',
}, props => ({
  boxShadow: `inset 0 0 0 2px ${themeGet('colors.' + props.color, props.color)(props)}`,
}))

ButtonOutline.displayName = 'ButtonOutline'

export default ButtonOutline
