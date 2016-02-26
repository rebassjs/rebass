
import React from 'react'
import theme from './theme'

/** Component for displaying flash and error messages */

const Message = ({
  type,
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass}
  const messageConfig = { ...theme.Message, ...(rebass ? rebass.Message : {}) }

  const { borderRadius } = config
  const backgroundColor = config.colorTypes[type]

  return (
    <div
      {...props}
      className='Message'
      style={{
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        padding: config.scale[2],
        backgroundColor,
        borderRadius,
        ...messageConfig,
        ...style
      }} />
  )
}

Message.propTypes = {
  /** Sets color based on type of message */
  type: React.PropTypes.oneOf([
    'default',
    'info',
    'success',
    'warning',
    'error',
  ])
}

Message.defaultProps = {
  type: 'default'
}

Message.contextTypes = {
  rebass: React.PropTypes.object
}

export default Message

