
import React from 'react'
import theme from './theme'

/**
 * Menu component for navigation links and actions
 */

const Menu = ({ style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const menuConfig = rebass ? rebass.Menu : {}
  const { scale, colors, borderColor, borderRadius } = config

  return (
    <div
      {...props}
      className='Menu'
      style={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: 128,
        marginBottom: scale[2],
        overflow: 'hidden',
        borderRadius: 2,
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: colors.white,
        borderColor,
        borderRadius,
        ...menuConfig,
        ...style
      }} />
  )
}

Menu.contextTypes = {
  rebass: React.PropTypes.object
}

export default Menu

