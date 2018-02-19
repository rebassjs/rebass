import styled from 'styled-components'
import Text from './Text'
import { letterSpacing } from 'styled-system'

export const Caps = styled(Text)([], letterSpacing, {
  textTransform: 'uppercase'
})

Caps.displayName = 'Caps'

Caps.defaultProps = {
  fontSize: 0,
  letterSpacing: '0.2em'
}

export default Caps
