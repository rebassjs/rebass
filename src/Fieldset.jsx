
import React from 'react'

class Fieldset extends React.Component {

  render () {
    let legend = this.props.legend ? (
      <legend
        className='bold p0 py1 mb2 col-12 border-bottom'>
        {this.props.legend}
      </legend>
    ) : false
    return (
      <fieldset {...this.props}
        className='p0 m0 border-none'>
        {legend}
        {this.props.children}
      </fieldset>
    )
  }

}

export default Fieldset

