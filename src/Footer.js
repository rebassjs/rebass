
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Minimal footer component with top border
 */

const Footer = ({ ...props }, { rebass }) => {
  const { scale, fontSizes, borderColor } = { ...config, ...rebass }

  return (
    <Base
      {...props}
      tagName='footer'
      className='Footer'
      baseStyle={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: scale[3],
        paddingTop: scale[3],
        paddingBottom: scale[3],
        fontSize: fontSizes[5],
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: borderColor
      }} />
  )
}

Footer.contextTypes = {
  rebass: React.PropTypes.object
}

export default Footer

