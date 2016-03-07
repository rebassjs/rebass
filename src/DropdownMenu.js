
import React from 'react'
import Base from './Base'
import Menu from './Menu'
import config from './config'

/**
 * Absolutely positioned Menu component for use within Dropdown component
 */

const DropdownMenu = ({
  open,
  right,
  top,
  children,
  onDismiss,
  ...props
}, { rebass }) => {
  const { zIndex } = { ...config, ...rebass }

  const sx = {
    root: {
      display: open ? null : 'none',
      position: 'absolute',
      left: right ? 'auto' : 0,
      right: right ? 0 : 'auto',
      top: top ? 'auto' : '100%',
      bottom: top ? '100%' : 'auto',
      zIndex: 4
    },
    overlay: {
      position: 'fixed',
      display: open ? null : 'none',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    content: {
      position: 'relative',
      zIndex: zIndex[1]
    }
  }

  return (
    <Base
      {...props}
      className='DropdownMenu'
      baseStyle={sx.root}>
      <div style={sx.overlay}
        onClick={onDismiss} />
      <div style={sx.content}>
        <Menu {...props}
          children={children} />
      </div>
    </Base>
  )
}

DropdownMenu.propTypes = {
  /** Toggles visibility of DropdownMenu */
  open: React.PropTypes.bool,
  /** Anchors menu to the right */
  right: React.PropTypes.bool,
  /** Anchors menu to the top */
  top: React.PropTypes.bool,
  /** Click event callback for the background overlay */
  onDismiss: React.PropTypes.func
}

DropdownMenu.defaultProps = {
  open: false,
  onDismiss: function () {}
}

DropdownMenu.contextTypes = {
  rebass: React.PropTypes.object
}

export default DropdownMenu

