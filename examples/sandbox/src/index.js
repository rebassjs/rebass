/* eslint no-unused-vars: 0 */
import { createRoot } from 'react-dom/client'
import shouldForwardProp from '@styled-system/should-forward-prop'
import preset from '@rebass/preset'
import { styled, StyleSheetManager, ThemeProvider } from 'styled-components'

import {
  Box,
  Flex,
} from 'reflexbox/styled-components'
import {
  Heading,
  Button,
} from 'rebass/styled-components'

const theme = {
  ...preset,
}

const Wrapper = styled(Flex)`
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.background};
`

const shouldForwardDomProp = (prop, target) =>
  typeof target !== 'string' || shouldForwardProp(prop)

const App = props => {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardDomProp}>
      <ThemeProvider theme={theme}>
        <Wrapper flexDirection="column" as="section"><Box>1</Box><Box>2</Box></Wrapper>
        <Box variant='styles.root'>
          <Heading as='h1' mb={4}>
            rebass Sandbox
          </Heading>
          <Button variant='primary' mr={3}>
            Beep
          </Button>
          <Button variant='outline'>
            Boop
          </Button>
        </Box>
      </ThemeProvider>
    </StyleSheetManager>
  )
}

createRoot(document.getElementById('root')).render(<App />)
