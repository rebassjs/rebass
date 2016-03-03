
import React from 'react'
import Base from './Base'
import theme from './theme'

/**
 * Menu component for navigation links and actions
 */

const Menu = ({ ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { scale, colors, borderColor, borderRadius } = config

  return (
    <Base
      {...props}
      className='Menu'
      baseStyle={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: 128,
        marginBottom: scale[2],
        overflow: 'hidden',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor,
        borderRadius
      }} />
  )
}

Menu.defaultProps = {
  backgroundColor: 'white',
  rounded: true
}

Menu.contextTypes = {
  rebass: React.PropTypes.object
}

export default Menu

