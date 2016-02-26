
import React from 'react'
import theme from './theme'

/**
 * Toolbar component that vertically centers children with display flex
 */

const Toolbar = ({ style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Toolbar : {}
  const { colors } = config

  return (
    <div
      {...props}
      className='Toolbar'
      style={{
        display: 'flex',
        alignItems: 'center',
        minHeight: 48,
        paddingTop: 4,
        paddingBottom: 4,
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
