
import React from 'react'
import theme from './theme'

/**
 * Styled hr element
 */

const Divider = ({ compact, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { scale, borderColor } = config

  return (
    <hr
      className='Divider'
      style={{
        marginTop: compact ? 0 : scale[2],
        marginBottom: compact ? 0 : scale[2],
        border: 0,
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: borderColor,
        ...style
      }} />
  )
}

Divider.propTypes = {
  /** Removes margin top and bottom */
  compact: React.PropTypes.bool
}

Divider.contextTypes = {
  rebass: React.PropTypes.object
}

export default Divider

