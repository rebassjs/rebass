
import React from 'react'

class Panel extends React.Component {

  render () {
    return (
      <div
        className='border rounded'>
        {this.props.children}
      </div>
    )
  }

}

export default Panel

