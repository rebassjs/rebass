
import PropTypes from 'prop-types'
import React from 'react'
import Base from './Base'
import config from './config'

/** Component for displaying flash and error messages */

const Message = (props, { rebass }) => {
  const { bold, scale } = { ...config, ...rebass }

  return (
    <Base
      {...props}
      className='Message'
      baseStyle={{
        fontWeight: bold,
        display: 'flex',
        alignItems: 'center',
        padding: scale[2],
        marginBottom: scale[2]
      }} />
  )
}

Message.propTypes = {
  /** Sets color from config */
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
    'default',
    'info',
    'success',
    'warning',
    'error'
  ])
}

Message.defaultProps = {
  theme: 'default',
  inverted: true,
  rounded: true
}

Message.contextTypes = {
  rebass: PropTypes.object
}

export default Message

