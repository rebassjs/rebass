
import React from 'react'
import theme from './theme'

/**
 * Generic box with visual styling
 */

const Block = ({
  margin,
  padding,
  color,
  backgroundColor,
  borderColor,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { scale, colors } = config

  const blockStyle = {
    ...(rebass ? rebass.Block : {}),
    ...(margin ? { margin } : {}),
    ...(padding ? { padding } : {}),
    ...(color ? { color } : {}),
    ...(backgroundColor ? { backgroundColor } : {}),
    ...(borderColor ? { borderColor } : {}),
    ...style
  }

  const sx = {
    boxSizing: 'border-box',
    padding: scale[2],
    marginTop: scale[2],
    marginBottom: scale[2],
    borderStyle: border ? 'solid' : 'none',
    borderTopStyle: borderTop ? 'solid' : null,
    borderRightStyle: borderRight ? 'solid' : null,
    borderBottomStyle: borderBottom ? 'solid' : null,
    borderLeftStyle: borderLeft ? 'solid' : null,
    color: 'inherit',
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: colors.primary,
    ...blockStyle
  }

  return (
    <div {...props}
      className='Block'
      style={sx} />
  )
}

Block.propTypes = {
  /** Adds margin around component */
  margin: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  /** Adjust padding within component */
  padding: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  /** Text color */
  color: React.PropTypes.string,
  /** Background color */
  backgroundColor: React.PropTypes.string,
  /** Border color */
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


Block.contextTypes = {
  rebass: React.PropTypes.object
}

export default Block

