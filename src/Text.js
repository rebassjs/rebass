
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Component for displaying text in UI
 */

const Text = ({
  small,
  center,
  bold,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { fontSizes, bold: b } = theme

  const cx = classnames('Text', className)

  const sx = {
    fontSize: small ? fontSizes[6] : fontSizes[4],
    fontWeight: bold ? b : null,
    textAlign: center ? 'center' : null,
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
  small: React.PropTypes.bool,
  /** Sets bold font weight */
  bold: React.PropTypes.bool,
  /** Centers text alignment */
  center: React.PropTypes.bool
}

export default withRebass(Text)

