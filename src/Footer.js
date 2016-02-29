
import React from 'react'
import theme from './theme'

/**
 * Minimal footer component with top border
 */

const Footer = ({ style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { scale, fontSizes, borderColor } = config
  const customStyle = rebass ? rebass.Footer : {}

  return (
    <footer
      {...props}
      className='Footer'
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        fontSize: fontSizes[5],
        marginTop: scale[3],
        paddingTop: scale[3],
        paddingBottom: scale[3],
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: borderColor,
        ...customStyle,
        ...style
      }} />
  )
}

Footer.contextTypes = {
  rebass: React.PropTypes.object
}

export default Footer

