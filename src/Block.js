
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Generic box with visual styling
 */

const Block = ({
  borderColor,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}, { rebass }) => {
  const { colors } = theme

  borderColor = colors[borderColor] || borderColor || colors.primary

  const cx = classnames('Block', className)

  const sx = {
    borderStyle: border ? 'solid' : 'none',
    borderTopStyle: borderTop ? 'solid' : null,
    borderRightStyle: borderRight ? 'solid' : null,
    borderBottomStyle: borderBottom ? 'solid' : null,
    borderLeftStyle: borderLeft ? 'solid' : null,
    borderWidth: 4,
    borderColor,
    ...style
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx} />
  )
}

Block.propTypes = {
  /** Border color - can either be a key from the theme colors object or any color value */
  borderColor: React.PropTypes.string,
  /** Adds a border */
  border: React.PropTypes.bool,
  /** Adds a border to the top side */
  borderTop: React.PropTypes.bool,
  /** Adds a border to the right side */
  borderRight: React.PropTypes.bool,
  /** Adds a border to the bottom side */
  borderBottom: React.PropTypes.bool,
  /** Adds a border to the left side */
  borderLeft: React.PropTypes.bool
}

Block._name = 'Block'

export default withRebass(Block)

