import styled from 'styled-components'
import Button from './Button'

export const ButtonCircle = styled(Button)([])

ButtonCircle.displayName = 'ButtonCircle'

ButtonCircle.defaultProps = {
  px: 3,
  borderRadius: 99999
}

export default ButtonCircle
