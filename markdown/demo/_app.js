import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { Provider, Container } from 'rebass'

import md from '..'

export default ({ render }) => (
  <MDXProvider components={md()}>
    <Provider>
      <Container width={800}>
        {render()}
      </Container>
    </Provider>
  </MDXProvider>
)
