
import React from 'react'
import theme from './theme'

/**
 * Toolbar component that vertically centers children with display flex
 */

const Toolbar = ({ style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const toolbarStyle = {
    ...theme.Toolbar,
    ...(rebass ? rebass.Toolbar : {}),
    ...style
  }

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
        ...toolbarStyle
      }} />
  )
}

Toolbar.contextTypes = {
  rebass: React.PropTypes.object
}

export default Toolbar
