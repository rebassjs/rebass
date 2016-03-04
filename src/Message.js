
import React from 'react'
import Base from './Base'
import theme from './theme'

/** Component for displaying flash and error messages */

const Message = ({ ...props }, { rebass }) => {
  const config = { ...theme, ...rebass}
  const { bold, scale } = config

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
  /** Sets color based on theme */
  theme: React.PropTypes.oneOf([
    'primary',
    'secondary',
    'default',
    'info',
    'success',
    'warning',
    'error',
  ])
}

Message.defaultProps = {
  theme: 'default',
  color: 'white',
  rounded: true
}

Message.contextTypes = {
  rebass: React.PropTypes.object
}

export default Message

