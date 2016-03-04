
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Link for use in navigation. Inherits color
 */

const NavItem = ({
  small,
  Component,
  ...props
}, { rebass }) => {
  const { fontSizes, scale, bold } = { ...config, ...rebass }

  return (
    <Base
      {...props}
      tagName={Component}
      className='NavItem'
      baseStyle={{
        fontSize: small ? fontSizes[6] : fontSizes[5],
        fontWeight: bold,
        lineHeight: '1rem',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: small ? `${scale[1] / 2}px ${scale[1]}px` : scale[1],
        color: 'inherit',
        cursor: 'pointer'
      }} />
  )
}

NavItem.propTypes = {
  /** Sets a smaller font size for compact UI */
  small: React.PropTypes.bool,
  /** Root component - useful for use with react-router's Link component */
  Component: React.PropTypes.node
}

NavItem.defaultProps = {
  Component: 'a'
}

NavItem.contextTypes = {
  rebass: React.PropTypes.object
}

export default NavItem

