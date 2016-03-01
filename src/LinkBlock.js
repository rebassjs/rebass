
import React from 'react'

/**
 * Unstyled display block link
 */

const LinkBlock = ({
  Component,
  style,
  ...props
}, { rebass }) => {
  const customStyle = rebass ? rebass.LinkBlock : {}

  const sx = {
    display: 'block',
    textDecoration: 'none',
    color: 'inherit',
    ...customStyle,
    ...style
  }

  return (
    <Component {...props}
      className='LinkBlock'
      style={sx} />
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

