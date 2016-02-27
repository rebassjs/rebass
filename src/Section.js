
import React from 'react'
import theme from './theme'

/**
 * Section element with vertical padding
 */

const Section = ({ style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Section : {}
  const { scale } = config

  return (
    <section
      {...props}
      className='Section'
      style={{
        paddingTop: scale[4],
        paddingBottom: scale[4],
        ...customStyle,
        ...style
      }} />
  )
}

Section.contextTypes = {
  rebass: React.PropTypes.object
}

export default Section

