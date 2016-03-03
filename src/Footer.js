
import React from 'react'
import Base from './Base'
import theme from './theme'

/**
 * Minimal footer component with top border
 */

const Footer = ({ ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { fontSizes, borderColor } = config

  return (
    <Base
      {...props}
      tagName='footer'
      className='Footer'
      baseStyle={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        fontSize: fontSizes[5],
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: borderColor
      }} />
  )
}

Footer.defaultProps = {
  mt: 3,
  py: 3,
}

Footer.contextTypes = {
  rebass: React.PropTypes.object
}

export default Footer

