
import React from 'react'
import theme from './theme'

/** Component for displaying flash and error messages */

const Message = ({
  type,
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass}
  const messageStyle = rebass ? rebass.Message : {}
  const { bold, scale, borderRadius, colors } = config
  const backgroundColor = config.colorTypes[type]

  return (
    <div
      {...props}
      className='Message'
      style={{
        fontWeight: bold,
        display: 'flex',
        alignItems: 'center',
        padding: scale[2],
        marginBottom: scale[2],
        color: colors.white,
        backgroundColor,
        borderRadius,
        ...messageStyle,
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

