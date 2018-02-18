import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Button from './Button'

export const ButtonTransparent = styled(Button)([], props => ({
  '&:hover': {
    color: themeGet('colors.' + props.color)(props),
    backgroundColor: 'transparent'
  },
  '&:focus': {
    boxShadow: `inset 0 0 0 2px, 0 0 0 2px`
  },
  '&:active': {
    backgroundColor: 'transparent',
    boxShadow: `inset 0 0 0 2px, inset 0 0 8px ${themeGet('colors.darken.1')(props)}`
  }
}))

ButtonTransparent.displayName = 'ButtonTransparent'

ButtonTransparent.defaultProps = {
  color: 'inherit',
  bg: 'transparent'
}

export default ButtonTransparent
