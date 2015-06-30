
import React from 'react'

class Container extends React.Component {

  render () {
    return (
      <div className='container px2'>
        {this.props.children}
      </div>
    )
  }

}

export default Container

