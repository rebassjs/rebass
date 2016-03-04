
import React from 'react'
import Base from './Base'
import theme from './theme'

import margins from './util/margins'
import padding from './util/padding'
import radii from './util/radii'

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
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { scale, colors } = config

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
    borderColor
  }

  return (
    <Base {...props}
      className='Block'
      baseStyle={sx} />
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

  /** Applies margin with the margin utility based on the theme spacing scale */
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

  /** Applies padding with the padding utility based on the theme spacing scale */
  p: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding top based on the theme spacing scale */
  pt: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding right based on the theme spacing scale */
  pr: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding bottom based on the theme spacing scale */
  pb: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding left based on the theme spacing scale */
  pl: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding left and right based on the theme spacing scale */
  px: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding top and bottom based on the theme spacing scale */
  py: React.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Controls border radius */
  rounded: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.oneOf([
      'top',
      'right',
      'bottom',
      'left'
    ])
  ])
}

Block.contextTypes = {
  rebass: React.PropTypes.object
}

export default Block

