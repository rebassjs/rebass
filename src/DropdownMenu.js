
import React from 'react'
import Base from './Base'
import Menu from './Menu'

/**
 * Absolutely positioned Menu component for use within Dropdown component
 */

const DropdownMenu = ({
  open,
  right,
  top,
  ...props
}) => {
  const { children, ...baseProps } = props

  return (
    <Base
      {...baseProps}
      className='DropdownMenu'
      baseStyle={{
        display: open ? null : 'none',
        position: 'absolute',
        left: right ? 'auto' : 0,
        right: right ? 0 : 'auto',
        top: top ? 'auto' : '100%',
        bottom: top ? '100%' : 'auto',
        zIndex: 4
      }}>
      <Menu {...props} />
    </Base>
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

