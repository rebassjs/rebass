
import React from 'react'
import cxs from 'cxs'
import breakpoints from './breakpoints'

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
    0% { transform: rotate3d(0, 1, 1, 0deg) }
   50% { transform: rotate3d(0, 1, 1, 180deg) }
  100% { transform: rotate3d(0, 1, 1, 360deg) }
}
@keyframes rotate2 {
    0% { transform: rotate3d(1, 0, 1, 0deg) }
   50% { transform: rotate3d(1, 0, 1, 180deg) }
  100% { transform: rotate3d(1, 0, 1, 360deg) }
}
@keyframes rotate3 {
    0% { transform: rotate3d(1, 1, 0, 0deg) }
   50% { transform: rotate3d(1, 1, 0, 180deg) }
  100% { transform: rotate3d(1, 1, 0, 360deg) }
}
/* ]]> */
`
).replace(/\n/g, ' ').replace(/\s\s+/g, ' ')

class Logo extends React.Component {

  render() {
    const { size, style } = this.props

    const path = 'M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4'

    const ringStyles = {
      display: 'block',
      vectorEffect: 'non-scaling-stroke',
      mixBlendMode: 'multiply',
      transformOrigin: '50% 50%'
    }

    const sx = {
      svg: {
        ...style,
        display: 'inline-block',
        maxWidth: '100%'
      },
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
        viewBox='0 0 32 32'
        onClick={this.handleClick}
        className={cx}
        style={sx.svg}>
        <style dangerouslySetInnerHTML={{ __html: rotationKeyframes }} />
        <g>
          <path d={path} style={{ ...ringStyles, ...sx.c1  }}  fill='cyan' />
          <path d={path} style={{ ...ringStyles, ...sx.c2 }}  fill='yellow' />
          <path d={path} style={{ ...ringStyles, ...sx.c3 }}  fill='magenta' />
        </g>
      </svg>
    )
  }

}

Logo.defaultProps = {
  size: 128
}

export default Logo

