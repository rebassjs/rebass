
import React from 'react'
import theme from './theme'

/**
 * Minimal footer component with top border
 */

const Footer = ({ style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { scale, borderColor } = config

  return (
    <footer
      {...props}
      className='Footer'
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: scale[3],
        paddingTop: scale[3],
        paddingBottom: scale[3],
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: borderColor,
        ...style
      }} />
  )
}

Footer.contextTypes = {
  rebass: React.PropTypes.object
}

export default Footer

