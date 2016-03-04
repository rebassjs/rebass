
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Pre element for displaying code examples
 */

const Pre = ({ ...props }, { rebass }) => {
  const { monospace, scale, borderColor } = { ...config, ...rebass }

  return (
    <Base
      {...props}
      tagName='pre'
      className='Pre'
      baseStyle={{
        fontFamily: monospace,
        paddingLeft: scale[2],
        marginBottom: scale[2],
        borderLeft: `4px solid ${borderColor}`,
        overflowX: 'scroll'
      }} />
  )
}

Pre.contextTypes = {
  rebass: React.PropTypes.object
}

export default Pre

