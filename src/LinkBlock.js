
import PropTypes from 'prop-types'
import React from 'react'
import Base from './Base'

/**
 * Unstyled display block link
 */

const LinkBlock = ({
  _className,
  ...props
}, { rebass }) => {
  const sx = {
    display: 'block',
    textDecoration: 'none',
    color: 'inherit'
  }

  return (
    <Base
      {...props}
      className={_className || 'LinkBlock'}
      baseStyle={sx} />
  )
}

LinkBlock.propTypes = {
  /** Root component - useful for use with react-router's Link component */
  is: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ])
}

LinkBlock.defaultProps = {
  is: 'a'
}

LinkBlock.contextTypes = {
  rebass: PropTypes.object
}

export default LinkBlock

