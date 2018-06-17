import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Button from './Button'

export const ButtonOutline = styled(Button)([], props => ({
  boxShadow: `inset 0 0 0 2px ${themeGet('colors.' + props.color)(props)}`,
  '&:hover': {
    color: 'white',
    backgroundColor: themeGet('colors.' + props.color)(props),
  },
}))

ButtonOutline.displayName = 'ButtonOutline'

ButtonOutline.defaultProps = {
  color: 'blue',
  bg: 'transparent'
}

export default ButtonOutline
