import React from 'react'
import {
  LiveProvider,
  LivePreview,
  LiveError
} from 'react-live'
import { withMDXComponents } from '@mdx-js/tag/dist/mdx-provider'
import { Box } from 'rebass'

const transformCode = str => `<React.Fragment>${str}</React.Fragment>`

export default withMDXComponents(({
  code,
  scope,
  components
}) => (
  <Box mb={4}>
    <LiveProvider
      code={code}
      scope={{ ...components, ...scope }}
      mountStylesheet={false}
      transformCode={transformCode}>
      <LivePreview />
      <LiveError />
    </LiveProvider>
  </Box>
))
