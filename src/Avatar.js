
import React from 'react'
import theme from './theme'

/**
 * A circular image for displaying user avatars
 */

const Avatar = ({
  size,
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Avatar : {}
  const { colors } = config

  return (
    <img
      {...props}
      className='Avatar'
      width={size}
      height={size}
      style={{
        maxWidth: 'none',
        width: size,
        height: size,
        borderRadius: 9999,
        backgroundColor: colors.gray,
        ...customStyle,
        ...style
      }}
    />
  )
}

Avatar.propTypes = {
  /** Width and height of image in pixels */
  size: React.PropTypes.number
}

Avatar.defaultProps = {
  size: 48
}

Avatar.contextTypes = {
  rebass: React.PropTypes.object
}

export default Avatar

