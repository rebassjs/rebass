import { Button as BaseButton } from 'rebass'
import styled from 'styled-components'

// Add custom styles here
const Button = styled(BaseButton)`
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

Button.displayName = 'Button'
Button.defaultProps = {
  borderRadius: 4
}

export default Button
