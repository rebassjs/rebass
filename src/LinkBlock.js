
import React from 'react'
import Base from './Base'

/**
 * Unstyled display block link
 */

const LinkBlock = ({
  Component,
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
      tagName={Component}
      className='LinkBlock'
      baseStyle={sx} />
  )
}

LinkBlock.propTypes = {
  /** Root component - useful for use with react-router's Link component */
  Component: React.PropTypes.node
}

LinkBlock.defaultProps = {
  Component: 'a'
}

LinkBlock.contextTypes = {
  rebass: React.PropTypes.object
}

export default LinkBlock

