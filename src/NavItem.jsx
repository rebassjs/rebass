
import React from 'react'

class NavItem extends React.Component {

  render () {
    return (
      <a {...this.props}
        className='btn'>
        {this.props.children}
      </a>
    )
  }

}

export default NavItem

