import React from 'react'
import styled, { keyframes } from 'styled-components'
import { theme } from '../src'

const Placeholder = styled.div([], {
  width: '256px',
  height: '256px',
  backgroundColor: '#eee',
  borderRadius: '9999px'
})

const Svg = styled.svg`
  display: block;
  max-width: 100%;
  margin: 0;
  fill: none;
  stroke: white;
  mix-blend-mode: overlay;

  @media screen and (min-width: ${theme.breakpoints[1]}em) {
    width: 320px;
    height: 320px;
  }
`
// @media screen and (min-width: ${theme.breakpoints[3]}em) {
//     width: 448px;
//     height: 448px;
//   }

// 0% { transform: rotate3d(0, 1, 1, 360deg) }

const spin1 = keyframes`
  50% { transform: rotate3d(0, 1, 1, 180deg) }
  100% { transform: rotate3d(0, 1, 1, 360deg) }
`
const spin2 = keyframes`
  50% { transform: rotate3d(1, 0, 1, 180deg) }
  100% { transform: rotate3d(1, 0, 1, 360deg) }
`

const Electron1 = styled.circle`
  transform-origin: 50% 50%;
  animation-name: ${spin1};
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`

const Electron2 = styled.circle`
  transform-origin: 50% 50%;
  animation-name: ${spin2};
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`

const Logo = props => (
  <Svg viewBox='0 0 64 64'
    width={props.size}
    height={props.size}>
    <circle
      cx={32}
      cy={32}
      r={24}
      strokeWidth={4}
      vectorEffect='non-scaling-stroke'
    />
    <Electron1
      cx={32}
      cy={32}
      r={20}
      strokeWidth={2}
      vectorEffect='non-scaling-stroke'
    />
    <Electron2
      cx={32}
      cy={32}
      r={20}
      strokeWidth={2}
      vectorEffect='non-scaling-stroke'
    />
    <path
      d='M0 32 H64'
      strokeWidth={1}
      vectorEffect='non-scaling-stroke'
    />
  </Svg>
)

Logo.defaultProps = {
  size: 256
}

export default Logo
