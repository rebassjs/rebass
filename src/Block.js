
import React from 'react'
import theme from './theme'
import margins from './util/margins'

/**
 * Generic box with visual styling
 */

const Block = ({
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
  const customStyle = rebass && rebass.Block || {}
  const customColor = colors[color] || color


  color = colors[color] || color || 'inherit'
  backgroundColor = colors[backgroundColor] || backgroundColor || null
  borderColor = colors[borderColor] || borderColor || colors.primary

  const sx = {
    boxSizing: 'border-box',
    padding: scale[2],
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
    ...margins(props, scale),
    ...style
  }

  return (
    <div {...props}
      className='Block'
      style={sx} />
  )
}

Block.propTypes = {
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
  borderLeft: React.PropTypes.bool,
  /** Applies margin based on the theme spacing scale */
  m: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin top based on the theme spacing scale */
  mt: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin right based on the theme spacing scale */
  mr: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin bottom based on the theme spacing scale */
  mb: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin left based on the theme spacing scale */
  ml: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin left and right based on the theme spacing scale */
  mx: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin top and bottom based on the theme spacing scale */
  my: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
}

Block.contextTypes = {
  rebass: React.PropTypes.object
}

export default Block

