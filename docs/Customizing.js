import React from 'react'
import {
  Text,
  Code,
} from 'rebass'
import Section from './Section'
import Live from './Live'

const Customizing = props => (
  <Section name='Customizing'>
    <Text mb={3}>
      Any component can be customized by passing it to the <Code>styled</Code> function from styled-components.
    </Text>
    <Live
      noInline
      code={code}
    />
  </Section>
)

const code = `const CustomButton = styled(Button)\`
  border: 1px solid rgba(0, 0, 0, .25);
  background-image: linear-gradient(transparent, rgba(0, 0, 0, .125));
  box-shadow: 0 0 4px rgba(0, 0, 0, .25)
\`

const App = () => (
  <CustomButton>
    Hello
  </CustomButton>
)

render(<App />)
`

export default Customizing
