
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * A button with an × for close and dismiss actions
 */

const Close = ({
  baseRef,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const cx = classnames('Close', className)

  const sx = {
    fontSize: '1.5em',
    lineHeight: 1,
    fontWeight: 'bold',
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    color: 'inherit',
    backgroundColor: 'transparent',
    border: 0,
    WebkitAppearance: 'none',
    ...style
  }

  return (
    <button
      {...props}
      ref={baseRef}
      title='Close'
      className={cx}
      style={sx}
      children='×' />
  )
}

Close.propTypes = {
  /** Adds a ref to the button element */
  baseRef: React.PropTypes.func
}

Close._name = 'Close'

export default withRebass(Close)

