
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

  const customColor = colors[color] || color

  const customStyle = rebass && rebass.Block || {}

  if (margin) {
    customStyle.margin = margin
  }
  if (padding) {
    customStyle.padding = padding
  }

  color = colors[color] || color || 'inherit'
  backgroundColor = colors[backgroundColor] || backgroundColor || null
  borderColor = colors[borderColor] || borderColor || colors.primary

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
    borderWidth: 4,
    borderColor,
    color,
    backgroundColor,
    ...customStyle,
    ...style
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
  /** Text color - can either be a key from the theme colors object or any color value */
  color: React.PropTypes.string,
  /** Background color - can either be a key from the theme colors object or any color value */
  backgroundColor: React.PropTypes.string,
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

Block.contextTypes = {
  rebass: React.PropTypes.object
}

export default Block

