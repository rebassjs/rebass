
import PropTypes from 'prop-types'
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
  small: PropTypes.bool,
  /** Sets bold font weight */
  bold: PropTypes.bool
}

Text.contextTypes = {
  rebass: PropTypes.object
}

export default Text

