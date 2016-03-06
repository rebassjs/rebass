
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Component for displaying text in UI
 */

const Text = ({
  small,
  bold,
  ...props
}, { rebass }) => {
  const { fontSizes, bold: b } = { ...config, ...rebass }

  return (
    <Base
      {...props}
      tagName='p'
      className='Text'
      baseStyle={{
        fontSize: small ? fontSizes[6] : fontSizes[4],
        fontWeight: bold ? b : null,
        margin: 0
      }} />
  )
}

Text.propTypes = {
  /** Sets a smaller font size */
  small: React.PropTypes.bool,
  /** Sets bold font weight */
  bold: React.PropTypes.bool
}

Text.contextTypes = {
  rebass: React.PropTypes.object
}

export default Text

