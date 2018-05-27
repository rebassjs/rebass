import React from 'react'
import styled from 'styled-components'
import {
  LiveProvider,
  LivePreview
} from 'react-live'
import * as Rebass from 'rebass'
import { Flex } from 'rebass'
import { photo } from './constants'

const update = () => {}
const toggle = () => {}
const checked = true
const scope = Object.assign({}, Rebass, {
  checked,
  update,
  toggle,
  styled,
  photo
})

const Preview = props => {
  return (
    <LiveProvider
      {...props}
      scope={scope}
      mountStylesheet={false}>
      <Flex
        style={{ height: 192 }}
        alignItems='center'
        justifyContent='center'>
        <LivePreview />
      </Flex>
    </LiveProvider>
  )
}

export default Preview
