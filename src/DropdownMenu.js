
import React from 'react'
import Menu from './Menu'

/**
 * Absolutely positioned Menu component for use within Dropdown component
 */

const DropdownMenu = ({ open, right, top, style, ...props }) => {
  return (
    <div
      className='DropdownMenu'
      style={{
        display: open ? null : 'none',
        position: 'absolute',
        left: right ? 'auto' : 0,
        right: right ? 0 : 'auto',
        top: top ? 'auto' : '100%',
        bottom: top ? '100%' : 'auto',
        zIndex: 4,
        ...style
      }}>
      <Menu {...props} />
    </div>
  )
}

DropdownMenu.propTypes = {
  /** Toggles visibility of DropdownMenu */
  open: React.PropTypes.bool,
  /** Anchors menu to the right */
  right: React.PropTypes.bool,
  /** Anchors menu to the top */
  top: React.PropTypes.bool
}

DropdownMenu.defaultProps = {
  open: false
}

export default DropdownMenu

