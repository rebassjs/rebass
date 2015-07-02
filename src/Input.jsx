
import React from 'react'

class Input extends React.Component {

  render () {
    let type = this.props.type || 'text'
    return (
      <div className='mb2'>
        <label
          htmlFor={this.props.name}
          className='h5 bold block'>
          {this.props.label}
        </label>
        <input
          {...this.props}
          type={type}
          className='block col-12 field' />
      </div>
    )
  }

}

Input.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
}

export default Input

