
import React from 'react'
import theme from './theme'

/** Component for displaying flash and error messages */

const Message = ({
  type,
  color,
  backgroundColor,
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass}
  const messageConfig = { ...theme.Message, ...rebass.Message }

  const bg = messageConfig[type]

  return (
    <div
      {...props}
      className='Message'
      style={{
        ...style,
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        padding: config.scale[2],
        color: color || messageConfig.color,
        backgroundColor: backgroundColor || bg,
        borderRadius: config.borderRadius
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
  ]),
  /** Text color */
  color: React.PropTypes.string,
  /** Background color - overrides the message type color */
  backgroundColor: React.PropTypes.string,
}

Message.defaultProps = {
  type: 'default'
}

Message.contextTypes = {
  rebass: React.PropTypes.object
}

export default Message

