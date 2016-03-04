
import React from 'react'
import Base from './Base'
import theme from './theme'

/**
 * A circular image for displaying user avatars
 */

const Avatar = ({
  size,
  children,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { colors } = config

  return (
    <Base
      {...props}
      tagName='img'
      className='Avatar'
      width={size}
      height={size}
      baseStyle={{
        maxWidth: 'none',
        width: size,
        height: size,
        backgroundColor: colors.gray
      }}
    />
  )
}

Avatar.propTypes = {
  /** Width and height of image in pixels */
  size: React.PropTypes.number
}

Avatar.defaultProps = {
  size: 48,
  circle: true
}

Avatar.contextTypes = {
  rebass: React.PropTypes.object
}

export default Avatar

