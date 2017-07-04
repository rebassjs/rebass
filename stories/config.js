import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { injectGlobal } from 'styled-components'
import { Box } from 'grid-styled'
import Provider from '../src/Provider'

injectGlobal([], {
  '*': {
    boxSizing: 'border-box'
  },
  body: {
    lineHeight: 1.5,
    margin: 0
  }
})

addDecorator(story => (
  <Provider>
    <Box p={3}>
      {story()}
    </Box>
  </Provider>
))

// const req = require.context('.', true, /\.js$/)

const load = () => {
  require('./Library')
  // req.keys().forEach(req)
}

configure(load, module)
