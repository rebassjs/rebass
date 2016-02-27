
import React from 'react'
import theme from './theme'

/**
 * Link for use in navigation. Inherits color
 */

const NavItem = ({ small, Component, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const navItemStyle = rebass ? rebass.NavItem : {}
  const { fontSizes, scale, bold } = config

  return (
    <Component
      {...props}
      className='NavItem'
      style={{
        fontSize: small ? fontSizes[6] : fontSizes[5],
        fontWeight: bold,
        lineHeight: '1rem',
        textDecoration: 'none',
        display: 'inline-block',
        padding: small ? `${scale[1] / 2}px ${scale[1]}px` : scale[1],
        color: 'inherit',
        cursor: 'pointer',
        ...navItemStyle,
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

