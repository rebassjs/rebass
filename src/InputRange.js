
import React from 'react'
import Label from './Label'

/**
 * Input type range with label
 */

const css = `
.InputRange-input::-webkit-slider-thumb {
  width: 8px;
  height: 20px;
  margin-top: -8px;
  background-color: currentcolor;
  border: 0;
  border-radius: 4px;
  -webkit-appearance: none;
}
.InputRange-input::-moz-range-thumb {
  width: 8px;
  height: 20px;
  margin-top: -8px;
  background-color: currentcolor;
  border: 0;
  border-radius: 4px;
  -webkit-appearance: none;
}
.InputRange-input::-webkit-slider-runnable-track {
  height: 4px;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, .25);
}
.InputRange-input::-moz-range-track {
  height: 4px;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, .25);
}
`

const InputRange = ({ label, name, children, style, ...props }) => (
  <div className='InputRange'>
    <style dangerouslySetInnerHTML={{ __html: css }} />
    <Label htmlFor={name} children={label} />
    <input
      {...props}
      type='range'
      name={name}
      className='InputRange-input'
      style={{
        ...style,
        boxSizing: 'border-box',
        display: 'block',
        width: '100%',
        margin: 0,
        paddingTop: 8,
        paddingBottom: 8,
        cursor: 'pointer',
        color: 'inherit',
        backgroundColor: 'transparent',
        WebkitAppearance: 'none',
        appearance: 'none',
      }} />
  </div>
)

InputRange.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired
}


export default InputRange

