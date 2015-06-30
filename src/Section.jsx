
import React from 'react'

class Section extends React.Component {

  render () {
    return (
      <section {...this.props}
        className='py3'>
        {this.props.children}
      </section>
    )
  }

}

export default Section

