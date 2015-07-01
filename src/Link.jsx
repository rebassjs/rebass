
import React from 'react'

class Link extends React.Component {

  render () {
    return (
      <a {...this.props}>
        {this.props.children}
      </a>
    )
  }

}

export default Link

