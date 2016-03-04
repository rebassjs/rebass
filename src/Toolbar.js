
import React from 'react'
import Base from './Base'
import theme from './theme'

/**
 * Toolbar component that vertically centers children with display flex
 */

const Toolbar = ({ ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { scale } = config

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
  color: 'white',
  backgroundColor: 'primary'
}

Toolbar.contextTypes = {
  rebass: React.PropTypes.object
}

export default Toolbar

