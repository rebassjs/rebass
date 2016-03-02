
import React from 'react'
import theme from './theme'
import margins from './util/margins'

/**
 * Layout container for fixed positioning children
 */

const Fixed = ({
  top,
  right,
  bottom,
  left,
  zIndex,
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Fixed : {}
  const { scale } = config

  const sx = {
    position: 'fixed',
    top: top ? 0 : null,
    right: right ? 0 : null,
    bottom: bottom ? 0 : null,
    left: left ? 0 : null,
    zIndex,
    ...customStyle,
    ...margins(props, scale),
    ...style
  }

  return (
    <div {...props}
      className='Fixed'
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
  zIndex: React.PropTypes.number,

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
}

Fixed.contextTypes = {
  rebass: React.PropTypes.object
}

export default Fixed

