
import PropTypes from 'prop-types'
import React from 'react'
import Base from './Base'

/**
 * Layout container for fixed positioning children
 */

const Fixed = ({
  top,
  right,
  bottom,
  left,
  zIndex,
  ...props
}) => {
  const sx = {
    position: 'fixed',
    top: top ? 0 : null,
    right: right ? 0 : null,
    bottom: bottom ? 0 : null,
    left: left ? 0 : null,
    zIndex
  }

  return (
    <Base {...props}
      className='Fixed'
      baseStyle={sx} />
  )
}

Fixed.propTypes = {
  /** Sets top: 0 */
  top: PropTypes.bool,
  /** Sets right: 0 */
  right: PropTypes.bool,
  /** Sets bottom: 0 */
  bottom: PropTypes.bool,
  /** Sets left: 0 */
  left: PropTypes.bool,
  /** Sets z-index */
  zIndex: PropTypes.number
}

export default Fixed

