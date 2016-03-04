
import React from 'react'
import Label from './Label'
import Base from './Base'
import config from './config'

/**
 * Input type range with label
 */

const InputRange = ({
  label,
  name,
  hideLabel,
  children,
  ...props
}, { rebass }) => {
  const { scale } = { ...config, ...rebass }

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
  `.replace(/\n/g, '').replace(/\s\s+/g, ' ')

  return (
    <Base
      {...props}
      className='InputRange'
      baseStyle={{
        marginBottom: scale[2]
      }}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Label
        htmlFor={name}
        hide={hideLabel}
        children={label} />
      <input
        {...props}
        type='range'
        name={name}
        className='InputRange-input'
        style={{
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
    </Base>
  )
}

InputRange.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Hides the form element label */
  hideLabel: React.PropTypes.bool
}

InputRange.contextTypes = {
  rebass: React.PropTypes.object
}

export default InputRange

