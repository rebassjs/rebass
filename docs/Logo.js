import React from 'react'
import styled, { keyframes } from 'styled-components'
import { theme } from '../src'

const Svg = styled.svg`
  display: block;
  max-width: 100%;
  margin: 0;
  fill: none;
  stroke: white;
  mix-blend-mode: overlay;

  @media screen and (min-width: ${theme.breakpoints[1]}em) {
    width: ${props => props.size ? props.size + 'px' : '320px'};
    height: ${props => props.size ? props.size + 'px' : '320px'};
  }
`

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

const ElectronStatic1 = styled.circle`
  transform-origin: 50% 50%;
  transform: rotate3d(0, 1, 1, 90deg);
`

const ElectronStatic2 = styled.circle`
  transform-origin: 50% 50%;
  transform: rotate3d(1, 0, 1, 90deg);
`

const Logo = props => {
  const electronProps = {
    cx: 32,
    cy: 32,
    r: 20,
    strokeWidth: 2,
    vectorEffect: 'non-scaling-stroke'
  }
  const size = props.size || 256

  const electrons = props.static
    ? (
      <g>
        <ElectronStatic1 {...electronProps} />
        <ElectronStatic2 {...electronProps} />
      </g>
    )
    : (
      <g>
        <Electron1 {...electronProps} />
        <Electron2 {...electronProps} />
      </g>
    )

  return (
    <Svg viewBox='0 0 64 64'
      size={props.size}
      width={size}
      height={size}>
      <circle
        cx={32}
        cy={32}
        r={24}
        strokeWidth={4}
        vectorEffect='non-scaling-stroke'
      />
      {electrons}
      <path
        d='M0 32 H64'
        strokeWidth={1}
        vectorEffect='non-scaling-stroke'
      />
    </Svg>
  )
}

export default Logo
