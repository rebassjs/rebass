import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { injectGlobal } from 'styled-components'
import { Box } from 'grid-styled'
import { createProvider } from 'funcup'
import XRay from 'react-x-ray'
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

const hoc = createProvider({
  xray: false
})

const toggleXRay = state => ({ xray: !state.xray })

const Demo = hoc(props => (
  <Provider>
    <XRay disabled={!props.xray}>
      <Box p={3}>
        {props.story()}
      </Box>
    </XRay>
    <button
      onClick={e => props.update(toggleXRay)}
      children='X-Ray'
    />
  </Provider>
))

addDecorator(story => (
  <Demo story={story} />
))

setOptions({
  name: 'Rebass',
  url: 'http://jxnblk.com/rebass',
  showDownPanel: false,
})

const req = require.context('.', true, /\.js$/)

const load = () => {
  // require('./Library')
  req.keys().forEach(req)
}

configure(load, module)
