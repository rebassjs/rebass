
import React from 'react'
import Base from './Base'
import config from './config'

const M = 'M'
const A = 'A'
const L = 'L'
const rad = (a) => Math.PI * a / 180
const rx = (c, r, a) => c + r * Math.cos(rad(a))
const ry = (c, r, a) => c + r * Math.sin(rad(a))

const createPath = (size, value, strokeWidth) => {
  const c = Math.abs(size) / 2 // Center
  const r1 = c // Outer radius
  const r2 = c - Math.abs(strokeWidth) // Inner radius
  const angle = Math.abs(value % 1) * 360 - 90

  const largeArc = value > 0.5 ? 1 : 0

  const arc1 = value === 1 ? [
    A, r1, r1, 0, 0, 1, c, c + r1,
    A, r1, r1, 0, 0, 1, c, c - r1
  ] : [
    A, r1, r1, 0, largeArc, 1,
    rx(c, r1, angle), ry(c, r1, angle)
  ]

  const arc2 = value === 1 ? [
    A, r2, r2, 0, 0, 0, c, c + r2,
    A, r2, r2, 0, 0, 0, c, c - r2
  ] : [
    A, r2, r2, 0, largeArc, 0, c, c - r2
  ]

  return [
    M, c, c - r1,
    ...arc1,
    L, rx(c, r2, angle), ry(c, r2, angle),
    ...arc2
  ].join(' ')
}

const createBg = (size, strokeWidth) => {
  const c = Math.abs(size) / 2 // Center
  const r1 = c // Outer radius
  const r2 = c - Math.abs(strokeWidth) // Inner radius

  return [
    M, c, 0,
    A, r1, r1, 0, 0, 1, c, size,
    A, r1, r1, 0, 0, 1, c, 0,
    M, c, c - r2,
    A, r2, r2, 0, 0, 0, c, c + r2,
    A, r2, r2, 0, 0, 0, c, c - r2
  ].join(' ')
}

/**
 * A single-value donut chart with percentage
 */

const Donut = ({
  value,
  size,
  strokeWidth,
  children,
  ...props
}, { rebass }) => {
  const { bold } = { ...config, ...rebass }

  const viewBox = `0 0 ${size} ${size}`

  const sx = {
    root: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size / 4,
      fontWeight: bold,
      lineHeight: 1,
      width: size,
      height: size
    },
    svg: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      fill: 'currentcolor'
    },
    bg: {
      opacity: 1 / 16
    },
    percentage: {
      marginRight: '-.25em'
    },
    unit: {
      fontSize: '.5em',
      verticalAlign: 'super'
    }
  }

  return (
    <Base {...props}
      className='Donut'
      baseStyle={sx.root}>
      <svg
        viewBox={viewBox}
        width={size}
        height={size}
        style={sx.svg}>
        <path d={createBg(size, strokeWidth)} style={sx.bg} />
        <path d={createPath(size, value, strokeWidth)} />
      </svg>
      {children}
      {!children &&
        <span style={sx.percentage}>
          {Math.round(value * 100)}
          <span style={sx.unit}>%</span>
        </span>
      }
    </Base>
  )
}

Donut.propTypes = {
  /** Value from 0 to 1 */
  value: React.PropTypes.number,
  /** Sets width and height */
  size: React.PropTypes.number,
  /** Sets width of stroke */
  strokeWidth: React.PropTypes.number,
  /** Text color - can either be a key from the config colors object or any color value */
  color: React.PropTypes.string
}

Donut.defaultProps = {
  value: 0,
  size: 128,
  strokeWidth: 8,
  color: 'primary'
}

Donut.contextTypes = {
  rebass: React.PropTypes.object
}

export default Donut

