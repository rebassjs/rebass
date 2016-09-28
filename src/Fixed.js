
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Layout container for fixed positioning children
 */

const Fixed = ({
  top,
  right,
  bottom,
  left,
  zIndex,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const cx = classnames('Fixed', className)

  const sx = {
    position: 'fixed',
    top: top ? 0 : null,
    right: right ? 0 : null,
    bottom: bottom ? 0 : null,
    left: left ? 0 : null,
    zIndex,
    ...style
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx} />
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

Fixed._name = 'Fixed'

export default withRebass(Fixed)

