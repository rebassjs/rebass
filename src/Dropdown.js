
import React from 'react'
import Base from './Base'

/**
 * Position relative container for positioning DropdownMenu component
 */

const Dropdown = ({ ...props }) => (
  <Base
    {...props}
    className='Dropdown'
    baseStyle={{
      position: 'relative'
    }} />
)

export default Dropdown

