
import React from 'react'
import {
  Arrow,
  Dropdown,
  DropdownMenu,
  Fixed,
  NavItem,
  Space,
  Toolbar
} from '../../src'

const Navbar = ({ toggleDrawer }) => (
  <Fixed top left right zIndex={1}>
    <Toolbar>
      <NavItem href='http://jxnblk.com/rebass' children='Rebass' />
      <Space auto />
      <Dropdown>
        <NavItem>
          Config
          <Arrow />
        </NavItem>
        <DropdownMenu
          right
          color='primary'
          open>
          <NavItem children='Basic' />
          <NavItem children='Mono' />
          <NavItem children='Dark' />
          <NavItem children='Dense' />
          <NavItem children='Fancy' />
        </DropdownMenu>
      </Dropdown>
      <NavItem
        onClick={toggleDrawer}
        children='Edit' />
    </Toolbar>
  </Fixed>
)

export default Navbar

