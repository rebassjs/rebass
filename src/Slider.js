
import React from 'react'
import Label from './Label'
import Base from './Base'
import config from './config'

/**
 * Stylized range input with label
 */

const Slider = ({
  label,
  name,
  fill,
  hideLabel,
  children,
  ...props
}, { rebass }) => {
  const { scale } = { ...config, ...rebass }

  const max = props.max || 100
  const min = props.min || 0
  const p = (props.value - min) / (max - min) * 100

  const css = `
    .Slider-input::-webkit-slider-thumb {
      width: 24px;
      height: 24px;
      background-color: currentcolor;
      border: 0;
      border-radius: 999px;
      -webkit-appearance: none;
    }
    .Slider-input::-moz-range-thumb {
      width: 24px;
      height: 24px;
      background-color: currentcolor;
      border: 0;
      border-radius: 999px;
    }
  `.replace(/\n/g, '').replace(/\s\s+/g, ' ')

  const backgroundImage = fill ? `linear-gradient(90deg, currentcolor, currentcolor ${p}%, transparent ${p}%)` : null

  return (
    <Base
      {...props}
      className='Slider'
      baseStyle={{
        paddingBottom: scale[2]
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
        className='Slider-input'
        style={{
          boxSizing: 'border-box',
          display: 'block',
          width: '100%',
          margin: 0,
          marginTop: scale[1],
          cursor: 'pointer',
          color: 'inherit',
          backgroundColor: `rgba(0, 0, 0, ${1/8})`,
          backgroundImage,
          backgroundClip: 'content-box',
          height: 6,
          borderRadius: 999,
          WebkitAppearance: 'none',
          appearance: 'none',
        }} />
    </Base>
  )
}

Slider.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Adds a fill color to the track - requires client-side JavaScript*/
  fill: React.PropTypes.bool,
  /** Hides the form element label */
  hideLabel: React.PropTypes.bool
}

Slider.contextTypes = {
  rebass: React.PropTypes.object
}

export default Slider

