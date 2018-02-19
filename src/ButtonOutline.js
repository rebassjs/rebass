import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Button from './Button'

export const ButtonOutline = styled(Button)([], props => ({
  boxShadow: `inset 0 0 0 2px`,
  '&:hover': {
    color: 'white',
    backgroundColor: themeGet('colors.blue')(props),
  },
  '&:focus': {
    boxShadow: `inset 0 0 0 2px, 0 0 0 2px`
  },
  '&:active': {
    color: 'white',
    backgroundColor: themeGet('colors.blue')(props),
    boxShadow: `inset 0 0 0 2px ${themeGet('colors.' + props.color)(props)}, inset 0 0 8px ${themeGet('colors.darken.1')(props)}`
  }
}))

ButtonOutline.displayName = 'ButtonOutline'

ButtonOutline.defaultProps = {
  color: 'blue',
  bg: 'transparent'
}

export default ButtonOutline
