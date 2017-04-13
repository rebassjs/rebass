
import PropTypes from 'prop-types'
import React from 'react'
import Base from './Base'
import config from './config'
import borderStyles from './util/border-styles'

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
  const { scale, colors } = { ...config, ...rebass }

  borderColor = colors[borderColor] || borderColor || colors.primary

  const sx = {
    marginTop: scale[2],
    marginBottom: scale[2],
    borderWidth: 4,
    borderColor,
    ...borderStyles({
      border,
      borderTop,
      borderRight,
      borderBottom,
      borderLeft
    })
  }

  return (
    <Base {...props}
      className='Block'
      baseStyle={sx} />
  )
}

Block.propTypes = {
  /** Text color - can either be a key from the config colors object or any color value */
  color: PropTypes.string,
  /** Background color - can either be a key from the config colors object or any color value */
  backgroundColor: PropTypes.string,
  /** Border color - can either be a key from the config colors object or any color value */
  borderColor: PropTypes.string,
  /** Adds a border */
  border: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),
  /** Adds a border to the top side */
  borderTop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),
  /** Adds a border to the right side */
  borderRight: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),
  /** Adds a border to the bottom side */
  borderBottom: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),
  /** Adds a border to the left side */
  borderLeft: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),

  /** Applies margin with the margin utility based on the spacing scale */
  m: PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin top based on the spacing scale */
  mt: PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin right based on the spacing scale */
  mr: PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin bottom based on the spacing scale */
  mb: PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin left based on the spacing scale */
  ml: PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin left and right based on the spacing scale */
  mx: PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin top and bottom based on the spacing scale */
  my: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Applies padding with the padding utility based on the spacing scale */
  p: PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding top based on the spacing scale */
  pt: PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding right based on the spacing scale */
  pr: PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding bottom based on the spacing scale */
  pb: PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding left based on the spacing scale */
  pl: PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding left and right based on the spacing scale */
  px: PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding top and bottom based on the spacing scale */
  py: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Controls border radius */
  rounded: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      'top',
      'right',
      'bottom',
      'left'
    ])
  ])
}

Block.contextTypes = {
  rebass: PropTypes.object
}

export default Block

