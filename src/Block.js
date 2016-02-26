
import React from 'react'
import theme from './theme'

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
  padding,
  margin,
  rounded,
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const blockConfig = { ...theme.Block, ...rebass.Block }

  return (
    <div {...props}
      className='Block'
      style={{
        boxSizing: 'border-box',
        padding: padding || blockConfig.padding,
        margin: margin || blockConfig.margin,
        color: color || blockConfig.color,
        backgroundColor: backgroundColor || blockConfig.backgroundColor,

        borderColor: borderColor || blockConfig.borderColor,
        borderWidth: blockConfig.borderWidth,
        borderStyle: 'solid',

        borderRadius: rounded ? config.borderRadius : 0,
        ...style
      }} />
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
  border: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.number
  ]),
  /** Adds a border to the top side */
  borderTop: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.number
  ]),
  /** Adds a border to the right side */
  borderRight: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.number
  ]),
  /** Adds a border to the bottom side */
  borderBottom: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.number
  ]),
  /** Adds a border to the left side */
  borderLeft: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.number
  ]),
  /** Adds a border radius */
  rounded: React.PropTypes.bool
}

Block.contextTypes = {
  rebass: React.PropTypes.object
}

export default Block

