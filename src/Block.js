
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
  rounded,
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const blockStyle = {
    ...theme.Block,
    ...(rebass ? rebass.Block : {}),
    ...(margin ? { margin } : {}),
    ...(padding ? { padding } : {}),
    ...(color ? { color } : {}),
    ...(backgroundColor ? { backgroundColor } : {}),
    ...(borderColor ? { borderColor } : {}),
    ...style
  }

  // console.log('Block styles', blockStyle)

  const sx = {
    boxSizing: 'border-box',
    borderStyle: border ? 'solid' : 'none',
    borderTopStyle: borderTop ? 'solid' : null,
    borderRightStyle: borderRight ? 'solid' : null,
    borderBottomStyle: borderBottom ? 'solid' : null,
    borderLeftStyle: borderLeft ? 'solid' : null,
    borderRadius: rounded ? config.borderRadius : 0,
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
  borderLeft: React.PropTypes.bool,
  /** Adds a border radius */
  rounded: React.PropTypes.bool
}


Block.contextTypes = {
  rebass: React.PropTypes.object
}

export default Block

