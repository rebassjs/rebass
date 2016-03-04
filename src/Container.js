
import React from 'react'
import Base from './Base'

/**
 * Div with max-width and margin auto for centering content
 */

const Container = ({ ...props }, { rebass }) => {

  return (
    <Base
      {...props}
      className='Container'
      baseStyle={{
        maxWidth: 1024,
        margin: 'auto'
      }} />
  )
}

Container.defaultProps = {
  px: 2
}

Container.contextTypes = {
  rebass: React.PropTypes.object
}

export default Container
