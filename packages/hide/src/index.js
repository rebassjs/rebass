import React from 'react'
import styled from 'styled-components'
import { display } from 'styled-system'
import hoistStatics from 'hoist-non-react-statics'
// import { Box } from 'rebass'

// temp
const Box = 'div'

const mapProps = map => Component =>
  hoistStatics(props => <Component {...map(props)} />, Component)

export const Base = styled(Box)(display)

export const Hide = mapProps(({
  xsmall,
  small,
  medium,
  large,
  xlarge,
  display,
  ...props,
}) => ({
  display: display || [
    xsmall,
    small,
    medium,
    large,
    xlarge
  ].map(n => n ? 'none' : 'block'),
  ...props,
}))(Base)

export default Hide
