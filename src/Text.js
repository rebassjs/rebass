
import React from 'react'
import theme from './theme'

/**
 * Component for displaying text in UI
 */

const Text = ({ style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { fontSizes } = config

  return (
    <p
      {...props}
      className='Text'
      style={{
        fontSize: fontSizes[4],
        margin: 0,
        ...style
      }} />
  )
}

Text.contextTypes = {
  rebass: React.PropTypes.object
}

export default Text

