import sys from 'system-components'
import { theme } from 'styled-system'

export const Input = sys({
  is: 'input',
  type: 'text',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  px: 1,
  py: 2,
  m: 0,
  width: 1,
  border: 0,
  borderColor: 'gray',
  boxShadow: 1,
  borderRadius: 2,
  color: 'inherit',
  bg: 'transparent'
}, props => ({
  fontFamily: 'inherit',
  display: 'inline-block',
  verticalAlign: 'middle',
  border: 0,
  appearance: 'none',
  '&:focus': {
    outline: 'none',
    boxShadow: `inset 0 0 0 1px ${theme('colors.blue')(props)}`,
  },
  '&:disabled': {
    opacity: 1/4
  },
}))

Input.displayName = 'Input'

export default Input
