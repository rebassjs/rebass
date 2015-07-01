
import React from 'react'

class Range extends React.Component {

  render () {
    return (
      <div className='mb2'>
        <label
          htmlFor={this.props.name}
          className='h5 bold mb1 block'>
          {this.props.label}
        </label>
        <input
          {...this.props}
          type='range'
          className='block col-12 range-light' />
      </div>
    )
  }

}

Range.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
}

export default Range

