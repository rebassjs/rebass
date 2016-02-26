
import React from 'react'
import theme from './theme'

/**
 * Menu component for navigation links and actions
 */

const Menu = ({ backgroundColor, borderColor, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const menuConfig = { ...theme.Menu, ...(rebass ? rebass.Menu : {}) }

  return (
    <div
      {...props}
      className='Menu'
      style={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: 128,
        borderRadius: 2,
        borderWidth: 1,
        borderStyle: 'solid',
        ...menuConfig,
        ...style
      }} />
  )
}

export default Menu

