import React from 'react'
import styled, { keyframes } from 'styled-components'
import { size, width, height } from 'styled-system'
import { theme } from '../../src'

const Svg = styled(({
  width,
  height,
  ...props
}) => <svg xmlns='http://www.w3.org/2000/svg' {...props} />)`
  ${width}
  ${height}
`
// mix-blend-mode: screen;

const spin1 = keyframes`
  50% { transform: rotate3d(0, 1, 1, 180deg) }
  100% { transform: rotate3d(0, 1, 1, 360deg) }
`
const spin2 = keyframes`
  50% { transform: rotate3d(1, 0, 1, 180deg) }
  100% { transform: rotate3d(1, 0, 1, 360deg) }
`

const fade1 = keyframes`
  0% { stroke: magenta }
  33% { stroke: cyan }
  66% { stroke: yellow }
  100% { stroke: magenta }
`

const Electron1 = styled.circle`
  transform-origin: 50% 50%;
  animation-name: ${spin1}, ${fade1};
  animation-duration: 3s, 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`

const Electron2 = styled.circle`
  transform-origin: 50% 50%;
  animation-name: ${spin2}, ${fade1};
  animation-duration: 3s, 6s;
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
        <ElectronStatic1
          {...electronProps}
          style={{
            transformOrigin: '50% 50%',
            transform: 'rotate3d(0, 1, 1, 90deg)'
          }}
        />
        <ElectronStatic2
          {...electronProps}
          style={{
            transformOrigin: '50% 50%',
            transform: 'rotate3d(1, 0, 1, 90deg)'
          }}
        />
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
      style={{
        width: props.static ? 384 : null,
        height: props.static ? 384 : null,
        display: 'block',
        maxWidth: '100%',
        margin: 0,
        fill: 'none',
        stroke: 'cyan'
      }}
      width={props.size}
      height={props.size}>
      {props.styles}
      <circle
        cx={32}
        cy={32}
        r={30}
        strokeWidth={1}
        vectorEffect='non-scaling-stroke'
        opacity={1/2}
      />
      {electrons}
    </Svg>
  )
}

Logo.defaultProps = {
  size: 256
}

export default Logo
