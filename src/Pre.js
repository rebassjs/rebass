
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Pre element for displaying code examples
 */

const Pre = ({
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { monospace, scale, fontSizes, borderColor } = theme

  const cx = classnames('Pre', className)

  const sx = {
    fontFamily: monospace,
    fontSize: fontSizes[5],
    paddingLeft: scale[2],
    marginBottom: scale[2],
    borderLeft: `4px solid ${borderColor}`,
    overflowX: 'scroll',
    ...style
  }

  return (
    <pre
      {...props}
      className={cx}
      style={sx} />
  )
}

Pre._name = 'Pre'

export default withRebass(Pre)

