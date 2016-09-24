
import assign from 'object-assign'
import React from 'react'

const offset1 = 0 // 15
const offset2 = 0 // 45
const offset3 = 0 // 60
const rotationKeyframes = (
`
/* <![CDATA[ */
@-webkit-keyframes color-shift {
    0% { color: #08e }
   33% { color: #0eaa32 }
   66% { color: #ed5e26 }
  100% { color: #08e }
}
@keyframes color-shift {
    0% { color: #08e }
   33% { color: #0eaa32 }
   66% { color: #ed5e26 }
  100% { color: #08e }
}
@-webkit-keyframes rotate1 {
    0% { -webkit-transform: rotate3d(0, 1, 1, ${  0 + offset1}deg) }
   50% { -webkit-transform: rotate3d(0, 1, 1, ${180 + offset1}deg) }
  100% { -webkit-transform: rotate3d(0, 1, 1, ${360 + offset1}deg) }
}
@keyframes rotate1 {
    0% { transform: rotate3d(0, 1, 1, ${  0 + offset1}deg) }
   50% { transform: rotate3d(0, 1, 1, ${180 + offset1}deg) }
  100% { transform: rotate3d(0, 1, 1, ${360 + offset1}deg) }
}

@-webkit-keyframes rotate2 {
    0% { -webkit-transform: rotate3d(1, 0, 1, ${  0 + offset2}deg) }
   50% { -webkit-transform: rotate3d(1, 0, 1, ${180 + offset2}deg) }
  100% { -webkit-transform: rotate3d(1, 0, 1, ${360 + offset2}deg) }
}
@keyframes rotate2 {
    0% { transform: rotate3d(1, 0, 1, ${  0 + offset2}deg) }
   50% { transform: rotate3d(1, 0, 1, ${180 + offset2}deg) }
  100% { transform: rotate3d(1, 0, 1, ${360 + offset2}deg) }
}

@-webkit-keyframes rotate3 {
    0% { -webkit-transform: rotate3d(1, 1, 0, ${  0 + offset3}deg) }
   50% { -webkit-transform: rotate3d(1, 1, 0, ${180 + offset3}deg) }
  100% { -webkit-transform: rotate3d(1, 1, 0, ${360 + offset3}deg) }
}
@keyframes rotate3 {
    0% { transform: rotate3d(1, 1, 0, ${  0 + offset3}deg) }
   50% { transform: rotate3d(1, 1, 0, ${180 + offset3}deg) }
  100% { transform: rotate3d(1, 1, 0, ${360 + offset3}deg) }
}
/* ]]> */
`
).replace(/\n/g, ' ').replace(/\s\s+/g, ' ')

class Logo extends React.Component {

  render() {
    const { size, strokeWidth, style } = this.props

    const c = size / 2
    const radius = size / 2 - strokeWidth

    const ringStyles = {
      fill: 'none',
      stroke: 'currentcolor',
      display: 'block',
      strokeWidth,
      vectorEffect: 'non-scaling-stroke',
      opacity: .5,
      mixBlendMode: 'screen',
    }

    const sx = {
      svg: assign(style, {
        display: 'inline-block',
        WebkitAnimation: 'color-shift 7s linear 0s infinite',
        animation: 'color-shift 7s linear 0s infinite',
        color: '#08e'
      }),
      c1: assign({}, ringStyles, {
        WebkitAnimation: 'rotate1 3s linear 0s infinite',
        animation: 'rotate1 3s linear 0s infinite',
        // color: '#08e'
      }),
      c2: assign({}, ringStyles, {
        WebkitAnimation: 'rotate2 3s linear 1s infinite',
        animation: 'rotate2 3s linear 1s infinite',
        // color: '#08e'
      }),
      c3: assign({}, ringStyles, {
        WebkitAnimation: 'rotate3 3s linear 2s infinite',
        animation: 'rotate3 3s linear 2s infinite',
        // color: '#08e'
      })
    }

    return (
      <svg
        width={size}
        height={size}
        viewBox={[0,0, size, size].join(' ')}
        onClick={this.handleClick}
        className='Logo'
        style={sx.svg}>
        <style dangerouslySetInnerHTML={{ __html: rotationKeyframes }} />
        <g transform={`translate(${c}, ${c})`}>
          <circle cx={0} cy={0} r={radius} style={sx.c1} />
          <circle cx={0} cy={0} r={radius} style={sx.c2} />
          <circle cx={0} cy={0} r={radius} style={sx.c3} />
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

