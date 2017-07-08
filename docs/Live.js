import React from 'react'
import styled from 'styled-components'
import { connect } from 'funcup'
import {
  LiveProvider,
  LivePreview,
  LiveError,
  LiveEditor,
} from 'react-live'
import XRay from 'react-x-ray'
import Rebass, {
  Flex,
  Box,
  Border,
  Relative,
  Absolute,
  hoc,
  theme
} from 'rebass'

const _scope = Object.assign({}, Rebass, { styled })

const Editor = hoc(styled(LiveEditor)`
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 13px;
  tab-size: 2;
  margin: 0;
  padding: 16px;
  color: white;
  background-color: #000;
  outline: none;
  overflow: auto;
`)

const Err = styled(LiveError)`
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 13px;
  padding: 16px;
  color: white;
  background-color: red;
`

const toggle = key => state => ({
  [key]: !state[key]
})

const Live = props => {
  const scope = Object.assign({ toggle }, _scope, props)

  return (
    <LiveProvider
      {...props}
      scope={scope}
      mountStylesheet={false}>
      <Flex wrap>
        <Border
          w={[ 1, null, 3/5 ]}
          top right bottom left>
          <Relative>
            <XRay
              color={theme.colors.blue2}
              backgroundColor={theme.colors.gray9}
              disabled={!props.xray}>
              <Box
                p={3}
                style={{ minHeight: 128 }}>
                <LivePreview />
              </Box>
            </XRay>
            <Absolute top left right>
              <Err />
            </Absolute>
          </Relative>
        </Border>
        <Editor
          width={[ 1, null, 2/5 ]}
        />
      </Flex>
    </LiveProvider>
  )
}

const map = state => ({
  xray: state.xray,
  overlay: state.overlay,
  drawer: state.drawer,
  checked: state.checked,
  fixed: state.fixed
})

export default connect(map)(Live)
