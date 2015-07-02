
import React from 'react'

class Radio extends React.Component {

  render () {
    let type = this.props.type || 'text'
    return (
      <div className='mb2'>
        <label className='h5 bold block'>
          <input
            {...this.props}
            type='radio'
            className='mr1' />
          {this.props.label}
        </label>
      </div>
    )
  }

}

Radio.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
}

export default Radio

