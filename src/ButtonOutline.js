import styled from 'styled-components'
import { theme } from 'styled-system'
import Button from './Button'
import { darken } from './utils'

export const ButtonOutline = styled(Button)([], props => ({
  boxShadow: `inset 0 0 0 2px`,
  '&:hover': {
    color: 'white',
    backgroundColor: theme('colors.blue')(props),
  },
  '&:focus': {
    boxShadow: `inset 0 0 0 2px, 0 0 0 2px`
  },
  '&:active': {
    color: 'white',
    backgroundColor: theme('colors.blue')(props),
    boxShadow: `inset 0 0 0 2px ${theme('colors.' + props.color)(props)}, inset 0 0 8px ${darken(1/4)}`
  }
}))

ButtonOutline.displayName = 'ButtonOutline'

ButtonOutline.defaultProps = {
  color: 'blue',
  bg: 'transparent'
}

export default ButtonOutline
