
import React from 'react'

/**
 * Position relative container for positioning DropdownMenu component
 */

const Dropdown = ({ style, ...props }) => (
  <div
    {...props}
    className='Dropdown'
    style={{
      position: 'relative',
      ...style
    }} />
)

export default Dropdown

