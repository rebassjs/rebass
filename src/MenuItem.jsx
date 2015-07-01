
import React from 'react'

class MenuItem extends React.Component {

  render () {
    var label = this.props.children || this.props.label
    return (
      <a {...this.props}
        className='btn block'>
        {label}
      </a>
    )
  }

}

export default MenuItem

