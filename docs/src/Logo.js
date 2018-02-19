import React from 'react'
import styled, { keyframes } from 'styled-components'
import { size, width, height } from 'styled-system'
import { theme } from '../../src'

const Svg = styled(({
  width,
  height,
  ...props
}) => <svg {...props} />)`
  display: block;
  max-width: 100%;
  margin: 0;
  fill: none;
  stroke: magenta;
  mix-blend-mode: screen;

  ${width}
  ${height}
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
    r: 24,
    strokeWidth: 2,
    vectorEffect: 'non-scaling-stroke'
  }

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
      width={props.size}
      height={props.size}>
      <circle
        cx={32}
        cy={32}
        r={30}
        strokeWidth={4}
        vectorEffect='non-scaling-stroke'
      />
      {electrons}
    </Svg>
  )
}

Logo.defaultProps = {
  size: 256
}

export default Logo
