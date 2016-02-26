
import React from 'react'
import theme from './theme'

/**
 * Section element with vertical padding
 */

const Section = ({ style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { scale } = config

  return (
    <section
      {...props}
      className='Section'
      style={{
        paddingTop: scale[4],
        paddingBottom: scale[4],
        ...style
      }} />
  )
}

Section.contextTypes = {
  rebass: React.PropTypes.object
}

export default Section

