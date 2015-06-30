
import React from 'react'

class Row extends React.Component {

  render () {
    return (
      <div className='clearfix mxn2'>
        {this.props.children}
      </div>
    )
  }

}

export default Row

