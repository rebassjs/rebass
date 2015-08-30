
import React from 'react'

class Select extends React.Component {

  render () {
    let type = this.props.type || 'text'
    return (
      <div className='mb2'>
        <label
          htmlFor={this.props.name}
          className='h5 bold block'>
          {this.props.label}
        </label>
        <select
          {...this.props}
          className='block col-12 field'>
          {this.props.options.map(function(option, i) {
            return (
              <option key={i}
                {...option}>
                {option.label}
              </option>
            )
          })}
        </select>
      </div>
    )
  }

}

Select.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired
}

export default Select

