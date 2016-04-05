
import React from 'react'
import Base from './Base'
import mergeClassName from './util/mergeClassName'

/**
 * Position relative container for positioning DropdownMenu component
 */

const Dropdown = ({ ...props }) => (
  <Base
    {...props}
    className={mergeClassName(props, 'Dropdown')}
    baseStyle={{
      position: 'relative'
    }} />
)

export default Dropdown

