
import React from 'react'

class PanelHeader extends React.Component {

  render () {
    let text = <h4 className='m0'>{this.props.title}</h4> || this.props.children
    return (
      <div className='p2 white bg-blue rounded-top'>
        {text}
      </div>
    )
  }

}

export default PanelHeader

