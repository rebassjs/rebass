
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Toolbar component that vertically centers children with display flex
 */

const Toolbar = ({ ...props }, { rebass }) => {
  const { scale } = { ...config, ...rebass }

  return (
    <Base
      {...props}
      className='Toolbar'
      baseStyle={{
        display: 'flex',
        alignItems: 'center',
        minHeight: 48,
        paddingLeft: scale[1],
        paddingRight: scale[1]
      }} />
  )
}

Toolbar.defaultProps = {
  theme: 'primary',
  inverted: true
}

Toolbar.contextTypes = {
  rebass: React.PropTypes.object
}

export default Toolbar

