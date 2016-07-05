
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
  is: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
    React.PropTypes.func
  ])
}

LinkBlock.defaultProps = {
  is: 'a'
}

LinkBlock.contextTypes = {
  rebass: React.PropTypes.object
}

export default LinkBlock

