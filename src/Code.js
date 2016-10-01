
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Code element for inline code snippets
 */

const Code = ({
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { monospace, fontSizes } = theme

  const cx = classnames('Code', className)

  const sx = {
    fontFamily: monospace,
    fontSize: fontSizes[5],
    ...style
  }

  return (
    <code
      {...props}
      className={cx}
      style={sx}
    />
  )
}

Code._name = 'Code'

export default withRebass(Code)

