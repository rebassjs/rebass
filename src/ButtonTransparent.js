import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Button from './Button'

export const ButtonTransparent = styled(Button)([], props => ({
  '&:hover': {
    color: themeGet('colors.' + props.color)(props),
    backgroundColor: 'transparent'
  },
}))

ButtonTransparent.displayName = 'ButtonTransparent'

ButtonTransparent.defaultProps = {
  color: 'inherit',
  bg: 'transparent'
}

export default ButtonTransparent
