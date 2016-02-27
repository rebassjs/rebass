
import React from 'react'
import theme from './theme'

/**
 * Toolbar component that vertically centers children with display flex
 */

const Toolbar = ({ style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Toolbar : {}
  const { scale, colors } = config

  return (
    <div
      {...props}
      className='Toolbar'
      style={{
        display: 'flex',
        alignItems: 'center',
        minHeight: 48,
        paddingLeft: scale[1],
        paddingRight: scale[1],
        marginBottom: scale[2],
        color: colors.white,
        backgroundColor: colors.blue,
        ...customStyle,
        ...style
      }} />
  )
}

Toolbar.contextTypes = {
  rebass: React.PropTypes.object
}

export default Toolbar
