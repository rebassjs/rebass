
import React from 'react'
import theme from './theme'

/**
 * Div with max-width and margin auto for centering content
 */

const Container = ({ style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const containerStyle = rebass ? rebass.Container : {}
  const { scale } = config

  return (
    <div
      {...props}
      className='Container'
      style={{
        maxWidth: 1024,
        paddingLeft: scale[2],
        paddingRight: scale[2],
        margin: 'auto',
        ...containerStyle,
        ...style
      }} />
  )
}

Container.contextTypes = {
  rebass: React.PropTypes.object
}

export default Container
