import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { useThemeUI } from 'theme-ui'
import { layout } from 'styled-system'

const Svg = styled(({
  width,
  height,
  ...props
}) => <svg xmlns='http://www.w3.org/2000/svg' {...props} />)`
  transform: rotate3d(1, 1, 1, 0deg);
  ${layout}
`

const spin1 = keyframes`
  50% { transform: rotate3d(0, 2, 1, 180deg) }
  100% { transform: rotate3d(0, 2, 1, 360deg) }
`
const spin2 = keyframes`
  50% { transform: rotate3d(2, 0, 1, 180deg) }
  100% { transform: rotate3d(2, 0, 1, 360deg) }
`

const fade1 = keyframes`
  0% { stroke: magenta }
  33% { stroke: cyan }
  66% { stroke: yellow }
  100% { stroke: magenta }
`

const a = '4s'
const b = '7s'
const c = '8s'

const Electron1 = styled('circle')`
  transform-origin: 50% 50%;
  animation-name: ${spin1}, ${fade1};
  animation-duration: ${a}, ${b};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`

const Electron2 = styled('circle')`
  transform-origin: 50% 50%;
  animation-name: ${spin2}, ${fade1};
  animation-duration: ${a}, ${c};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`

const ElectronStatic1 = styled('circle')`
  transform-origin: 50% 50%;
  transform: rotate3d(0, 2, 1, 190deg);
`

const ElectronStatic2 = styled('circle')`
  transform-origin: 50% 50%;
  transform: rotate3d(2, 0, 1, 190deg);
`

const Logo = props => {
  const electronProps = {
    cx: 32,
    cy: 32,
    r: 24,
    strokeWidth: props.strokeWidth,
    vectorEffect: 'non-scaling-stroke'
  }

  const electrons = props.static
    ? (
      <g>
        <ElectronStatic1 {...electronProps} stroke='#f90' />
        <ElectronStatic2 {...electronProps} stroke='magenta' />
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
        display: 'block',
        maxWidth: '100%',
        margin: 0,
        fill: 'none',
        stroke: 'cyan',
      }}
      vectorEffect='non-scaling-stroke'
      width={props.size}
      height={props.size}>
      {props.styles}
      <circle
        cx={32}
        cy={32}
        r={32}
        fill={props.bg}
        stroke='none'
      />
      <circle
        cx={32}
        cy={32}
        r={30}
        strokeWidth={props.strokeWidth / 2}
        vectorEffect='non-scaling-stroke'
        opacity={1/2}
      />
      {electrons}
      {!props.text && props.initial && (
        <text
          x={32}
          y={40}
          textAnchor='middle'
          fontFamily='system-ui, sans-serif'
          fontWeight='bold'
          fontSize='24'
          stroke='none'
          fill={props.color}>
          R
        </text>
      )}
      {props.text && (
        <text
          x={32}
          y={34}
          textAnchor='middle'
          fontFamily='system-ui, sans-serif'
          fontWeight='bold'
          fontSize='4'
          stroke='none'
          fill={props.color}
          style={{
            textTransform: 'uppercase',
            letterSpacing: '0.5em'
          }}>
          {props.text}
        </text>
      )}
    </Svg>
  )
}

Logo.defaultProps = {
  initial: false,
  color: 'white',
  bg: 'transparent',
  strokeWidth: 2,
  size: 256
}

export default Logo
