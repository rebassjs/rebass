
import React from 'react'

class SectionHeader extends React.Component {

  render () {
    let id = this.props.id || this.props.title || '!'
    return (
      <header {...this.props}
        id={id}
        className='flex flex-baseline flex-wrap py2 mb2 border-bottom'>
        <h2 className='flex-auto m0'>
          <a href={'#' + id}
            className='color-inherit'>
            {this.props.title}
          </a>
        </h2>
        {this.props.children}
      </header>
    )
  }

}

export default SectionHeader

