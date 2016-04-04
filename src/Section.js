
import React from 'react'
import Base from './Base'
import config from './config'
import classNames from 'classnames/dedupe'
import mergeClassName from './util/mergeClassName'

/**
 * Section element with vertical padding
 */

const Section = ({ ...props }, { rebass }) => {
  const { scale } = { ...config, ...rebass }

  return (
    <Base
      {...props}
      tagName='section'
      className={mergeClassName(props, 'Section')}
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

