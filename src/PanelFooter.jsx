
import React from 'react'

class PanelFooter extends React.Component {

  render () {
    let text = <div className='h5'>{this.props.text}</div> || this.props.children
    return (
      <div className='p2 border-top'>
        {text}
      </div>
    )
  }

}

export default PanelFooter

