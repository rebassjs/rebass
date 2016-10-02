
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Component for displaying text in UI
 */

const Text = ({
  size,
  small,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { fontSizes } = theme

  const cx = classnames('Text', className)

  size = size || (small ? 6 : 4)
  const sx = {
    fontSize: fontSizes[size],
    margin: 0,
    ...style
  }

  return (
    <p
      {...props}
      className={cx}
      style={sx} />
  )
}

Text.propTypes = {
  /** Sets a smaller font size */
  small: React.PropTypes.bool
}

Text._name = 'Text'

export default withRebass(Text)

