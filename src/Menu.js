
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Menu component for navigation links and actions
 */

const Menu = ({ ...props }, { rebass }) => {
  const { scale, colors, borderColor, borderRadius } = { ...config, ...rebass }

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
        borderRadius,
        color: colors.black,
        backgroundColor: colors.white
      }} />
  )
}

Menu.defaultProps = {
  rounded: true
}

Menu.contextTypes = {
  rebass: React.PropTypes.object
}

export default Menu

