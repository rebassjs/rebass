
import React from 'react'
import Base from './Base'
import theme from './theme'

/**
 * Section element with vertical padding
 */

const Section = ({ ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { scale } = config

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

