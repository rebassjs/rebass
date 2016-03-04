
import React from 'react'
import Base from './Base'
import theme from './theme'

/**
 * Component for displaying text in UI
 */

const Text = ({ small, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { fontSizes } = config

  return (
    <Base
      {...props}
      tagName='p'
      className='Text'
      baseStyle={{
        fontSize: small ? fontSizes[6] : fontSizes[4],
        margin: 0
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

