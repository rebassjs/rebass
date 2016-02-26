
import React from 'react'
import theme from './theme'

/**
 * Component for displaying text in UI
 */

const Text = ({ small, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { fontSizes } = config

  return (
    <p
      {...props}
      className='Text'
      style={{
        fontSize: small ? fontSizes[6] : fontSizes[4],
        margin: 0,
        ...style
      }} />
  )
}

Text.propTypes = {
  /** Sets a smaller font size */
  small: React.PropTypes.bool
}

Text.contextTypes = {
  rebass: React.PropTypes.object
}

export default Text

