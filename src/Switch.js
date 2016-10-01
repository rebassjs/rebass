
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Binary toggle switch component
 */

const Switch = ({
  checked,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale, colors, borderColor } = theme

  const color = checked ? colors.success : borderColor
  const transform = checked ? `translateX(${scale[3] * 0.5}px)` : 'translateX(0)'

  const cx = classnames('Switch', className)

  const sx = {
    root: {
      display: 'inline-flex',
      width: scale[3] * 1.5,
      height: scale[3],
      color,
      backgroundColor: checked ? 'currentcolor' : null,
      borderRadius: 99999,
      boxShadow: 'inset 0 0 0 2px',
      cursor: 'pointer',
      ...style
    },
    dot: {
      width: scale[3],
      height: scale[3],
      transitionProperty: 'transform, color',
      transitionDuration: '.1s',
      transitionTimingFunction: 'ease-out',
      transform,
      boxShadow: 'inset 0 0 0 2px',
      borderRadius: 99999,
      color,
      backgroundColor: colors.white,
      ...subComponentStyles.dot
    }
  }

  return (
    <div
      {...props}
      className={cx}
      role='checkbox'
      aria-checked={checked}
      style={sx.root}>
      <div style={sx.dot} />
    </div>
  )
}

Switch.propTypes = {
  /** Sets the Switch to an active style */
  checked: React.PropTypes.bool
}

Switch._name = 'Switch'

export default withRebass(Switch)

