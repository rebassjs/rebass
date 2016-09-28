
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Star rating component with clickable buttons
 */

const Rating = ({
  value,
  onClick,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { fontSizes, colors } = theme

  const stars = Array.from({ length: 5 }, (a, b) => b)

  const cx = classnames('Rating', className)

  const sx = {
    root: {
      display: 'inline-flex',
      fontSize: fontSizes[4],
      color: colors.orange,
      ...style
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
      cursor: onClick ? 'pointer' : null,
      ...subComponentStyles.star
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
    <div
      {...props}
      className={cx}
      style={sx.root}>
      {stars.map((s) => (
        <button
          key={s}
          style={sx.star}
          onClick={handleClick(s)}>
          <span style={getEmptyStyle(s)}>☆ </span>
          <span style={getActiveStyle(s)}>★</span>
        </button>
      ))}
    </div>
  )
}

Rating.propTypes = {
  /** Number of star rating from 1 to 5 */
  value: React.PropTypes.number,
  /** Click handler - returns index of star clicked */
  onClick: React.PropTypes.func
}

Rating.defaultProps = {
  value: 0
}

Rating._name = 'Rating'

export default withRebass(Rating)

