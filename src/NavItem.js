
import React from 'react'
import theme from './theme'

/**
 * Link for use in navigation. Inherits color
 */

const NavItem = ({ small, Component, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const navItemConfig = { ...theme.NavItem, ...(rebass.NavItem : {}) }
  const { fontSizes } = config

  return (
    <Component
      {...props}
      className='NavItem'
      style={{
        fontSize: small ? fontSizes[5] : fontSizes[4],
        textDecoration: 'none',
        display: 'inline-block',
        padding: 8,
        color: 'inherit',
        cursor: 'pointer',
        ...navItemConfig,
        ...style
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

