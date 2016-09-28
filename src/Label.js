
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Label element for form controls
 */

const Label = ({
  hide,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { fontSizes, bold } = theme

  const cx = classnames('Label', className)

  const hideStyle = hide ? {
    position: 'absolute',
    height: 1,
    width: 1,
    overflow: 'hidden',
    clip: 'rect(1px, 1px, 1px, 1px)'
  } : {}

  const sx = {
    fontSize: fontSizes[5],
    fontWeight: bold,
    lineHeight: 1,
    ...hideStyle,
    ...style
  }

  return (
    <label
      {...props}
      className={cx}
      style={sx} />
  )
}

Label.propTypes = {
  /** Accessibly hide label for use in high density UI.
   *  This can still cause accessibility issues. Use this with caution.
   */
  hide: React.PropTypes.bool
}

Label._name = 'Label'

export default withRebass(Label)

