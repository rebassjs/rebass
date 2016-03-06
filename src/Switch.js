
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Binary toggle switch component
 */

const Switch = ({
  checked,
  ...props
}, { rebass }) => {
  const { scale, colors, borderColor } = { ...config, ...rebass }

  const color = checked ? colors.success : borderColor
  const transform = checked ? `translateX(${scale[3] * 0.5}px)` : 'translateX(0)'

  const sx = {
    root: {
      display: 'inline-flex',
      width: scale[3] * 1.5,
      height: scale[3],
      color,
      backgroundColor: checked ? 'currentcolor' : null,
      borderRadius: 99999,
      boxShadow: 'inset 0 0 0 2px',
      cursor: 'pointer'
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
      backgroundColor: colors.white
    }
  }

  return (
    <Base
      {...props}
      className='Switch'
      role='checkbox'
      aria-checked={checked}
      baseStyle={sx.root}>
      <div style={sx.dot} />
    </Base>
  )
}

Switch.propTypes = {
  /** Sets the Switch to an active style */
  checked: React.PropTypes.bool
}

Switch.contextTypes = {
  rebass: React.PropTypes.object
}

export default Switch

