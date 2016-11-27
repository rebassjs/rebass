
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Styled hr element
 */

const Divider = ({
  width,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale, borderColor } = theme

  const cx = classnames('Divider', className)

  const sx = {
    width,
    marginTop: scale[2],
    marginBottom: scale[2],
    border: 0,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: borderColor,
    ...style
  }

  return (
    <hr
      {...props}
      className={cx}
      style={sx} />
  )
}

Divider.propTypes = {
  /** Sets a fixed width for stylistic options */
  width: React.PropTypes.number
}

Divider._name = 'Divider'

export default withRebass(Divider)

