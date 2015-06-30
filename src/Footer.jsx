
import React from 'react'
import cx from 'classnames'

class Footer extends React.Component {

  render () {
    return (
      <footer {...this.props}
        className='h5 py2 mt4 border-top'>
        {this.props.children}
      </footer>
    )
  }

}

export default Footer

