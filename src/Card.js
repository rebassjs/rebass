
import React from 'react'
import Base from './Base'
import theme from './theme'

/**
 * Styled box with border
 */

const Card = ({
  width,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { borderColor } = config

  const sx = {
    display: 'flex',
    width,
    flexDirection: 'column',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor,
    overflow: 'hidden'
  }

  return (
    <Base
      {...props}
      className='Card'
      baseStyle={sx} />
  )
}

Card.propTypes = {
  /** Width of card */
  width: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  /** Controls border radius */
  rounded: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.oneOf([
      'top',
      'right',
      'bottom',
      'left'
    ])
  ]),
  /** Applies padding with the padding utility based on the theme spacing scale */
  p: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin bottom based on the theme spacing scale */
  mb: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
}

Card.defaultProps = {
  p: 1,
  mb: 2,
  rounded: true
}

Card.contextTypes = {
  rebass: React.PropTypes.object
}

export default Card

