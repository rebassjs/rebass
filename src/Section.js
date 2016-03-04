
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Section element with vertical padding
 */

const Section = ({ ...props }, { rebass }) => {
  const { scale } = { ...config, ...rebass }

  return (
    <Base
      {...props}
      tagName='section'
      className='Section'
      baseStyle={{
        paddingTop: scale[4],
        paddingBottom: scale[4]
      }} />
  )
}

Section.contextTypes = {
  rebass: React.PropTypes.object
}

export default Section

