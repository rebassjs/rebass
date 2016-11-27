
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Image for use within the Card component
 */

const CardImage = ({
  src,
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale } = theme

  const cx = classnames('CardImage', className)

  const sx = {
    display: 'block',
    width: `calc(100% + ${2 * scale[1]}px)`,
    maxWidth: 'none',
    height: 'auto',
    margin: -scale[1],
    marginBottom: scale[1],
    ...style
  }

  return (
    <img
      {...props}
      src={src}
      className={cx}
      style={sx} />
  )
}

CardImage.propTypes = {
  /** Image source */
  src: React.PropTypes.string.isRequired
}

CardImage._name = 'CardImage'

export default withRebass(CardImage)

