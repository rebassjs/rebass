
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

Container.propTypes = {
  /** Applies padding left and right based on the theme spacing scale */
  px: React.PropTypes.oneOf([0, 1, 2, 3, 4])
}

Container.defaultProps = {
  px: 2
}

Container.contextTypes = {
  rebass: React.PropTypes.object
}

export default Container
