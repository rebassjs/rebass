
import React from 'react'

class Menu extends React.Component {

  render () {

    return (
      <div className='bg-white border rounded'>
        {this.props.children}
      </div>
    )
  }

}

export default Menu

