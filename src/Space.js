
import React from 'react'
import theme from './theme'

/**
 * Inline-block element for adding space between elements
 */

const Space = ({ x, auto, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const spaceConfig = { ...theme.Space, ...(rebass ? rebass.Space : {}) }
  const { scale } = config

  return (
    <div
      className='Space'
      style={{
        display: 'inline-block',
        flex: auto ? '1 1 auto' : null,
        width: scale[x],
        ...spaceConfig,
        ...style
      }} />
  )
}

Space.propTypes = {
  /** Width of space based on the spacing scale */
  x: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
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

