
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Inline-block element for adding space between elements
 */

const Space = ({ x, auto, children, ...props }, { rebass }) => {
  const { scale } = { ...config, ...rebass }

  return (
    <Base
      {...props}
      className='Space'
      baseStyle={{
        display: 'inline-block',
        flex: auto ? '1 1 auto' : null,
        width: scale[x]
      }} />
  )
}

Space.propTypes = {
  /** Width of space based on the spacing scale */
  x: React.PropTypes.oneOf([1, 2, 3, 4]),
  /** Sets flex: 1 1 auto */
  auto: React.PropTypes.bool
}

Space.defaultProps = {
  x: 1
}

Space.contextTypes = {
  rebass: React.PropTypes.object
}

export default Space

