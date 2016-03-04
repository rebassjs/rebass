
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Component for displaying text in UI
 */

const Text = ({ small, ...props }, { rebass }) => {
  const { fontSizes } = { ...config, ...rebass }

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

