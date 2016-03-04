
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Toolbar component that vertically centers children with display flex
 */

const Toolbar = ({ ...props }, { rebass }) => {
  const { scale, colors } = { ...config, ...rebass }

  return (
    <Base
      {...props}
      className='Toolbar'
      baseStyle={{
        display: 'flex',
        alignItems: 'center',
        minHeight: 48,
        paddingLeft: scale[1],
        paddingRight: scale[1],
        color: colors.white,
        backgroundColor: colors.primary
      }} />
  )
}

Toolbar.contextTypes = {
  rebass: React.PropTypes.object
}

export default Toolbar

