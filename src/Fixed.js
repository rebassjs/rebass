
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
  top: React.PropTypes.bool,
  /** Sets right: 0 */
  right: React.PropTypes.bool,
  /** Sets bottom: 0 */
  bottom: React.PropTypes.bool,
  /** Sets left: 0 */
  left: React.PropTypes.bool,
  /** Sets z-index */
  zIndex: React.PropTypes.number
}

export default Fixed

