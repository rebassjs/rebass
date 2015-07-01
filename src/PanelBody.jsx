
import React from 'react'

class PanelBody extends React.Component {

  render () {
    return (
      <div className='p2'>
        {this.props.children}
      </div>
    )
  }

}

export default PanelBody

