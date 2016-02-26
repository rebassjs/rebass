
import React from 'react'
import theme from './theme'

/**
 * Styled hr element
 */

const Divider = ({ style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { borderColor } = config

  return (
    <hr
      className='Divider'
      style={{
        border: 0,
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: borderColor,
        ...style
      }} />
  )
}

Divider.contextTypes = {
  rebass: React.PropTypes.object
}

export default Divider

