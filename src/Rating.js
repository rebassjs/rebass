
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Star rating component with clickable buttons
 */

const Rating = ({
  value,
  onClick,
  ...props
}, { rebass }) => {
  const { fontSizes, colors } = { ...config, ...rebass }

  const stars = Array.from({ length: 5 }, (a, b) => b)

  const sx = {
    root: {
      display: 'inline-flex',
      fontSize: fontSizes[4]
    },
    star: {
      position: 'relative',
      fontSize: 'inherit',
      lineHeight: 1,
      margin: 0,
      marginRight: '.25em',
      padding: '.25em 0',
      border: 0,
      color: 'inherit',
      backgroundColor: 'transparent',
      cursor: onClick ? 'pointer' : null
    }
  }

  const getEmptyStyle = (i) => {
    const active = i < value
    const color = active ? null : colors.gray
    return { color }
  }

  const getActiveStyle = (i) => {
    const active = i < value
    const display = active ? null : 'none'
    const clip = value > i && value < i + 1 ? 'rect(0, .5em, 1em, 0)' : null

    return {
      position: 'absolute',
      top: '.25em',
      left: 0,
      display,
      clip
    }
  }

  const handleClick = (i) => {
    return (e) => {
      if (onClick) {
        onClick(i + 1)
      }
    }
  }

  return (
    <Base
      {...props}
      className='Rating'
      baseStyle={sx.root}>
      {stars.map((s) => (
        <button
          key={s}
          style={sx.star}
          onClick={handleClick(s)}>
          <span style={getEmptyStyle(s)}>☆ </span>
          <span style={getActiveStyle(s)}>★</span>
        </button>
      ))}
    </Base>
  )
}

Rating.propTypes = {
  /** Number of star rating from 1 to 5 */
  value: React.PropTypes.number,
  /** Click handler - returns index of star clicked */
  onClick: React.PropTypes.func
}

Rating.defaultProps = {
  value: 0,
  color: 'orange'
}

Rating.contextTypes = {
  rebass: React.PropTypes.object
}

export default Rating

