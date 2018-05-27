import { Heading as BaseHeading } from 'rebass'
import styled from 'styled-components'

// Add custom styles here
const Heading = styled(BaseHeading)`
`

Heading.displayName = 'Heading'
Heading.defaultProps = {
  fontSize: 6,
  lineHeight: 1.125
}

export default Heading
