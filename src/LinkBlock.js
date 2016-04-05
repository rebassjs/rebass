
import React from 'react'
import Base from './Base'

/**
 * Unstyled display block link
 */

const LinkBlock = ({
  Component,
  is,
  ...props
}, { rebass }) => {
  const sx = {
    display: 'block',
    textDecoration: 'none',
    color: 'inherit'
  }
  Component = Component || is

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
  is: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
    React.PropTypes.func
  ]),
  /** Alias for `is` prop */
  Component: React.PropTypes.oneOfType([
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

