import sys from 'system-components'
import { themeGet } from 'styled-system'

export const Button = sys({
  is: 'button',
  fontSize: 1,
  fontWeight: 'bold',
  lineHeight: 16/14,
  m: 0,
  px: 3,
  py: 2,
  color: 'white',
  bg: 'blue',
  borderRadius: 2,
  border: 0,
},
  props => ({
    fontFamily: 'inherit',
    WebkitFontSmoothing: 'antialiased',
    display: 'inline-block',
    verticalAlign: 'middle',
    textAlign: 'center',
    textDecoration: 'none',
    appearance: 'none',
    '&:hover': {
      boxShadow: `inset 0 0 0 999px ${themeGet('colors.darken.0')(props)}`
    },
    '&:focus': {
      outline: 0,
      boxShadow: `0 0 0 2px ${themeGet('colors.blue')(props)}`
    },
    '&:active': {
      backgroundColor: themeGet('colors.blue.6')(props),
      boxShadow: `inset 0 0 8px ${themeGet('colors.darken.1')(props)}`
    },
    '&:disabled': {
      opacity: 1/4
    },
  })
)

Button.displayName = 'Button'

export default Button
