
import React from 'react'

/**
 * Link for use in navigation. Inherits color
 */

const NavItem = ({ Component, style, ...props }) => (
  <Component
    {...props}
    className='NavItem'
    style={{
      ...style,
      fontWeight: 'bold',
      textDecoration: 'none',
      display: 'inline-block',
      padding: 8,
      color: 'inherit',
      cursor: 'pointer'
    }} />
)

NavItem.propTypes = {
  /** Root component - useful for use with react-router's Link component */
  Component: React.PropTypes.node
}

NavItem.defaultProps = {
  Component: 'a'
}

export default NavItem

