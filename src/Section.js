
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Section element with vertical padding
 */

const Section = ({
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale } = theme

  const cx = classnames('Section', className)

  const sx = {
    paddingTop: scale[4],
    paddingBottom: scale[4],
    ...style
  }

  return (
    <section
      {...props}
      className={cx}
      style={sx} />
  )
}

Section._name = 'Section'

export default withRebass(Section)

