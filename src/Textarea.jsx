
import React from 'react'

class Textarea extends React.Component {

  render () {
    return (
      <div className='mb2'>
        <label
          htmlFor={this.props.name}
          className='h5 bold block'>
          {this.props.label}
        </label>
        <textarea
          {...this.props}
          className='block col-12 field' />
      </div>
    )
  }

}

Textarea.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
}

export default Textarea

