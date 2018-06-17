import sys from 'system-components'
import { themeGet } from 'styled-system'
import Button from './Button'

export const ButtonOutline = sys({
  is: Button,
  color: 'blue',
  bg: 'transparent',
  hover: {
    color: 'white',
    backgroundColor: 'blue',
  }
}, props => ({
  boxShadow: `inset 0 0 0 2px ${themeGet('colors.' + props.color, props.color)(props)}`,
}))

ButtonOutline.displayName = 'ButtonOutline'

export default ButtonOutline
