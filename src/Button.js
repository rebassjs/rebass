import sys from 'system-components'
import { theme } from 'styled-system'
import { darken } from './utils'

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
  borderWidth: 0,
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
      boxShadow: `inset 0 0 0 999px ${darken(1/8)}`
    },
    '&:focus': {
      outline: 0,
      boxShadow: `0 0 0 2px ${theme('colors.blue')(props)}`
    },
    '&:active': {
      backgroundColor: theme('colors.blue.6')(props),
      boxShadow: `inset 0 0 8px ${darken(1/4)}`
    },
    '&:disabled': {
      opacity: 1/4
    },
  })
)

Button.displayName = 'Button'

export default Button
