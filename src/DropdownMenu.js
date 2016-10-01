
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import Menu from './Menu'

/**
 * Absolutely positioned Menu component for use within Dropdown component
 */

const DropdownMenu = ({
  open,
  right,
  top,
  children,
  onDismiss,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { zIndex } = theme

  const cx = classnames('DropdownMenu', className)

  const sx = {
    root: {
      display: open ? null : 'none',
      position: 'absolute',
      left: right ? 'auto' : 0,
      right: right ? 0 : 'auto',
      top: top ? 'auto' : '100%',
      bottom: top ? '100%' : 'auto',
      zIndex: 4,
      ...style
    },
    overlay: {
      position: 'fixed',
      display: open ? null : 'none',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...subComponentStyles.overlay
    },
    content: {
      position: 'relative',
      zIndex: zIndex[1],
      ...subComponentStyles.content
    },
    Menu: {
      ...subComponentStyles.Menu
    }
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx.root}>
      <div
        style={sx.overlay}
        onClick={onDismiss} />
      <div style={sx.content}>
        <Menu {...props}
          style={sx.Menu}
          children={children} />
      </div>
    </div>
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

DropdownMenu._name = 'DropdownMenu'

export default withRebass(DropdownMenu)

