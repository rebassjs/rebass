
import React from 'react'
import withRebass from './withRebass'
import classnames from 'classnames'

/**
 * A circular image for displaying user avatars
 */

const Avatar = ({
  size,
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}, { rebass }) => {
  const { colors } = theme

  const cx = classnames('Avatar', className)

  const sx = {
    display: 'inline-block',
    maxWidth: 'none',
    width: size,
    height: size,
    backgroundColor: colors.gray,
    borderRadius: 99999,
    ...style
  }

  return (
    <img
      {...props}
      className={cx}
      width={size}
      height={size}
      style={sx}
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

Avatar._name = 'Avatar'

export default withRebass(Avatar)

