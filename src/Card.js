
import PropTypes from 'prop-types'
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Styled box with border
 */

const Card = ({
  width,
  ...props
}, { rebass }) => {
  const { scale, borderColor } = { ...config, ...rebass }

  const sx = {
    width,
    padding: scale[1],
    marginBottom: scale[2],
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
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

Card.defaultProps = {
  rounded: true
}

Card.contextTypes = {
  rebass: PropTypes.object
}

export default Card

