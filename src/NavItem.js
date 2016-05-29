
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Link for use in navigation. Inherits color
 */

const NavItem = ({
  small,
  ...props
}, { rebass }) => {
  const { fontSizes, scale, bold } = { ...config, ...rebass }

  return (
    <Base
      {...props}
      className='NavItem'
      baseStyle={{
        fontSize: small ? fontSizes[6] : fontSizes[5],
        fontWeight: bold,
        lineHeight: '1rem',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingTop: small ? scale[1] / 2 : scale[1],
        paddingBottom: small ? scale[1] / 2 : scale[1],
        paddingLeft: scale[1],
        paddingRight: scale[1],
        color: 'inherit',
        cursor: 'pointer'
      }} />
  )
}

NavItem.propTypes = {
  /** Sets a smaller font size for compact UI */
  small: React.PropTypes.bool,
  /** Root component - useful for use with react-router's Link component */
  is: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
    React.PropTypes.func
  ])
}

NavItem.defaultProps = {
  is: 'a'
}

NavItem.contextTypes = {
  rebass: React.PropTypes.object
}

export default NavItem

