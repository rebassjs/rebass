import sys from 'system-components'
import { theme } from 'styled-system'

export const Textarea = sys({
  is: 'textarea',
  px: 1,
  py: 1,
  m: 0,
  width: 1,
  fontSize: 'inherit',
  color: 'inherit',
  bg: 'transparent',
  borderWidth: 0,
  borderColor: 'gray',
  boxShadow: 1,
  borderRadius: 2,
}, props => ({
  fontFamily: 'inherit',
  appearance: 'none',
  '&:focus': {
    outline: 'none',
    boxShadow: theme('shadows.2')(props)
  },
  '&:disabled': {
    opacity: 1/4
  },
}))

Textarea.displayName = 'Textarea'

export default Textarea
