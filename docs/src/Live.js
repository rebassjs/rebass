import React from 'react'
import styled from 'styled-components'
import { width } from 'styled-system'
import connect from 'refunk'
import {
  LiveProvider,
  LivePreview,
  LiveError,
  LiveEditor,
} from 'react-live'
import XRay from 'react-x-ray'
import * as Rebass from 'rebass'
import {
  Flex,
  Box,
  Border,
  Relative,
  Absolute,
  theme
} from 'rebass'
import { photo } from './constants'

const { colors } = theme

const _scope = { ...Rebass, ...{ styled, photo } }

const Editor = styled(LiveEditor)`
  font-family: 'SF Mono', 'Roboto Mono', Menlo, monospace;
  font-size: 13px;
  tab-size: 2;
  margin: 0;
  padding: 16px;
  color: ${colors.blue};
  outline: none;
  overflow: auto;
  max-height: 512px;
  ${width}
`

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
  const {
    code,
    noInline
  } = props
  const scope = { ...{ toggle }, ..._scope, ...props }

  return (
    <LiveProvider
      code={code}
      noInline={noInline}
      scope={scope}
      mountStylesheet={false}>
      <Flex flexWrap='wrap'>
        <Border width={[ 1, null, 3/5 ]}>
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
            <Absolute top={0} left={0} right={0}>
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

export default connect(Live)
