
import React from 'react'
import Base from './Base'
import config from './config'
import mergeClassName from './util/mergeClassName'

/**
 * Div with max-width and margin auto for centering content
 */

const Container = ({ ...props }, { rebass }) => {
  const { scale } = { ...config, ...rebass }

  return (
    <Base
      {...props}
      className={mergeClassName(props, 'Container')}
      baseStyle={{
        maxWidth: 1024,
        paddingLeft: scale[2],
        paddingRight: scale[2],
        margin: 'auto'
      }} />
  )
}

Container.contextTypes = {
  rebass: React.PropTypes.object
}

export default Container
