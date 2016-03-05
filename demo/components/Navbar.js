
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

const Navbar = ({
  config,
  configurations,
  dropdownOpen,
  switchConfig,
  toggle
}) => (
  <Fixed top left right zIndex={1}>
    <Toolbar>
      <NavItem href='http://jxnblk.com/rebass' children='Rebass' />
      <Space auto />
      <Dropdown>
        <NavItem onClick={toggle('dropdownOpen')}>
          Config
          <Arrow />
        </NavItem>
        <DropdownMenu
          right
          color='primary'
          onDismiss={toggle('dropdownOpen')}
          open={dropdownOpen}>
          {Object.keys(configurations).map((key, i) => {
            const { name } = configurations[key]
            return (
              <NavItem
                key={i}
                onClick={switchConfig(key)}
                active={name === config}
                children={name} />
            )
          })}
        </DropdownMenu>
      </Dropdown>
      <Space />
      <NavItem
        onClick={toggle('drawerOpen')}
        children='Edit' />
    </Toolbar>
  </Fixed>
)

export default Navbar

