
import React from 'react'
import theme from './theme'

/**
 * Div with max-width and margin auto for centering content
 */

const Container = ({ style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const containerConfig = { ...theme.Container, ...(rebass ? rebass.Container : {}) }
  const { maxWidth, padding } = containerConfig

  return (
    <div
      {...props}
      className='Container'
      style={{
        maxWidth,
        paddingLeft: padding,
        paddingRight: padding,
        margin: 'auto',
        ...style
      }} />
  )
}

Container.contextTypes = {
  rebass: React.PropTypes.object
}

export default Container
