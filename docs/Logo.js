

import assign from 'object-assign'
import React from 'react'
import cxs from 'cxs'
import breakpoints from './breakpoints'

const offset1 = 0 // 15
const offset2 = 0 // 45
const offset3 = 0 // 60
const rotationKeyframes = (
`
/* <![CDATA[ */
@keyframes color-shift {
    0% { color: #08e }
   33% { color: #0eaa32 }
   66% { color: #ed5e26 }
  100% { color: #08e }
}
@keyframes rotate1 {
    0% { transform: rotate3d(0, 1, 1, ${  0 + offset1}deg) }
   50% { transform: rotate3d(0, 1, 1, ${180 + offset1}deg) }
  100% { transform: rotate3d(0, 1, 1, ${360 + offset1}deg) }
}
@keyframes rotate2 {
    0% { transform: rotate3d(1, 0, 1, ${  0 + offset2}deg) }
   50% { transform: rotate3d(1, 0, 1, ${180 + offset2}deg) }
  100% { transform: rotate3d(1, 0, 1, ${360 + offset2}deg) }
}
@keyframes rotate3 {
    0% { transform: rotate3d(1, 1, 0, ${  0 + offset3}deg) }
   50% { transform: rotate3d(1, 1, 0, ${180 + offset3}deg) }
  100% { transform: rotate3d(1, 1, 0, ${360 + offset3}deg) }
}
/* ]]> */
`
).replace(/\n/g, ' ').replace(/\s\s+/g, ' ')

const Circle = props => (
  <path
    {...props}
    d={[]}
  />
)

class Logo extends React.Component {

  render() {
    const { size, strokeWidth, style } = this.props

    const c = 0 // size / 2
    const path = 'M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4'

    const ringStyles = {
      display: 'block',
      vectorEffect: 'non-scaling-stroke',
      mixBlendMode: 'multiply',
      transformOrigin: '50% 50%'
    }

    const sx = {
      svg: assign(style, {
        display: 'inline-block',
        maxWidth: '100%',
        // height: 'auto',
        // overflow: 'visible'
      }),
      c1: {
        animation: 'rotate1 4s linear -.25s infinite',
      },
      c2: {
        animation: 'rotate2 4s linear -.5s infinite',
      },
      c3: {
        animation: 'rotate3 4s linear 0s infinite',
      }
    }

    const cx = cxs({
      width: 128,
      height: 128,
      [breakpoints.medium]: {
        width: 256,
        height: 256,
      }
    })

    return (
      <svg
        width={size}
        height={size}
        viewBox={[
          0, 0, 32, 32
        ].join(' ')}
        onClick={this.handleClick}
        className={cx}
        style={sx.svg}>
        <style dangerouslySetInnerHTML={{ __html: rotationKeyframes }} />
        <rect width={size} height={size} fill='none' />

        <g transform={`translate(${c}, ${c})`}>
          <path d={path} style={{ ...ringStyles, ...sx.c1  }}  fill='cyan' />
          <path d={path} style={{ ...ringStyles, ...sx.c2 }}  fill='yellow' />
          <path d={path} style={{ ...ringStyles, ...sx.c3 }}  fill='magenta' />
        </g>
      </svg>
    )
  }

}

Logo.defaultProps = {
  size: 128,
  strokeWidth: 5,
  style: {}
}

export default Logo

